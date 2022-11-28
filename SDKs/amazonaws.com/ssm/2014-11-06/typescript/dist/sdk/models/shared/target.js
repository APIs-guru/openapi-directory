var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
// Target
/**
 * <p>An array of search criteria that targets instances using a key-value pair that you specify.</p> <note> <p> One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>Supported formats include the following.</p> <ul> <li> <p> <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i> </code> </p> </li> <li> <p> <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i> </code> </p> </li> <li> <p> <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i> </code> </p> </li> <li> <p> <b>Run Command and Maintenance window targets only</b>: <code>Key=resource-groups:Name,Values=<i>resource-group-name</i> </code> </p> </li> <li> <p> <b>Maintenance window targets only</b>: <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i> </code> </p> </li> <li> <p> <b>Automation targets only</b>: <code>Key=ResourceGroup;Values=<i>resource-group-name</i> </code> </p> </li> </ul> <p>For example:</p> <ul> <li> <p> <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code> </p> </li> <li> <p> <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code> </p> </li> <li> <p> <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code> </p> </li> <li> <p> <b>Run Command and Maintenance window targets only</b>: <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code> </p> <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p> </li> <li> <p> <b>Maintenance window targets only</b>: <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i> </code> </p> <p>This example demonstrates how to target only Amazon Elastic Compute Cloud (Amazon EC2) instances and VPCs in your maintenance window.</p> </li> <li> <p> <b>Automation targets only</b>: <code>Key=ResourceGroup,Values=MyResourceGroup</code> </p> </li> <li> <p> <b>State Manager association targets only</b>: <code>Key=InstanceIds,Values=<i>*</i> </code> </p> <p>This example demonstrates how to target all managed instances in the Amazon Web Services Region where the association was created.</p> </li> </ul> <p>For more information about how to send commands that target instances using <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
**/
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", String)
    ], Target.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Values" }),
        __metadata("design:type", Array)
    ], Target.prototype, "values", void 0);
    return Target;
}(SpeakeasyBase));
export { Target };

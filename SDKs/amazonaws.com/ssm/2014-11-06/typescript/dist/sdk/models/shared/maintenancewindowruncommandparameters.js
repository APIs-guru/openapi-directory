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
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { DocumentHashTypeEnum } from "./documenthashtypeenum";
import { NotificationConfig } from "./notificationconfig";
// MaintenanceWindowRunCommandParameters
/**
 * <p>The parameters for a <code>RUN_COMMAND</code> task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For <code>RUN_COMMAND</code> tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note>
**/
var MaintenanceWindowRunCommandParameters = /** @class */ (function (_super) {
    __extends(MaintenanceWindowRunCommandParameters, _super);
    function MaintenanceWindowRunCommandParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchOutputConfig" }),
        __metadata("design:type", CloudWatchOutputConfig)
    ], MaintenanceWindowRunCommandParameters.prototype, "cloudWatchOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comment" }),
        __metadata("design:type", String)
    ], MaintenanceWindowRunCommandParameters.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentHash" }),
        __metadata("design:type", String)
    ], MaintenanceWindowRunCommandParameters.prototype, "documentHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentHashType" }),
        __metadata("design:type", String)
    ], MaintenanceWindowRunCommandParameters.prototype, "documentHashType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], MaintenanceWindowRunCommandParameters.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], MaintenanceWindowRunCommandParameters.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputS3BucketName" }),
        __metadata("design:type", String)
    ], MaintenanceWindowRunCommandParameters.prototype, "outputS3BucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputS3KeyPrefix" }),
        __metadata("design:type", String)
    ], MaintenanceWindowRunCommandParameters.prototype, "outputS3KeyPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], MaintenanceWindowRunCommandParameters.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" }),
        __metadata("design:type", String)
    ], MaintenanceWindowRunCommandParameters.prototype, "serviceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeoutSeconds" }),
        __metadata("design:type", Number)
    ], MaintenanceWindowRunCommandParameters.prototype, "timeoutSeconds", void 0);
    return MaintenanceWindowRunCommandParameters;
}(SpeakeasyBase));
export { MaintenanceWindowRunCommandParameters };

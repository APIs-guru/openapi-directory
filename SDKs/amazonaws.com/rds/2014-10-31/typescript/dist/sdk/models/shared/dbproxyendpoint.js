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
import { DbProxyEndpointStatusEnum } from "./dbproxyendpointstatusenum";
import { DbProxyEndpointTargetRoleEnum } from "./dbproxyendpointtargetroleenum";
// DbProxyEndpoint
/**
 * <p>The data structure representing an endpoint associated with a DB proxy. RDS automatically creates one endpoint for each DB proxy. For Aurora DB clusters, you can associate additional endpoints with the same DB proxy. These endpoints can be read/write or read-only. They can also reside in different VPCs than the associated DB proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyEndpoints</code> operation.</p>
**/
var DbProxyEndpoint = /** @class */ (function (_super) {
    __extends(DbProxyEndpoint, _super);
    function DbProxyEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DbProxyEndpoint.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbProxyEndpoint.prototype, "dbProxyEndpointArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbProxyEndpoint.prototype, "dbProxyEndpointName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbProxyEndpoint.prototype, "dbProxyName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbProxyEndpoint.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DbProxyEndpoint.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbProxyEndpoint.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbProxyEndpoint.prototype, "targetRole", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbProxyEndpoint.prototype, "vpcId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DbProxyEndpoint.prototype, "vpcSecurityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DbProxyEndpoint.prototype, "vpcSubnetIds", void 0);
    return DbProxyEndpoint;
}(SpeakeasyBase));
export { DbProxyEndpoint };

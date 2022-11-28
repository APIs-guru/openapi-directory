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
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingChange } from "./googlecloudapigeev1deploymentchangereportroutingchange";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict } from "./googlecloudapigeev1deploymentchangereportroutingconflict";
import { GoogleRpcPreconditionFailure } from "./googlerpcpreconditionfailure";
// GoogleCloudApigeeV1DeploymentChangeReport
/**
 * Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being routed to other existing deployments. 2) To warn users if some base path in the proxy will not receive traffic due to an existing deployment having already claimed that base path. The presence of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected.
**/
var GoogleCloudApigeeV1DeploymentChangeReport = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1DeploymentChangeReport, _super);
    function GoogleCloudApigeeV1DeploymentChangeReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingChanges", elemType: GoogleCloudApigeeV1DeploymentChangeReportRoutingChange }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeploymentChangeReport.prototype, "routingChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingConflicts", elemType: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeploymentChangeReport.prototype, "routingConflicts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationErrors" }),
        __metadata("design:type", GoogleRpcPreconditionFailure)
    ], GoogleCloudApigeeV1DeploymentChangeReport.prototype, "validationErrors", void 0);
    return GoogleCloudApigeeV1DeploymentChangeReport;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1DeploymentChangeReport };

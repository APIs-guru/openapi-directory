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
import { AwsApiGatewayAccessLogSettings } from "./awsapigatewayaccesslogsettings";
import { AwsApiGatewayCanarySettings } from "./awsapigatewaycanarysettings";
import { AwsApiGatewayMethodSettings } from "./awsapigatewaymethodsettings";
// AwsApiGatewayStageDetails
/**
 * Provides information about a version 1 Amazon API Gateway stage.
**/
var AwsApiGatewayStageDetails = /** @class */ (function (_super) {
    __extends(AwsApiGatewayStageDetails, _super);
    function AwsApiGatewayStageDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessLogSettings" }),
        __metadata("design:type", AwsApiGatewayAccessLogSettings)
    ], AwsApiGatewayStageDetails.prototype, "accessLogSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CacheClusterEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsApiGatewayStageDetails.prototype, "cacheClusterEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CacheClusterSize" }),
        __metadata("design:type", String)
    ], AwsApiGatewayStageDetails.prototype, "cacheClusterSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CacheClusterStatus" }),
        __metadata("design:type", String)
    ], AwsApiGatewayStageDetails.prototype, "cacheClusterStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanarySettings" }),
        __metadata("design:type", AwsApiGatewayCanarySettings)
    ], AwsApiGatewayStageDetails.prototype, "canarySettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientCertificateId" }),
        __metadata("design:type", String)
    ], AwsApiGatewayStageDetails.prototype, "clientCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", String)
    ], AwsApiGatewayStageDetails.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeploymentId" }),
        __metadata("design:type", String)
    ], AwsApiGatewayStageDetails.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], AwsApiGatewayStageDetails.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentationVersion" }),
        __metadata("design:type", String)
    ], AwsApiGatewayStageDetails.prototype, "documentationVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedDate" }),
        __metadata("design:type", String)
    ], AwsApiGatewayStageDetails.prototype, "lastUpdatedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MethodSettings", elemType: AwsApiGatewayMethodSettings }),
        __metadata("design:type", Array)
    ], AwsApiGatewayStageDetails.prototype, "methodSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StageName" }),
        __metadata("design:type", String)
    ], AwsApiGatewayStageDetails.prototype, "stageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TracingEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsApiGatewayStageDetails.prototype, "tracingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Variables" }),
        __metadata("design:type", Map)
    ], AwsApiGatewayStageDetails.prototype, "variables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebAclArn" }),
        __metadata("design:type", String)
    ], AwsApiGatewayStageDetails.prototype, "webAclArn", void 0);
    return AwsApiGatewayStageDetails;
}(SpeakeasyBase));
export { AwsApiGatewayStageDetails };

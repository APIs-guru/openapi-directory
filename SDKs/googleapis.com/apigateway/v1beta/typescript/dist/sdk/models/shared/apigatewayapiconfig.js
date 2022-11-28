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
import { ApigatewayGatewayConfig } from "./apigatewaygatewayconfig";
import { ApigatewayApiConfigGrpcServiceDefinition } from "./apigatewayapiconfiggrpcservicedefinition";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";
import { ApigatewayApiConfigOpenApiDocument } from "./apigatewayapiconfigopenapidocument";
export var ApigatewayApiConfigStateEnum;
(function (ApigatewayApiConfigStateEnum) {
    ApigatewayApiConfigStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ApigatewayApiConfigStateEnum["Creating"] = "CREATING";
    ApigatewayApiConfigStateEnum["Active"] = "ACTIVE";
    ApigatewayApiConfigStateEnum["Failed"] = "FAILED";
    ApigatewayApiConfigStateEnum["Deleting"] = "DELETING";
    ApigatewayApiConfigStateEnum["Updating"] = "UPDATING";
    ApigatewayApiConfigStateEnum["Activating"] = "ACTIVATING";
})(ApigatewayApiConfigStateEnum || (ApigatewayApiConfigStateEnum = {}));
// ApigatewayApiConfigInput
/**
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
**/
var ApigatewayApiConfigInput = /** @class */ (function (_super) {
    __extends(ApigatewayApiConfigInput, _super);
    function ApigatewayApiConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApigatewayApiConfigInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayConfig" }),
        __metadata("design:type", ApigatewayGatewayConfig)
    ], ApigatewayApiConfigInput.prototype, "gatewayConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayServiceAccount" }),
        __metadata("design:type", String)
    ], ApigatewayApiConfigInput.prototype, "gatewayServiceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grpcServices", elemType: ApigatewayApiConfigGrpcServiceDefinition }),
        __metadata("design:type", Array)
    ], ApigatewayApiConfigInput.prototype, "grpcServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApigatewayApiConfigInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedServiceConfigs", elemType: ApigatewayApiConfigFile }),
        __metadata("design:type", Array)
    ], ApigatewayApiConfigInput.prototype, "managedServiceConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openapiDocuments", elemType: ApigatewayApiConfigOpenApiDocument }),
        __metadata("design:type", Array)
    ], ApigatewayApiConfigInput.prototype, "openapiDocuments", void 0);
    return ApigatewayApiConfigInput;
}(SpeakeasyBase));
export { ApigatewayApiConfigInput };
// ApigatewayApiConfig
/**
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
**/
var ApigatewayApiConfig = /** @class */ (function (_super) {
    __extends(ApigatewayApiConfig, _super);
    function ApigatewayApiConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ApigatewayApiConfig.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApigatewayApiConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayConfig" }),
        __metadata("design:type", ApigatewayGatewayConfig)
    ], ApigatewayApiConfig.prototype, "gatewayConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayServiceAccount" }),
        __metadata("design:type", String)
    ], ApigatewayApiConfig.prototype, "gatewayServiceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grpcServices", elemType: ApigatewayApiConfigGrpcServiceDefinition }),
        __metadata("design:type", Array)
    ], ApigatewayApiConfig.prototype, "grpcServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApigatewayApiConfig.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedServiceConfigs", elemType: ApigatewayApiConfigFile }),
        __metadata("design:type", Array)
    ], ApigatewayApiConfig.prototype, "managedServiceConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApigatewayApiConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openapiDocuments", elemType: ApigatewayApiConfigOpenApiDocument }),
        __metadata("design:type", Array)
    ], ApigatewayApiConfig.prototype, "openapiDocuments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceConfigId" }),
        __metadata("design:type", String)
    ], ApigatewayApiConfig.prototype, "serviceConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ApigatewayApiConfig.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ApigatewayApiConfig.prototype, "updateTime", void 0);
    return ApigatewayApiConfig;
}(SpeakeasyBase));
export { ApigatewayApiConfig };

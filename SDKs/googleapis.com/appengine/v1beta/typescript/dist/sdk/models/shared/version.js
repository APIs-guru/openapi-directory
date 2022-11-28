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
import { ApiConfigHandler } from "./apiconfighandler";
import { AutomaticScaling } from "./automaticscaling";
import { BasicScaling } from "./basicscaling";
import { Deployment } from "./deployment";
import { EndpointsApiService } from "./endpointsapiservice";
import { Entrypoint } from "./entrypoint";
import { ErrorHandler } from "./errorhandler";
import { UrlMap } from "./urlmap";
import { HealthCheck } from "./healthcheck";
import { Library } from "./library";
import { LivenessCheck } from "./livenesscheck";
import { ManualScaling } from "./manualscaling";
import { Network } from "./network";
import { ReadinessCheck } from "./readinesscheck";
import { Resources } from "./resources";
import { VpcAccessConnector } from "./vpcaccessconnector";
export var VersionInboundServicesEnum;
(function (VersionInboundServicesEnum) {
    VersionInboundServicesEnum["InboundServiceUnspecified"] = "INBOUND_SERVICE_UNSPECIFIED";
    VersionInboundServicesEnum["InboundServiceMail"] = "INBOUND_SERVICE_MAIL";
    VersionInboundServicesEnum["InboundServiceMailBounce"] = "INBOUND_SERVICE_MAIL_BOUNCE";
    VersionInboundServicesEnum["InboundServiceXmppError"] = "INBOUND_SERVICE_XMPP_ERROR";
    VersionInboundServicesEnum["InboundServiceXmppMessage"] = "INBOUND_SERVICE_XMPP_MESSAGE";
    VersionInboundServicesEnum["InboundServiceXmppSubscribe"] = "INBOUND_SERVICE_XMPP_SUBSCRIBE";
    VersionInboundServicesEnum["InboundServiceXmppPresence"] = "INBOUND_SERVICE_XMPP_PRESENCE";
    VersionInboundServicesEnum["InboundServiceChannelPresence"] = "INBOUND_SERVICE_CHANNEL_PRESENCE";
    VersionInboundServicesEnum["InboundServiceWarmup"] = "INBOUND_SERVICE_WARMUP";
})(VersionInboundServicesEnum || (VersionInboundServicesEnum = {}));
export var VersionServingStatusEnum;
(function (VersionServingStatusEnum) {
    VersionServingStatusEnum["ServingStatusUnspecified"] = "SERVING_STATUS_UNSPECIFIED";
    VersionServingStatusEnum["Serving"] = "SERVING";
    VersionServingStatusEnum["Stopped"] = "STOPPED";
})(VersionServingStatusEnum || (VersionServingStatusEnum = {}));
// Version
/**
 * A Version resource is a specific set of source code and configuration files that are deployed into a service.
**/
var Version = /** @class */ (function (_super) {
    __extends(Version, _super);
    function Version() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiConfig" }),
        __metadata("design:type", ApiConfigHandler)
    ], Version.prototype, "apiConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngineApis" }),
        __metadata("design:type", Boolean)
    ], Version.prototype, "appEngineApis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automaticScaling" }),
        __metadata("design:type", AutomaticScaling)
    ], Version.prototype, "automaticScaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicScaling" }),
        __metadata("design:type", BasicScaling)
    ], Version.prototype, "basicScaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=betaSettings" }),
        __metadata("design:type", Map)
    ], Version.prototype, "betaSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildEnvVariables" }),
        __metadata("design:type", Map)
    ], Version.prototype, "buildEnvVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Version.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], Version.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultExpiration" }),
        __metadata("design:type", String)
    ], Version.prototype, "defaultExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployment" }),
        __metadata("design:type", Deployment)
    ], Version.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskUsageBytes" }),
        __metadata("design:type", String)
    ], Version.prototype, "diskUsageBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointsApiService" }),
        __metadata("design:type", EndpointsApiService)
    ], Version.prototype, "endpointsApiService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entrypoint" }),
        __metadata("design:type", Entrypoint)
    ], Version.prototype, "entrypoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=env" }),
        __metadata("design:type", String)
    ], Version.prototype, "env", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=envVariables" }),
        __metadata("design:type", Map)
    ], Version.prototype, "envVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorHandlers", elemType: ErrorHandler }),
        __metadata("design:type", Array)
    ], Version.prototype, "errorHandlers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=handlers", elemType: UrlMap }),
        __metadata("design:type", Array)
    ], Version.prototype, "handlers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthCheck" }),
        __metadata("design:type", HealthCheck)
    ], Version.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Version.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inboundServices" }),
        __metadata("design:type", Array)
    ], Version.prototype, "inboundServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceClass" }),
        __metadata("design:type", String)
    ], Version.prototype, "instanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=libraries", elemType: Library }),
        __metadata("design:type", Array)
    ], Version.prototype, "libraries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=livenessCheck" }),
        __metadata("design:type", LivenessCheck)
    ], Version.prototype, "livenessCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manualScaling" }),
        __metadata("design:type", ManualScaling)
    ], Version.prototype, "manualScaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Version.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Network)
    ], Version.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nobuildFilesRegex" }),
        __metadata("design:type", String)
    ], Version.prototype, "nobuildFilesRegex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readinessCheck" }),
        __metadata("design:type", ReadinessCheck)
    ], Version.prototype, "readinessCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources" }),
        __metadata("design:type", Resources)
    ], Version.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtime" }),
        __metadata("design:type", String)
    ], Version.prototype, "runtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeApiVersion" }),
        __metadata("design:type", String)
    ], Version.prototype, "runtimeApiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeChannel" }),
        __metadata("design:type", String)
    ], Version.prototype, "runtimeChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeMainExecutablePath" }),
        __metadata("design:type", String)
    ], Version.prototype, "runtimeMainExecutablePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], Version.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingStatus" }),
        __metadata("design:type", String)
    ], Version.prototype, "servingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threadsafe" }),
        __metadata("design:type", Boolean)
    ], Version.prototype, "threadsafe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionUrl" }),
        __metadata("design:type", String)
    ], Version.prototype, "versionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vm" }),
        __metadata("design:type", Boolean)
    ], Version.prototype, "vm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcAccessConnector" }),
        __metadata("design:type", VpcAccessConnector)
    ], Version.prototype, "vpcAccessConnector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zones" }),
        __metadata("design:type", Array)
    ], Version.prototype, "zones", void 0);
    return Version;
}(SpeakeasyBase));
export { Version };

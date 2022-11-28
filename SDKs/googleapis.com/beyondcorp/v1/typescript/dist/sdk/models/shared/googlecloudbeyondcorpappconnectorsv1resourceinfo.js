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
export var GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;
(function (GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum) {
    GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum["HealthStatusUnspecified"] = "HEALTH_STATUS_UNSPECIFIED";
    GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum["Healthy"] = "HEALTHY";
    GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum["Unhealthy"] = "UNHEALTHY";
    GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum["Unresponsive"] = "UNRESPONSIVE";
    GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum["Degraded"] = "DEGRADED";
})(GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum || (GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum = {}));
// GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo
/**
 * ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent
**/
var GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo, _super);
    function GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", Map)
    ], GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub", elemType: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo.prototype, "sub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo.prototype, "time", void 0);
    return GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo };

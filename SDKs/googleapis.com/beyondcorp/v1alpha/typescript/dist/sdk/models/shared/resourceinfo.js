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
export var ResourceInfoStatusEnum;
(function (ResourceInfoStatusEnum) {
    ResourceInfoStatusEnum["HealthStatusUnspecified"] = "HEALTH_STATUS_UNSPECIFIED";
    ResourceInfoStatusEnum["Healthy"] = "HEALTHY";
    ResourceInfoStatusEnum["Unhealthy"] = "UNHEALTHY";
    ResourceInfoStatusEnum["Unresponsive"] = "UNRESPONSIVE";
    ResourceInfoStatusEnum["Degraded"] = "DEGRADED";
})(ResourceInfoStatusEnum || (ResourceInfoStatusEnum = {}));
// ResourceInfo
/**
 * ResourceInfo represents the information/status of the associated resource.
**/
var ResourceInfo = /** @class */ (function (_super) {
    __extends(ResourceInfo, _super);
    function ResourceInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ResourceInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", Map)
    ], ResourceInfo.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ResourceInfo.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub", elemType: ResourceInfo }),
        __metadata("design:type", Array)
    ], ResourceInfo.prototype, "sub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], ResourceInfo.prototype, "time", void 0);
    return ResourceInfo;
}(SpeakeasyBase));
export { ResourceInfo };

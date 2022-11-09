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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var UpdateLaunchConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationHeaders, _super);
    function UpdateLaunchConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateLaunchConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateLaunchConfigurationHeaders };
export var UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;
(function (UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum) {
    UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum["Stopped"] = "STOPPED";
    UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum["Started"] = "STARTED";
})(UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum || (UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum = {}));
// UpdateLaunchConfigurationRequestBodyLicensing
/**
 * Configure Licensing.
**/
var UpdateLaunchConfigurationRequestBodyLicensing = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationRequestBodyLicensing, _super);
    function UpdateLaunchConfigurationRequestBodyLicensing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=osByol" }),
        __metadata("design:type", Boolean)
    ], UpdateLaunchConfigurationRequestBodyLicensing.prototype, "osByol", void 0);
    return UpdateLaunchConfigurationRequestBodyLicensing;
}(SpeakeasyBase));
export { UpdateLaunchConfigurationRequestBodyLicensing };
export var UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum;
(function (UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum) {
    UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum["None"] = "NONE";
    UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum["Basic"] = "BASIC";
})(UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum || (UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum = {}));
var UpdateLaunchConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationRequestBody, _super);
    function UpdateLaunchConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=copyPrivateIp" }),
        __metadata("design:type", Boolean)
    ], UpdateLaunchConfigurationRequestBody.prototype, "copyPrivateIp", void 0);
    __decorate([
        Metadata({ data: "json, name=copyTags" }),
        __metadata("design:type", Boolean)
    ], UpdateLaunchConfigurationRequestBody.prototype, "copyTags", void 0);
    __decorate([
        Metadata({ data: "json, name=launchDisposition" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationRequestBody.prototype, "launchDisposition", void 0);
    __decorate([
        Metadata({ data: "json, name=licensing" }),
        __metadata("design:type", UpdateLaunchConfigurationRequestBodyLicensing)
    ], UpdateLaunchConfigurationRequestBody.prototype, "licensing", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceServerID" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationRequestBody.prototype, "sourceServerId", void 0);
    __decorate([
        Metadata({ data: "json, name=targetInstanceTypeRightSizingMethod" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationRequestBody.prototype, "targetInstanceTypeRightSizingMethod", void 0);
    return UpdateLaunchConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateLaunchConfigurationRequestBody };
var UpdateLaunchConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationRequest, _super);
    function UpdateLaunchConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLaunchConfigurationHeaders)
    ], UpdateLaunchConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateLaunchConfigurationRequestBody)
    ], UpdateLaunchConfigurationRequest.prototype, "request", void 0);
    return UpdateLaunchConfigurationRequest;
}(SpeakeasyBase));
export { UpdateLaunchConfigurationRequest };
var UpdateLaunchConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationResponse, _super);
    function UpdateLaunchConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchConfigurationResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LaunchConfiguration)
    ], UpdateLaunchConfigurationResponse.prototype, "launchConfiguration", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateLaunchConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchConfigurationResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchConfigurationResponse.prototype, "validationException", void 0);
    return UpdateLaunchConfigurationResponse;
}(SpeakeasyBase));
export { UpdateLaunchConfigurationResponse };

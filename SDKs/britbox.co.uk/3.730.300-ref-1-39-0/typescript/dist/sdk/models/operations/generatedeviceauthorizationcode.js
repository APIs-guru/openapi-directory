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
import * as shared from "../shared";
var GenerateDeviceAuthorizationCodeQueryParams = /** @class */ (function (_super) {
    __extends(GenerateDeviceAuthorizationCodeQueryParams, _super);
    function GenerateDeviceAuthorizationCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GenerateDeviceAuthorizationCodeQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GenerateDeviceAuthorizationCodeQueryParams.prototype, "lang", void 0);
    return GenerateDeviceAuthorizationCodeQueryParams;
}(SpeakeasyBase));
export { GenerateDeviceAuthorizationCodeQueryParams };
var GenerateDeviceAuthorizationCodeRequest = /** @class */ (function (_super) {
    __extends(GenerateDeviceAuthorizationCodeRequest, _super);
    function GenerateDeviceAuthorizationCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenerateDeviceAuthorizationCodeQueryParams)
    ], GenerateDeviceAuthorizationCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeviceRegistrationRequest)
    ], GenerateDeviceAuthorizationCodeRequest.prototype, "request", void 0);
    return GenerateDeviceAuthorizationCodeRequest;
}(SpeakeasyBase));
export { GenerateDeviceAuthorizationCodeRequest };
var GenerateDeviceAuthorizationCodeResponse = /** @class */ (function (_super) {
    __extends(GenerateDeviceAuthorizationCodeResponse, _super);
    function GenerateDeviceAuthorizationCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenerateDeviceAuthorizationCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeviceAuthorizationCode)
    ], GenerateDeviceAuthorizationCodeResponse.prototype, "deviceAuthorizationCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GenerateDeviceAuthorizationCodeResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenerateDeviceAuthorizationCodeResponse.prototype, "statusCode", void 0);
    return GenerateDeviceAuthorizationCodeResponse;
}(SpeakeasyBase));
export { GenerateDeviceAuthorizationCodeResponse };

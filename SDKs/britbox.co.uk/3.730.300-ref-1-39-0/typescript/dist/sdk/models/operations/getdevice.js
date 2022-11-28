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
var GetDevicePathParams = /** @class */ (function (_super) {
    __extends(GetDevicePathParams, _super);
    function GetDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetDevicePathParams.prototype, "id", void 0);
    return GetDevicePathParams;
}(SpeakeasyBase));
export { GetDevicePathParams };
var GetDeviceQueryParams = /** @class */ (function (_super) {
    __extends(GetDeviceQueryParams, _super);
    function GetDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetDeviceQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetDeviceQueryParams.prototype, "lang", void 0);
    return GetDeviceQueryParams;
}(SpeakeasyBase));
export { GetDeviceQueryParams };
var GetDeviceSecurity = /** @class */ (function (_super) {
    __extends(GetDeviceSecurity, _super);
    function GetDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GetDeviceSecurity.prototype, "accountAuth", void 0);
    return GetDeviceSecurity;
}(SpeakeasyBase));
export { GetDeviceSecurity };
var GetDeviceRequest = /** @class */ (function (_super) {
    __extends(GetDeviceRequest, _super);
    function GetDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDevicePathParams)
    ], GetDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceQueryParams)
    ], GetDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceSecurity)
    ], GetDeviceRequest.prototype, "security", void 0);
    return GetDeviceRequest;
}(SpeakeasyBase));
export { GetDeviceRequest };
var GetDeviceResponse = /** @class */ (function (_super) {
    __extends(GetDeviceResponse, _super);
    function GetDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Device)
    ], GetDeviceResponse.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetDeviceResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeviceResponse.prototype, "statusCode", void 0);
    return GetDeviceResponse;
}(SpeakeasyBase));
export { GetDeviceResponse };

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
var DeregisterDevicePathParams = /** @class */ (function (_super) {
    __extends(DeregisterDevicePathParams, _super);
    function DeregisterDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeregisterDevicePathParams.prototype, "id", void 0);
    return DeregisterDevicePathParams;
}(SpeakeasyBase));
export { DeregisterDevicePathParams };
var DeregisterDeviceQueryParams = /** @class */ (function (_super) {
    __extends(DeregisterDeviceQueryParams, _super);
    function DeregisterDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], DeregisterDeviceQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], DeregisterDeviceQueryParams.prototype, "lang", void 0);
    return DeregisterDeviceQueryParams;
}(SpeakeasyBase));
export { DeregisterDeviceQueryParams };
var DeregisterDeviceSecurity = /** @class */ (function (_super) {
    __extends(DeregisterDeviceSecurity, _super);
    function DeregisterDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], DeregisterDeviceSecurity.prototype, "accountAuth", void 0);
    return DeregisterDeviceSecurity;
}(SpeakeasyBase));
export { DeregisterDeviceSecurity };
var DeregisterDeviceRequest = /** @class */ (function (_super) {
    __extends(DeregisterDeviceRequest, _super);
    function DeregisterDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeregisterDevicePathParams)
    ], DeregisterDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeregisterDeviceQueryParams)
    ], DeregisterDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeregisterDeviceSecurity)
    ], DeregisterDeviceRequest.prototype, "security", void 0);
    return DeregisterDeviceRequest;
}(SpeakeasyBase));
export { DeregisterDeviceRequest };
var DeregisterDeviceResponse = /** @class */ (function (_super) {
    __extends(DeregisterDeviceResponse, _super);
    function DeregisterDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeregisterDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], DeregisterDeviceResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeregisterDeviceResponse.prototype, "statusCode", void 0);
    return DeregisterDeviceResponse;
}(SpeakeasyBase));
export { DeregisterDeviceResponse };

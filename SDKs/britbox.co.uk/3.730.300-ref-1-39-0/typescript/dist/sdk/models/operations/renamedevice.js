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
var RenameDevicePathParams = /** @class */ (function (_super) {
    __extends(RenameDevicePathParams, _super);
    function RenameDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], RenameDevicePathParams.prototype, "id", void 0);
    return RenameDevicePathParams;
}(SpeakeasyBase));
export { RenameDevicePathParams };
var RenameDeviceQueryParams = /** @class */ (function (_super) {
    __extends(RenameDeviceQueryParams, _super);
    function RenameDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], RenameDeviceQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], RenameDeviceQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], RenameDeviceQueryParams.prototype, "name", void 0);
    return RenameDeviceQueryParams;
}(SpeakeasyBase));
export { RenameDeviceQueryParams };
var RenameDeviceSecurity = /** @class */ (function (_super) {
    __extends(RenameDeviceSecurity, _super);
    function RenameDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], RenameDeviceSecurity.prototype, "accountAuth", void 0);
    return RenameDeviceSecurity;
}(SpeakeasyBase));
export { RenameDeviceSecurity };
var RenameDeviceRequest = /** @class */ (function (_super) {
    __extends(RenameDeviceRequest, _super);
    function RenameDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RenameDevicePathParams)
    ], RenameDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RenameDeviceQueryParams)
    ], RenameDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RenameDeviceSecurity)
    ], RenameDeviceRequest.prototype, "security", void 0);
    return RenameDeviceRequest;
}(SpeakeasyBase));
export { RenameDeviceRequest };
var RenameDeviceResponse = /** @class */ (function (_super) {
    __extends(RenameDeviceResponse, _super);
    function RenameDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RenameDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], RenameDeviceResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RenameDeviceResponse.prototype, "statusCode", void 0);
    return RenameDeviceResponse;
}(SpeakeasyBase));
export { RenameDeviceResponse };

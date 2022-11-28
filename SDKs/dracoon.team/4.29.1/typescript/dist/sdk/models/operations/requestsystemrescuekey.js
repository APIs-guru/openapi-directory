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
var RequestSystemRescueKeyPathParams = /** @class */ (function (_super) {
    __extends(RequestSystemRescueKeyPathParams, _super);
    function RequestSystemRescueKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" }),
        __metadata("design:type", Number)
    ], RequestSystemRescueKeyPathParams.prototype, "fileId", void 0);
    return RequestSystemRescueKeyPathParams;
}(SpeakeasyBase));
export { RequestSystemRescueKeyPathParams };
var RequestSystemRescueKeyQueryParams = /** @class */ (function (_super) {
    __extends(RequestSystemRescueKeyQueryParams, _super);
    function RequestSystemRescueKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], RequestSystemRescueKeyQueryParams.prototype, "version", void 0);
    return RequestSystemRescueKeyQueryParams;
}(SpeakeasyBase));
export { RequestSystemRescueKeyQueryParams };
var RequestSystemRescueKeyHeaders = /** @class */ (function (_super) {
    __extends(RequestSystemRescueKeyHeaders, _super);
    function RequestSystemRescueKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestSystemRescueKeyHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestSystemRescueKeyHeaders;
}(SpeakeasyBase));
export { RequestSystemRescueKeyHeaders };
var RequestSystemRescueKeyRequest = /** @class */ (function (_super) {
    __extends(RequestSystemRescueKeyRequest, _super);
    function RequestSystemRescueKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestSystemRescueKeyPathParams)
    ], RequestSystemRescueKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestSystemRescueKeyQueryParams)
    ], RequestSystemRescueKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestSystemRescueKeyHeaders)
    ], RequestSystemRescueKeyRequest.prototype, "headers", void 0);
    return RequestSystemRescueKeyRequest;
}(SpeakeasyBase));
export { RequestSystemRescueKeyRequest };
var RequestSystemRescueKeyResponse = /** @class */ (function (_super) {
    __extends(RequestSystemRescueKeyResponse, _super);
    function RequestSystemRescueKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestSystemRescueKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestSystemRescueKeyResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileKey)
    ], RequestSystemRescueKeyResponse.prototype, "fileKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestSystemRescueKeyResponse.prototype, "statusCode", void 0);
    return RequestSystemRescueKeyResponse;
}(SpeakeasyBase));
export { RequestSystemRescueKeyResponse };

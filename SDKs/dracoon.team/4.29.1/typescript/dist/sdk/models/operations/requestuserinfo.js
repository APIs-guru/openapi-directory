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
var RequestUserInfoQueryParams = /** @class */ (function (_super) {
    __extends(RequestUserInfoQueryParams, _super);
    function RequestUserInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=more_info" }),
        __metadata("design:type", Boolean)
    ], RequestUserInfoQueryParams.prototype, "moreInfo", void 0);
    return RequestUserInfoQueryParams;
}(SpeakeasyBase));
export { RequestUserInfoQueryParams };
var RequestUserInfoHeaders = /** @class */ (function (_super) {
    __extends(RequestUserInfoHeaders, _super);
    function RequestUserInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestUserInfoHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestUserInfoHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestUserInfoHeaders;
}(SpeakeasyBase));
export { RequestUserInfoHeaders };
var RequestUserInfoRequest = /** @class */ (function (_super) {
    __extends(RequestUserInfoRequest, _super);
    function RequestUserInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUserInfoQueryParams)
    ], RequestUserInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUserInfoHeaders)
    ], RequestUserInfoRequest.prototype, "headers", void 0);
    return RequestUserInfoRequest;
}(SpeakeasyBase));
export { RequestUserInfoRequest };
var RequestUserInfoResponse = /** @class */ (function (_super) {
    __extends(RequestUserInfoResponse, _super);
    function RequestUserInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestUserInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestUserInfoResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestUserInfoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserAccount)
    ], RequestUserInfoResponse.prototype, "userAccount", void 0);
    return RequestUserInfoResponse;
}(SpeakeasyBase));
export { RequestUserInfoResponse };

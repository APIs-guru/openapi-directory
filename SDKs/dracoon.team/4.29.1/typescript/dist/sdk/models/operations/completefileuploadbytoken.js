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
var CompleteFileUploadByTokenPathParams = /** @class */ (function (_super) {
    __extends(CompleteFileUploadByTokenPathParams, _super);
    function CompleteFileUploadByTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], CompleteFileUploadByTokenPathParams.prototype, "token", void 0);
    return CompleteFileUploadByTokenPathParams;
}(SpeakeasyBase));
export { CompleteFileUploadByTokenPathParams };
var CompleteFileUploadByTokenHeaders = /** @class */ (function (_super) {
    __extends(CompleteFileUploadByTokenHeaders, _super);
    function CompleteFileUploadByTokenHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], CompleteFileUploadByTokenHeaders.prototype, "xSdsDateFormat", void 0);
    return CompleteFileUploadByTokenHeaders;
}(SpeakeasyBase));
export { CompleteFileUploadByTokenHeaders };
var CompleteFileUploadByTokenRequest = /** @class */ (function (_super) {
    __extends(CompleteFileUploadByTokenRequest, _super);
    function CompleteFileUploadByTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompleteFileUploadByTokenPathParams)
    ], CompleteFileUploadByTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompleteFileUploadByTokenHeaders)
    ], CompleteFileUploadByTokenRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CompleteUploadRequest)
    ], CompleteFileUploadByTokenRequest.prototype, "request", void 0);
    return CompleteFileUploadByTokenRequest;
}(SpeakeasyBase));
export { CompleteFileUploadByTokenRequest };
var CompleteFileUploadByTokenResponse = /** @class */ (function (_super) {
    __extends(CompleteFileUploadByTokenResponse, _super);
    function CompleteFileUploadByTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompleteFileUploadByTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CompleteFileUploadByTokenResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Node)
    ], CompleteFileUploadByTokenResponse.prototype, "node", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompleteFileUploadByTokenResponse.prototype, "statusCode", void 0);
    return CompleteFileUploadByTokenResponse;
}(SpeakeasyBase));
export { CompleteFileUploadByTokenResponse };

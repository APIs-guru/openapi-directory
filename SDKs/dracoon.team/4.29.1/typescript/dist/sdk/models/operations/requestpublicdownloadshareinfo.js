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
var RequestPublicDownloadShareInfoPathParams = /** @class */ (function (_super) {
    __extends(RequestPublicDownloadShareInfoPathParams, _super);
    function RequestPublicDownloadShareInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" }),
        __metadata("design:type", String)
    ], RequestPublicDownloadShareInfoPathParams.prototype, "accessKey", void 0);
    return RequestPublicDownloadShareInfoPathParams;
}(SpeakeasyBase));
export { RequestPublicDownloadShareInfoPathParams };
var RequestPublicDownloadShareInfoHeaders = /** @class */ (function (_super) {
    __extends(RequestPublicDownloadShareInfoHeaders, _super);
    function RequestPublicDownloadShareInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestPublicDownloadShareInfoHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestPublicDownloadShareInfoHeaders;
}(SpeakeasyBase));
export { RequestPublicDownloadShareInfoHeaders };
var RequestPublicDownloadShareInfoRequest = /** @class */ (function (_super) {
    __extends(RequestPublicDownloadShareInfoRequest, _super);
    function RequestPublicDownloadShareInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestPublicDownloadShareInfoPathParams)
    ], RequestPublicDownloadShareInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestPublicDownloadShareInfoHeaders)
    ], RequestPublicDownloadShareInfoRequest.prototype, "headers", void 0);
    return RequestPublicDownloadShareInfoRequest;
}(SpeakeasyBase));
export { RequestPublicDownloadShareInfoRequest };
var RequestPublicDownloadShareInfoResponseOutput = /** @class */ (function (_super) {
    __extends(RequestPublicDownloadShareInfoResponseOutput, _super);
    function RequestPublicDownloadShareInfoResponseOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestPublicDownloadShareInfoResponseOutput.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestPublicDownloadShareInfoResponseOutput.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PublicDownloadShareOutput)
    ], RequestPublicDownloadShareInfoResponseOutput.prototype, "publicDownloadShare", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestPublicDownloadShareInfoResponseOutput.prototype, "statusCode", void 0);
    return RequestPublicDownloadShareInfoResponseOutput;
}(SpeakeasyBase));
export { RequestPublicDownloadShareInfoResponseOutput };

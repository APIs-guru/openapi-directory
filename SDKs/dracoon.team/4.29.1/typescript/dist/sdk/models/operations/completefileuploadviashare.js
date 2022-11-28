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
var CompleteFileUploadViaSharePathParams = /** @class */ (function (_super) {
    __extends(CompleteFileUploadViaSharePathParams, _super);
    function CompleteFileUploadViaSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" }),
        __metadata("design:type", String)
    ], CompleteFileUploadViaSharePathParams.prototype, "accessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" }),
        __metadata("design:type", String)
    ], CompleteFileUploadViaSharePathParams.prototype, "uploadId", void 0);
    return CompleteFileUploadViaSharePathParams;
}(SpeakeasyBase));
export { CompleteFileUploadViaSharePathParams };
var CompleteFileUploadViaShareHeaders = /** @class */ (function (_super) {
    __extends(CompleteFileUploadViaShareHeaders, _super);
    function CompleteFileUploadViaShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], CompleteFileUploadViaShareHeaders.prototype, "xSdsDateFormat", void 0);
    return CompleteFileUploadViaShareHeaders;
}(SpeakeasyBase));
export { CompleteFileUploadViaShareHeaders };
var CompleteFileUploadViaShareRequest = /** @class */ (function (_super) {
    __extends(CompleteFileUploadViaShareRequest, _super);
    function CompleteFileUploadViaShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompleteFileUploadViaSharePathParams)
    ], CompleteFileUploadViaShareRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompleteFileUploadViaShareHeaders)
    ], CompleteFileUploadViaShareRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UserFileKeyList)
    ], CompleteFileUploadViaShareRequest.prototype, "request", void 0);
    return CompleteFileUploadViaShareRequest;
}(SpeakeasyBase));
export { CompleteFileUploadViaShareRequest };
var CompleteFileUploadViaShareResponse = /** @class */ (function (_super) {
    __extends(CompleteFileUploadViaShareResponse, _super);
    function CompleteFileUploadViaShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompleteFileUploadViaShareResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CompleteFileUploadViaShareResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PublicUploadedFileData)
    ], CompleteFileUploadViaShareResponse.prototype, "publicUploadedFileData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompleteFileUploadViaShareResponse.prototype, "statusCode", void 0);
    return CompleteFileUploadViaShareResponse;
}(SpeakeasyBase));
export { CompleteFileUploadViaShareResponse };

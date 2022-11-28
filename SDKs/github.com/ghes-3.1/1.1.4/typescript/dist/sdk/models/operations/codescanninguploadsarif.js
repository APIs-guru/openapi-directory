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
var CodeScanningUploadSarifPathParams = /** @class */ (function (_super) {
    __extends(CodeScanningUploadSarifPathParams, _super);
    function CodeScanningUploadSarifPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], CodeScanningUploadSarifPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], CodeScanningUploadSarifPathParams.prototype, "repo", void 0);
    return CodeScanningUploadSarifPathParams;
}(SpeakeasyBase));
export { CodeScanningUploadSarifPathParams };
var CodeScanningUploadSarifRequestBody = /** @class */ (function (_super) {
    __extends(CodeScanningUploadSarifRequestBody, _super);
    function CodeScanningUploadSarifRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkout_uri" }),
        __metadata("design:type", String)
    ], CodeScanningUploadSarifRequestBody.prototype, "checkoutUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_sha" }),
        __metadata("design:type", String)
    ], CodeScanningUploadSarifRequestBody.prototype, "commitSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], CodeScanningUploadSarifRequestBody.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sarif" }),
        __metadata("design:type", String)
    ], CodeScanningUploadSarifRequestBody.prototype, "sarif", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started_at" }),
        __metadata("design:type", Date)
    ], CodeScanningUploadSarifRequestBody.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tool_name" }),
        __metadata("design:type", String)
    ], CodeScanningUploadSarifRequestBody.prototype, "toolName", void 0);
    return CodeScanningUploadSarifRequestBody;
}(SpeakeasyBase));
export { CodeScanningUploadSarifRequestBody };
var CodeScanningUploadSarif503ApplicationJson = /** @class */ (function (_super) {
    __extends(CodeScanningUploadSarif503ApplicationJson, _super);
    function CodeScanningUploadSarif503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CodeScanningUploadSarif503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], CodeScanningUploadSarif503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CodeScanningUploadSarif503ApplicationJson.prototype, "message", void 0);
    return CodeScanningUploadSarif503ApplicationJson;
}(SpeakeasyBase));
export { CodeScanningUploadSarif503ApplicationJson };
var CodeScanningUploadSarifRequest = /** @class */ (function (_super) {
    __extends(CodeScanningUploadSarifRequest, _super);
    function CodeScanningUploadSarifRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningUploadSarifPathParams)
    ], CodeScanningUploadSarifRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CodeScanningUploadSarifRequestBody)
    ], CodeScanningUploadSarifRequest.prototype, "request", void 0);
    return CodeScanningUploadSarifRequest;
}(SpeakeasyBase));
export { CodeScanningUploadSarifRequest };
var CodeScanningUploadSarifResponse = /** @class */ (function (_super) {
    __extends(CodeScanningUploadSarifResponse, _super);
    function CodeScanningUploadSarifResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CodeScanningUploadSarifResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CodeScanningUploadSarifResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], CodeScanningUploadSarifResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CodeScanningSarifsReceipt)
    ], CodeScanningUploadSarifResponse.prototype, "codeScanningSarifsReceipt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningUploadSarif503ApplicationJson)
    ], CodeScanningUploadSarifResponse.prototype, "codeScanningUploadSarif503ApplicationJsonObject", void 0);
    return CodeScanningUploadSarifResponse;
}(SpeakeasyBase));
export { CodeScanningUploadSarifResponse };

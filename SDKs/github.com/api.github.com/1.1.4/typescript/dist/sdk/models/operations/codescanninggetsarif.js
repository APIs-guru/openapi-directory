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
var CodeScanningGetSarifPathParams = /** @class */ (function (_super) {
    __extends(CodeScanningGetSarifPathParams, _super);
    function CodeScanningGetSarifPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], CodeScanningGetSarifPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], CodeScanningGetSarifPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sarif_id" }),
        __metadata("design:type", String)
    ], CodeScanningGetSarifPathParams.prototype, "sarifId", void 0);
    return CodeScanningGetSarifPathParams;
}(SpeakeasyBase));
export { CodeScanningGetSarifPathParams };
var CodeScanningGetSarif503ApplicationJson = /** @class */ (function (_super) {
    __extends(CodeScanningGetSarif503ApplicationJson, _super);
    function CodeScanningGetSarif503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CodeScanningGetSarif503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], CodeScanningGetSarif503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CodeScanningGetSarif503ApplicationJson.prototype, "message", void 0);
    return CodeScanningGetSarif503ApplicationJson;
}(SpeakeasyBase));
export { CodeScanningGetSarif503ApplicationJson };
var CodeScanningGetSarifRequest = /** @class */ (function (_super) {
    __extends(CodeScanningGetSarifRequest, _super);
    function CodeScanningGetSarifRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningGetSarifPathParams)
    ], CodeScanningGetSarifRequest.prototype, "pathParams", void 0);
    return CodeScanningGetSarifRequest;
}(SpeakeasyBase));
export { CodeScanningGetSarifRequest };
var CodeScanningGetSarifResponse = /** @class */ (function (_super) {
    __extends(CodeScanningGetSarifResponse, _super);
    function CodeScanningGetSarifResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CodeScanningGetSarifResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CodeScanningGetSarifResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], CodeScanningGetSarifResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CodeScanningSarifsStatus)
    ], CodeScanningGetSarifResponse.prototype, "codeScanningSarifsStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningGetSarif503ApplicationJson)
    ], CodeScanningGetSarifResponse.prototype, "codeScanningGetSarif503ApplicationJsonObject", void 0);
    return CodeScanningGetSarifResponse;
}(SpeakeasyBase));
export { CodeScanningGetSarifResponse };

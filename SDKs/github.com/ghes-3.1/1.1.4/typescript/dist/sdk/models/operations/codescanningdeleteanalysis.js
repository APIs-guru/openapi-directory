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
var CodeScanningDeleteAnalysisPathParams = /** @class */ (function (_super) {
    __extends(CodeScanningDeleteAnalysisPathParams, _super);
    function CodeScanningDeleteAnalysisPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_id" }),
        __metadata("design:type", Number)
    ], CodeScanningDeleteAnalysisPathParams.prototype, "analysisId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], CodeScanningDeleteAnalysisPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], CodeScanningDeleteAnalysisPathParams.prototype, "repo", void 0);
    return CodeScanningDeleteAnalysisPathParams;
}(SpeakeasyBase));
export { CodeScanningDeleteAnalysisPathParams };
var CodeScanningDeleteAnalysisQueryParams = /** @class */ (function (_super) {
    __extends(CodeScanningDeleteAnalysisQueryParams, _super);
    function CodeScanningDeleteAnalysisQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=confirm_delete" }),
        __metadata("design:type", String)
    ], CodeScanningDeleteAnalysisQueryParams.prototype, "confirmDelete", void 0);
    return CodeScanningDeleteAnalysisQueryParams;
}(SpeakeasyBase));
export { CodeScanningDeleteAnalysisQueryParams };
var CodeScanningDeleteAnalysis503ApplicationJson = /** @class */ (function (_super) {
    __extends(CodeScanningDeleteAnalysis503ApplicationJson, _super);
    function CodeScanningDeleteAnalysis503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CodeScanningDeleteAnalysis503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], CodeScanningDeleteAnalysis503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CodeScanningDeleteAnalysis503ApplicationJson.prototype, "message", void 0);
    return CodeScanningDeleteAnalysis503ApplicationJson;
}(SpeakeasyBase));
export { CodeScanningDeleteAnalysis503ApplicationJson };
var CodeScanningDeleteAnalysisRequest = /** @class */ (function (_super) {
    __extends(CodeScanningDeleteAnalysisRequest, _super);
    function CodeScanningDeleteAnalysisRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningDeleteAnalysisPathParams)
    ], CodeScanningDeleteAnalysisRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningDeleteAnalysisQueryParams)
    ], CodeScanningDeleteAnalysisRequest.prototype, "queryParams", void 0);
    return CodeScanningDeleteAnalysisRequest;
}(SpeakeasyBase));
export { CodeScanningDeleteAnalysisRequest };
var CodeScanningDeleteAnalysisResponse = /** @class */ (function (_super) {
    __extends(CodeScanningDeleteAnalysisResponse, _super);
    function CodeScanningDeleteAnalysisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CodeScanningDeleteAnalysisResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CodeScanningDeleteAnalysisResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], CodeScanningDeleteAnalysisResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CodeScanningAnalysisDeletion)
    ], CodeScanningDeleteAnalysisResponse.prototype, "codeScanningAnalysisDeletion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningDeleteAnalysis503ApplicationJson)
    ], CodeScanningDeleteAnalysisResponse.prototype, "codeScanningDeleteAnalysis503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimError)
    ], CodeScanningDeleteAnalysisResponse.prototype, "scimError", void 0);
    return CodeScanningDeleteAnalysisResponse;
}(SpeakeasyBase));
export { CodeScanningDeleteAnalysisResponse };

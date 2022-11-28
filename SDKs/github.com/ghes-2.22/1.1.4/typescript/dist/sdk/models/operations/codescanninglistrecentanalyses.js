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
var CodeScanningListRecentAnalysesPathParams = /** @class */ (function (_super) {
    __extends(CodeScanningListRecentAnalysesPathParams, _super);
    function CodeScanningListRecentAnalysesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], CodeScanningListRecentAnalysesPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], CodeScanningListRecentAnalysesPathParams.prototype, "repo", void 0);
    return CodeScanningListRecentAnalysesPathParams;
}(SpeakeasyBase));
export { CodeScanningListRecentAnalysesPathParams };
var CodeScanningListRecentAnalysesQueryParams = /** @class */ (function (_super) {
    __extends(CodeScanningListRecentAnalysesQueryParams, _super);
    function CodeScanningListRecentAnalysesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CodeScanningListRecentAnalysesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], CodeScanningListRecentAnalysesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" }),
        __metadata("design:type", String)
    ], CodeScanningListRecentAnalysesQueryParams.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sarif_id" }),
        __metadata("design:type", String)
    ], CodeScanningListRecentAnalysesQueryParams.prototype, "sarifId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tool_guid" }),
        __metadata("design:type", String)
    ], CodeScanningListRecentAnalysesQueryParams.prototype, "toolGuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tool_name" }),
        __metadata("design:type", String)
    ], CodeScanningListRecentAnalysesQueryParams.prototype, "toolName", void 0);
    return CodeScanningListRecentAnalysesQueryParams;
}(SpeakeasyBase));
export { CodeScanningListRecentAnalysesQueryParams };
var CodeScanningListRecentAnalyses503ApplicationJson = /** @class */ (function (_super) {
    __extends(CodeScanningListRecentAnalyses503ApplicationJson, _super);
    function CodeScanningListRecentAnalyses503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CodeScanningListRecentAnalyses503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], CodeScanningListRecentAnalyses503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CodeScanningListRecentAnalyses503ApplicationJson.prototype, "message", void 0);
    return CodeScanningListRecentAnalyses503ApplicationJson;
}(SpeakeasyBase));
export { CodeScanningListRecentAnalyses503ApplicationJson };
var CodeScanningListRecentAnalysesRequest = /** @class */ (function (_super) {
    __extends(CodeScanningListRecentAnalysesRequest, _super);
    function CodeScanningListRecentAnalysesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningListRecentAnalysesPathParams)
    ], CodeScanningListRecentAnalysesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningListRecentAnalysesQueryParams)
    ], CodeScanningListRecentAnalysesRequest.prototype, "queryParams", void 0);
    return CodeScanningListRecentAnalysesRequest;
}(SpeakeasyBase));
export { CodeScanningListRecentAnalysesRequest };
var CodeScanningListRecentAnalysesResponse = /** @class */ (function (_super) {
    __extends(CodeScanningListRecentAnalysesResponse, _super);
    function CodeScanningListRecentAnalysesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CodeScanningListRecentAnalysesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CodeScanningListRecentAnalysesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], CodeScanningListRecentAnalysesResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CodeScanningAnalysis }),
        __metadata("design:type", Array)
    ], CodeScanningListRecentAnalysesResponse.prototype, "codeScanningAnalyses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningListRecentAnalyses503ApplicationJson)
    ], CodeScanningListRecentAnalysesResponse.prototype, "codeScanningListRecentAnalyses503ApplicationJsonObject", void 0);
    return CodeScanningListRecentAnalysesResponse;
}(SpeakeasyBase));
export { CodeScanningListRecentAnalysesResponse };

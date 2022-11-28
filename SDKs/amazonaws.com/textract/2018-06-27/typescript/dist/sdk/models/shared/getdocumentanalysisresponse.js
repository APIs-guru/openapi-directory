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
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";
import { JobStatusEnum } from "./jobstatusenum";
import { Warning } from "./warning";
var GetDocumentAnalysisResponse = /** @class */ (function (_super) {
    __extends(GetDocumentAnalysisResponse, _super);
    function GetDocumentAnalysisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnalyzeDocumentModelVersion" }),
        __metadata("design:type", String)
    ], GetDocumentAnalysisResponse.prototype, "analyzeDocumentModelVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Blocks", elemType: Block }),
        __metadata("design:type", Array)
    ], GetDocumentAnalysisResponse.prototype, "blocks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentMetadata" }),
        __metadata("design:type", DocumentMetadata)
    ], GetDocumentAnalysisResponse.prototype, "documentMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobStatus" }),
        __metadata("design:type", String)
    ], GetDocumentAnalysisResponse.prototype, "jobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetDocumentAnalysisResponse.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], GetDocumentAnalysisResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Warnings", elemType: Warning }),
        __metadata("design:type", Array)
    ], GetDocumentAnalysisResponse.prototype, "warnings", void 0);
    return GetDocumentAnalysisResponse;
}(SpeakeasyBase));
export { GetDocumentAnalysisResponse };

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
var ListMedicalVocabulariesQueryParams = /** @class */ (function (_super) {
    __extends(ListMedicalVocabulariesQueryParams, _super);
    function ListMedicalVocabulariesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesQueryParams.prototype, "nextToken", void 0);
    return ListMedicalVocabulariesQueryParams;
}(SpeakeasyBase));
export { ListMedicalVocabulariesQueryParams };
export var ListMedicalVocabulariesXAmzTargetEnum;
(function (ListMedicalVocabulariesXAmzTargetEnum) {
    ListMedicalVocabulariesXAmzTargetEnum["TranscribeListMedicalVocabularies"] = "Transcribe.ListMedicalVocabularies";
})(ListMedicalVocabulariesXAmzTargetEnum || (ListMedicalVocabulariesXAmzTargetEnum = {}));
var ListMedicalVocabulariesHeaders = /** @class */ (function (_super) {
    __extends(ListMedicalVocabulariesHeaders, _super);
    function ListMedicalVocabulariesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesHeaders.prototype, "xAmzTarget", void 0);
    return ListMedicalVocabulariesHeaders;
}(SpeakeasyBase));
export { ListMedicalVocabulariesHeaders };
var ListMedicalVocabulariesRequest = /** @class */ (function (_super) {
    __extends(ListMedicalVocabulariesRequest, _super);
    function ListMedicalVocabulariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMedicalVocabulariesQueryParams)
    ], ListMedicalVocabulariesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMedicalVocabulariesHeaders)
    ], ListMedicalVocabulariesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListMedicalVocabulariesRequest)
    ], ListMedicalVocabulariesRequest.prototype, "request", void 0);
    return ListMedicalVocabulariesRequest;
}(SpeakeasyBase));
export { ListMedicalVocabulariesRequest };
var ListMedicalVocabulariesResponse = /** @class */ (function (_super) {
    __extends(ListMedicalVocabulariesResponse, _super);
    function ListMedicalVocabulariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMedicalVocabulariesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMedicalVocabulariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMedicalVocabulariesResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMedicalVocabulariesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMedicalVocabulariesResponse)
    ], ListMedicalVocabulariesResponse.prototype, "listMedicalVocabulariesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMedicalVocabulariesResponse.prototype, "statusCode", void 0);
    return ListMedicalVocabulariesResponse;
}(SpeakeasyBase));
export { ListMedicalVocabulariesResponse };

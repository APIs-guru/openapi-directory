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
var BatchUpdateFindingsHeaders = /** @class */ (function (_super) {
    __extends(BatchUpdateFindingsHeaders, _super);
    function BatchUpdateFindingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchUpdateFindingsHeaders;
}(SpeakeasyBase));
export { BatchUpdateFindingsHeaders };
// BatchUpdateFindingsRequestBodyNote
/**
 * The updated note.
**/
var BatchUpdateFindingsRequestBodyNote = /** @class */ (function (_super) {
    __extends(BatchUpdateFindingsRequestBodyNote, _super);
    function BatchUpdateFindingsRequestBodyNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Text" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsRequestBodyNote.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedBy" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsRequestBodyNote.prototype, "updatedBy", void 0);
    return BatchUpdateFindingsRequestBodyNote;
}(SpeakeasyBase));
export { BatchUpdateFindingsRequestBodyNote };
// BatchUpdateFindingsRequestBodySeverity
/**
 * Updates to the severity information for a finding.
**/
var BatchUpdateFindingsRequestBodySeverity = /** @class */ (function (_super) {
    __extends(BatchUpdateFindingsRequestBodySeverity, _super);
    function BatchUpdateFindingsRequestBodySeverity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Label" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsRequestBodySeverity.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Normalized" }),
        __metadata("design:type", Number)
    ], BatchUpdateFindingsRequestBodySeverity.prototype, "normalized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Product" }),
        __metadata("design:type", Number)
    ], BatchUpdateFindingsRequestBodySeverity.prototype, "product", void 0);
    return BatchUpdateFindingsRequestBodySeverity;
}(SpeakeasyBase));
export { BatchUpdateFindingsRequestBodySeverity };
export var BatchUpdateFindingsRequestBodyVerificationStateEnum;
(function (BatchUpdateFindingsRequestBodyVerificationStateEnum) {
    BatchUpdateFindingsRequestBodyVerificationStateEnum["Unknown"] = "UNKNOWN";
    BatchUpdateFindingsRequestBodyVerificationStateEnum["TruePositive"] = "TRUE_POSITIVE";
    BatchUpdateFindingsRequestBodyVerificationStateEnum["FalsePositive"] = "FALSE_POSITIVE";
    BatchUpdateFindingsRequestBodyVerificationStateEnum["BenignPositive"] = "BENIGN_POSITIVE";
})(BatchUpdateFindingsRequestBodyVerificationStateEnum || (BatchUpdateFindingsRequestBodyVerificationStateEnum = {}));
// BatchUpdateFindingsRequestBodyWorkflow
/**
 * Used to update information about the investigation into the finding.
**/
var BatchUpdateFindingsRequestBodyWorkflow = /** @class */ (function (_super) {
    __extends(BatchUpdateFindingsRequestBodyWorkflow, _super);
    function BatchUpdateFindingsRequestBodyWorkflow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsRequestBodyWorkflow.prototype, "status", void 0);
    return BatchUpdateFindingsRequestBodyWorkflow;
}(SpeakeasyBase));
export { BatchUpdateFindingsRequestBodyWorkflow };
var BatchUpdateFindingsRequestBody = /** @class */ (function (_super) {
    __extends(BatchUpdateFindingsRequestBody, _super);
    function BatchUpdateFindingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Confidence" }),
        __metadata("design:type", Number)
    ], BatchUpdateFindingsRequestBody.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Criticality" }),
        __metadata("design:type", Number)
    ], BatchUpdateFindingsRequestBody.prototype, "criticality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingIdentifiers", elemType: shared.AwsSecurityFindingIdentifier }),
        __metadata("design:type", Array)
    ], BatchUpdateFindingsRequestBody.prototype, "findingIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Note" }),
        __metadata("design:type", BatchUpdateFindingsRequestBodyNote)
    ], BatchUpdateFindingsRequestBody.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedFindings", elemType: shared.RelatedFinding }),
        __metadata("design:type", Array)
    ], BatchUpdateFindingsRequestBody.prototype, "relatedFindings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Severity" }),
        __metadata("design:type", BatchUpdateFindingsRequestBodySeverity)
    ], BatchUpdateFindingsRequestBody.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Types" }),
        __metadata("design:type", Array)
    ], BatchUpdateFindingsRequestBody.prototype, "types", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserDefinedFields" }),
        __metadata("design:type", Map)
    ], BatchUpdateFindingsRequestBody.prototype, "userDefinedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerificationState" }),
        __metadata("design:type", String)
    ], BatchUpdateFindingsRequestBody.prototype, "verificationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Workflow" }),
        __metadata("design:type", BatchUpdateFindingsRequestBodyWorkflow)
    ], BatchUpdateFindingsRequestBody.prototype, "workflow", void 0);
    return BatchUpdateFindingsRequestBody;
}(SpeakeasyBase));
export { BatchUpdateFindingsRequestBody };
var BatchUpdateFindingsRequest = /** @class */ (function (_super) {
    __extends(BatchUpdateFindingsRequest, _super);
    function BatchUpdateFindingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchUpdateFindingsHeaders)
    ], BatchUpdateFindingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchUpdateFindingsRequestBody)
    ], BatchUpdateFindingsRequest.prototype, "request", void 0);
    return BatchUpdateFindingsRequest;
}(SpeakeasyBase));
export { BatchUpdateFindingsRequest };
var BatchUpdateFindingsResponse = /** @class */ (function (_super) {
    __extends(BatchUpdateFindingsResponse, _super);
    function BatchUpdateFindingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchUpdateFindingsResponse)
    ], BatchUpdateFindingsResponse.prototype, "batchUpdateFindingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchUpdateFindingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchUpdateFindingsResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchUpdateFindingsResponse.prototype, "invalidAccessException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchUpdateFindingsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchUpdateFindingsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchUpdateFindingsResponse.prototype, "statusCode", void 0);
    return BatchUpdateFindingsResponse;
}(SpeakeasyBase));
export { BatchUpdateFindingsResponse };

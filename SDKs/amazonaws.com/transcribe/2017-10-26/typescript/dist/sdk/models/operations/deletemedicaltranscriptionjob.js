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
export var DeleteMedicalTranscriptionJobXAmzTargetEnum;
(function (DeleteMedicalTranscriptionJobXAmzTargetEnum) {
    DeleteMedicalTranscriptionJobXAmzTargetEnum["TranscribeDeleteMedicalTranscriptionJob"] = "Transcribe.DeleteMedicalTranscriptionJob";
})(DeleteMedicalTranscriptionJobXAmzTargetEnum || (DeleteMedicalTranscriptionJobXAmzTargetEnum = {}));
var DeleteMedicalTranscriptionJobHeaders = /** @class */ (function (_super) {
    __extends(DeleteMedicalTranscriptionJobHeaders, _super);
    function DeleteMedicalTranscriptionJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteMedicalTranscriptionJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteMedicalTranscriptionJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteMedicalTranscriptionJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteMedicalTranscriptionJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteMedicalTranscriptionJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteMedicalTranscriptionJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteMedicalTranscriptionJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteMedicalTranscriptionJobHeaders.prototype, "xAmzTarget", void 0);
    return DeleteMedicalTranscriptionJobHeaders;
}(SpeakeasyBase));
export { DeleteMedicalTranscriptionJobHeaders };
var DeleteMedicalTranscriptionJobRequest = /** @class */ (function (_super) {
    __extends(DeleteMedicalTranscriptionJobRequest, _super);
    function DeleteMedicalTranscriptionJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMedicalTranscriptionJobHeaders)
    ], DeleteMedicalTranscriptionJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteMedicalTranscriptionJobRequest)
    ], DeleteMedicalTranscriptionJobRequest.prototype, "request", void 0);
    return DeleteMedicalTranscriptionJobRequest;
}(SpeakeasyBase));
export { DeleteMedicalTranscriptionJobRequest };
var DeleteMedicalTranscriptionJobResponse = /** @class */ (function (_super) {
    __extends(DeleteMedicalTranscriptionJobResponse, _super);
    function DeleteMedicalTranscriptionJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteMedicalTranscriptionJobResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteMedicalTranscriptionJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteMedicalTranscriptionJobResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteMedicalTranscriptionJobResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteMedicalTranscriptionJobResponse.prototype, "statusCode", void 0);
    return DeleteMedicalTranscriptionJobResponse;
}(SpeakeasyBase));
export { DeleteMedicalTranscriptionJobResponse };

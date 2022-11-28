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
export var StartMedicalTranscriptionJobXAmzTargetEnum;
(function (StartMedicalTranscriptionJobXAmzTargetEnum) {
    StartMedicalTranscriptionJobXAmzTargetEnum["TranscribeStartMedicalTranscriptionJob"] = "Transcribe.StartMedicalTranscriptionJob";
})(StartMedicalTranscriptionJobXAmzTargetEnum || (StartMedicalTranscriptionJobXAmzTargetEnum = {}));
var StartMedicalTranscriptionJobHeaders = /** @class */ (function (_super) {
    __extends(StartMedicalTranscriptionJobHeaders, _super);
    function StartMedicalTranscriptionJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartMedicalTranscriptionJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartMedicalTranscriptionJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartMedicalTranscriptionJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartMedicalTranscriptionJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartMedicalTranscriptionJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartMedicalTranscriptionJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartMedicalTranscriptionJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StartMedicalTranscriptionJobHeaders.prototype, "xAmzTarget", void 0);
    return StartMedicalTranscriptionJobHeaders;
}(SpeakeasyBase));
export { StartMedicalTranscriptionJobHeaders };
var StartMedicalTranscriptionJobRequest = /** @class */ (function (_super) {
    __extends(StartMedicalTranscriptionJobRequest, _super);
    function StartMedicalTranscriptionJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartMedicalTranscriptionJobHeaders)
    ], StartMedicalTranscriptionJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartMedicalTranscriptionJobRequest)
    ], StartMedicalTranscriptionJobRequest.prototype, "request", void 0);
    return StartMedicalTranscriptionJobRequest;
}(SpeakeasyBase));
export { StartMedicalTranscriptionJobRequest };
var StartMedicalTranscriptionJobResponse = /** @class */ (function (_super) {
    __extends(StartMedicalTranscriptionJobResponse, _super);
    function StartMedicalTranscriptionJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartMedicalTranscriptionJobResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartMedicalTranscriptionJobResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartMedicalTranscriptionJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartMedicalTranscriptionJobResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartMedicalTranscriptionJobResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartMedicalTranscriptionJobResponse)
    ], StartMedicalTranscriptionJobResponse.prototype, "startMedicalTranscriptionJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartMedicalTranscriptionJobResponse.prototype, "statusCode", void 0);
    return StartMedicalTranscriptionJobResponse;
}(SpeakeasyBase));
export { StartMedicalTranscriptionJobResponse };

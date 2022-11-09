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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var StartDataIngestionJobXAmzTargetEnum;
(function (StartDataIngestionJobXAmzTargetEnum) {
    StartDataIngestionJobXAmzTargetEnum["AwsLookoutEquipmentFrontendServiceStartDataIngestionJob"] = "AWSLookoutEquipmentFrontendService.StartDataIngestionJob";
})(StartDataIngestionJobXAmzTargetEnum || (StartDataIngestionJobXAmzTargetEnum = {}));
var StartDataIngestionJobHeaders = /** @class */ (function (_super) {
    __extends(StartDataIngestionJobHeaders, _super);
    function StartDataIngestionJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartDataIngestionJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartDataIngestionJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartDataIngestionJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartDataIngestionJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartDataIngestionJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartDataIngestionJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartDataIngestionJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StartDataIngestionJobHeaders.prototype, "xAmzTarget", void 0);
    return StartDataIngestionJobHeaders;
}(SpeakeasyBase));
export { StartDataIngestionJobHeaders };
var StartDataIngestionJobRequest = /** @class */ (function (_super) {
    __extends(StartDataIngestionJobRequest, _super);
    function StartDataIngestionJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartDataIngestionJobHeaders)
    ], StartDataIngestionJobRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartDataIngestionJobRequest)
    ], StartDataIngestionJobRequest.prototype, "request", void 0);
    return StartDataIngestionJobRequest;
}(SpeakeasyBase));
export { StartDataIngestionJobRequest };
var StartDataIngestionJobResponse = /** @class */ (function (_super) {
    __extends(StartDataIngestionJobResponse, _super);
    function StartDataIngestionJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDataIngestionJobResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDataIngestionJobResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartDataIngestionJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDataIngestionJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDataIngestionJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDataIngestionJobResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StartDataIngestionJobResponse)
    ], StartDataIngestionJobResponse.prototype, "startDataIngestionJobResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartDataIngestionJobResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDataIngestionJobResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDataIngestionJobResponse.prototype, "validationException", void 0);
    return StartDataIngestionJobResponse;
}(SpeakeasyBase));
export { StartDataIngestionJobResponse };

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
export var CreateInferenceSchedulerXAmzTargetEnum;
(function (CreateInferenceSchedulerXAmzTargetEnum) {
    CreateInferenceSchedulerXAmzTargetEnum["AwsLookoutEquipmentFrontendServiceCreateInferenceScheduler"] = "AWSLookoutEquipmentFrontendService.CreateInferenceScheduler";
})(CreateInferenceSchedulerXAmzTargetEnum || (CreateInferenceSchedulerXAmzTargetEnum = {}));
var CreateInferenceSchedulerHeaders = /** @class */ (function (_super) {
    __extends(CreateInferenceSchedulerHeaders, _super);
    function CreateInferenceSchedulerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateInferenceSchedulerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateInferenceSchedulerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateInferenceSchedulerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateInferenceSchedulerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateInferenceSchedulerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateInferenceSchedulerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateInferenceSchedulerHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateInferenceSchedulerHeaders.prototype, "xAmzTarget", void 0);
    return CreateInferenceSchedulerHeaders;
}(SpeakeasyBase));
export { CreateInferenceSchedulerHeaders };
var CreateInferenceSchedulerRequest = /** @class */ (function (_super) {
    __extends(CreateInferenceSchedulerRequest, _super);
    function CreateInferenceSchedulerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateInferenceSchedulerHeaders)
    ], CreateInferenceSchedulerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateInferenceSchedulerRequest)
    ], CreateInferenceSchedulerRequest.prototype, "request", void 0);
    return CreateInferenceSchedulerRequest;
}(SpeakeasyBase));
export { CreateInferenceSchedulerRequest };
var CreateInferenceSchedulerResponse = /** @class */ (function (_super) {
    __extends(CreateInferenceSchedulerResponse, _super);
    function CreateInferenceSchedulerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateInferenceSchedulerResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateInferenceSchedulerResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateInferenceSchedulerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateInferenceSchedulerResponse)
    ], CreateInferenceSchedulerResponse.prototype, "createInferenceSchedulerResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateInferenceSchedulerResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateInferenceSchedulerResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateInferenceSchedulerResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateInferenceSchedulerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateInferenceSchedulerResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateInferenceSchedulerResponse.prototype, "validationException", void 0);
    return CreateInferenceSchedulerResponse;
}(SpeakeasyBase));
export { CreateInferenceSchedulerResponse };

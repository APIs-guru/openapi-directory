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
export var CreateBatchInferenceJobXAmzTargetEnum;
(function (CreateBatchInferenceJobXAmzTargetEnum) {
    CreateBatchInferenceJobXAmzTargetEnum["AmazonPersonalizeCreateBatchInferenceJob"] = "AmazonPersonalize.CreateBatchInferenceJob";
})(CreateBatchInferenceJobXAmzTargetEnum || (CreateBatchInferenceJobXAmzTargetEnum = {}));
var CreateBatchInferenceJobHeaders = /** @class */ (function (_super) {
    __extends(CreateBatchInferenceJobHeaders, _super);
    function CreateBatchInferenceJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobHeaders.prototype, "xAmzTarget", void 0);
    return CreateBatchInferenceJobHeaders;
}(SpeakeasyBase));
export { CreateBatchInferenceJobHeaders };
var CreateBatchInferenceJobRequest = /** @class */ (function (_super) {
    __extends(CreateBatchInferenceJobRequest, _super);
    function CreateBatchInferenceJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBatchInferenceJobHeaders)
    ], CreateBatchInferenceJobRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateBatchInferenceJobRequest)
    ], CreateBatchInferenceJobRequest.prototype, "request", void 0);
    return CreateBatchInferenceJobRequest;
}(SpeakeasyBase));
export { CreateBatchInferenceJobRequest };
var CreateBatchInferenceJobResponse = /** @class */ (function (_super) {
    __extends(CreateBatchInferenceJobResponse, _super);
    function CreateBatchInferenceJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateBatchInferenceJobResponse)
    ], CreateBatchInferenceJobResponse.prototype, "createBatchInferenceJobResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBatchInferenceJobResponse.prototype, "invalidInputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBatchInferenceJobResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBatchInferenceJobResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBatchInferenceJobResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBatchInferenceJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateBatchInferenceJobResponse.prototype, "statusCode", void 0);
    return CreateBatchInferenceJobResponse;
}(SpeakeasyBase));
export { CreateBatchInferenceJobResponse };

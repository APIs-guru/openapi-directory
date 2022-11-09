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
var CreateWorkloadHeaders = /** @class */ (function (_super) {
    __extends(CreateWorkloadHeaders, _super);
    function CreateWorkloadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateWorkloadHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateWorkloadHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateWorkloadHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateWorkloadHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateWorkloadHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateWorkloadHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateWorkloadHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateWorkloadHeaders;
}(SpeakeasyBase));
export { CreateWorkloadHeaders };
export var CreateWorkloadRequestBodyEnvironmentEnum;
(function (CreateWorkloadRequestBodyEnvironmentEnum) {
    CreateWorkloadRequestBodyEnvironmentEnum["Production"] = "PRODUCTION";
    CreateWorkloadRequestBodyEnvironmentEnum["Preproduction"] = "PREPRODUCTION";
})(CreateWorkloadRequestBodyEnvironmentEnum || (CreateWorkloadRequestBodyEnvironmentEnum = {}));
var CreateWorkloadRequestBody = /** @class */ (function (_super) {
    __extends(CreateWorkloadRequestBody, _super);
    function CreateWorkloadRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AccountIds" }),
        __metadata("design:type", Array)
    ], CreateWorkloadRequestBody.prototype, "accountIds", void 0);
    __decorate([
        Metadata({ data: "json, name=ArchitecturalDesign" }),
        __metadata("design:type", String)
    ], CreateWorkloadRequestBody.prototype, "architecturalDesign", void 0);
    __decorate([
        Metadata({ data: "json, name=AwsRegions" }),
        __metadata("design:type", Array)
    ], CreateWorkloadRequestBody.prototype, "awsRegions", void 0);
    __decorate([
        Metadata({ data: "json, name=ClientRequestToken" }),
        __metadata("design:type", String)
    ], CreateWorkloadRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateWorkloadRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Environment" }),
        __metadata("design:type", String)
    ], CreateWorkloadRequestBody.prototype, "environment", void 0);
    __decorate([
        Metadata({ data: "json, name=Industry" }),
        __metadata("design:type", String)
    ], CreateWorkloadRequestBody.prototype, "industry", void 0);
    __decorate([
        Metadata({ data: "json, name=IndustryType" }),
        __metadata("design:type", String)
    ], CreateWorkloadRequestBody.prototype, "industryType", void 0);
    __decorate([
        Metadata({ data: "json, name=Lenses" }),
        __metadata("design:type", Array)
    ], CreateWorkloadRequestBody.prototype, "lenses", void 0);
    __decorate([
        Metadata({ data: "json, name=NonAwsRegions" }),
        __metadata("design:type", Array)
    ], CreateWorkloadRequestBody.prototype, "nonAwsRegions", void 0);
    __decorate([
        Metadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], CreateWorkloadRequestBody.prototype, "notes", void 0);
    __decorate([
        Metadata({ data: "json, name=PillarPriorities" }),
        __metadata("design:type", Array)
    ], CreateWorkloadRequestBody.prototype, "pillarPriorities", void 0);
    __decorate([
        Metadata({ data: "json, name=ReviewOwner" }),
        __metadata("design:type", String)
    ], CreateWorkloadRequestBody.prototype, "reviewOwner", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateWorkloadRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=WorkloadName" }),
        __metadata("design:type", String)
    ], CreateWorkloadRequestBody.prototype, "workloadName", void 0);
    return CreateWorkloadRequestBody;
}(SpeakeasyBase));
export { CreateWorkloadRequestBody };
var CreateWorkloadRequest = /** @class */ (function (_super) {
    __extends(CreateWorkloadRequest, _super);
    function CreateWorkloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateWorkloadHeaders)
    ], CreateWorkloadRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateWorkloadRequestBody)
    ], CreateWorkloadRequest.prototype, "request", void 0);
    return CreateWorkloadRequest;
}(SpeakeasyBase));
export { CreateWorkloadRequest };
var CreateWorkloadResponse = /** @class */ (function (_super) {
    __extends(CreateWorkloadResponse, _super);
    function CreateWorkloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWorkloadResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateWorkloadOutput)
    ], CreateWorkloadResponse.prototype, "createWorkloadOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateWorkloadResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadResponse.prototype, "validationException", void 0);
    return CreateWorkloadResponse;
}(SpeakeasyBase));
export { CreateWorkloadResponse };

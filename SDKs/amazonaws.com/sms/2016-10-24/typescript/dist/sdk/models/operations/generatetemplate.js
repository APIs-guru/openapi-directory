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
export var GenerateTemplateXAmzTargetEnum;
(function (GenerateTemplateXAmzTargetEnum) {
    GenerateTemplateXAmzTargetEnum["AwsServerMigrationServiceV20161024GenerateTemplate"] = "AWSServerMigrationService_V2016_10_24.GenerateTemplate";
})(GenerateTemplateXAmzTargetEnum || (GenerateTemplateXAmzTargetEnum = {}));
var GenerateTemplateHeaders = /** @class */ (function (_super) {
    __extends(GenerateTemplateHeaders, _super);
    function GenerateTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GenerateTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GenerateTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GenerateTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GenerateTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GenerateTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GenerateTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GenerateTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GenerateTemplateHeaders.prototype, "xAmzTarget", void 0);
    return GenerateTemplateHeaders;
}(SpeakeasyBase));
export { GenerateTemplateHeaders };
var GenerateTemplateRequest = /** @class */ (function (_super) {
    __extends(GenerateTemplateRequest, _super);
    function GenerateTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GenerateTemplateHeaders)
    ], GenerateTemplateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GenerateTemplateRequest)
    ], GenerateTemplateRequest.prototype, "request", void 0);
    return GenerateTemplateRequest;
}(SpeakeasyBase));
export { GenerateTemplateRequest };
var GenerateTemplateResponse = /** @class */ (function (_super) {
    __extends(GenerateTemplateResponse, _super);
    function GenerateTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GenerateTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GenerateTemplateResponse)
    ], GenerateTemplateResponse.prototype, "generateTemplateResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GenerateTemplateResponse.prototype, "internalError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GenerateTemplateResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GenerateTemplateResponse.prototype, "missingRequiredParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GenerateTemplateResponse.prototype, "operationNotPermittedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GenerateTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GenerateTemplateResponse.prototype, "unauthorizedOperationException", void 0);
    return GenerateTemplateResponse;
}(SpeakeasyBase));
export { GenerateTemplateResponse };

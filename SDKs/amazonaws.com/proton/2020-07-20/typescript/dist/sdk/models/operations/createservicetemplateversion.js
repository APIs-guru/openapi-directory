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
export var CreateServiceTemplateVersionXAmzTargetEnum;
(function (CreateServiceTemplateVersionXAmzTargetEnum) {
    CreateServiceTemplateVersionXAmzTargetEnum["AwsProton20200720CreateServiceTemplateVersion"] = "AwsProton20200720.CreateServiceTemplateVersion";
})(CreateServiceTemplateVersionXAmzTargetEnum || (CreateServiceTemplateVersionXAmzTargetEnum = {}));
var CreateServiceTemplateVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateServiceTemplateVersionHeaders, _super);
    function CreateServiceTemplateVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateServiceTemplateVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateServiceTemplateVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateServiceTemplateVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateServiceTemplateVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateServiceTemplateVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateServiceTemplateVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateServiceTemplateVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateServiceTemplateVersionHeaders.prototype, "xAmzTarget", void 0);
    return CreateServiceTemplateVersionHeaders;
}(SpeakeasyBase));
export { CreateServiceTemplateVersionHeaders };
var CreateServiceTemplateVersionRequest = /** @class */ (function (_super) {
    __extends(CreateServiceTemplateVersionRequest, _super);
    function CreateServiceTemplateVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateServiceTemplateVersionHeaders)
    ], CreateServiceTemplateVersionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateServiceTemplateVersionInput)
    ], CreateServiceTemplateVersionRequest.prototype, "request", void 0);
    return CreateServiceTemplateVersionRequest;
}(SpeakeasyBase));
export { CreateServiceTemplateVersionRequest };
var CreateServiceTemplateVersionResponse = /** @class */ (function (_super) {
    __extends(CreateServiceTemplateVersionResponse, _super);
    function CreateServiceTemplateVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateServiceTemplateVersionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateServiceTemplateVersionResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateServiceTemplateVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateServiceTemplateVersionOutput)
    ], CreateServiceTemplateVersionResponse.prototype, "createServiceTemplateVersionOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateServiceTemplateVersionResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateServiceTemplateVersionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateServiceTemplateVersionResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateServiceTemplateVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateServiceTemplateVersionResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateServiceTemplateVersionResponse.prototype, "validationException", void 0);
    return CreateServiceTemplateVersionResponse;
}(SpeakeasyBase));
export { CreateServiceTemplateVersionResponse };

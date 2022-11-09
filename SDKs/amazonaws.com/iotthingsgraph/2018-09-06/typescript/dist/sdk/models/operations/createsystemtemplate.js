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
export var CreateSystemTemplateXAmzTargetEnum;
(function (CreateSystemTemplateXAmzTargetEnum) {
    CreateSystemTemplateXAmzTargetEnum["IotThingsGraphFrontEndServiceCreateSystemTemplate"] = "IotThingsGraphFrontEndService.CreateSystemTemplate";
})(CreateSystemTemplateXAmzTargetEnum || (CreateSystemTemplateXAmzTargetEnum = {}));
var CreateSystemTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateSystemTemplateHeaders, _super);
    function CreateSystemTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSystemTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSystemTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSystemTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSystemTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSystemTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSystemTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSystemTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateSystemTemplateHeaders.prototype, "xAmzTarget", void 0);
    return CreateSystemTemplateHeaders;
}(SpeakeasyBase));
export { CreateSystemTemplateHeaders };
var CreateSystemTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateSystemTemplateRequest, _super);
    function CreateSystemTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSystemTemplateHeaders)
    ], CreateSystemTemplateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateSystemTemplateRequest)
    ], CreateSystemTemplateRequest.prototype, "request", void 0);
    return CreateSystemTemplateRequest;
}(SpeakeasyBase));
export { CreateSystemTemplateRequest };
var CreateSystemTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateSystemTemplateResponse, _super);
    function CreateSystemTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSystemTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateSystemTemplateResponse)
    ], CreateSystemTemplateResponse.prototype, "createSystemTemplateResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSystemTemplateResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSystemTemplateResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSystemTemplateResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSystemTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSystemTemplateResponse.prototype, "throttlingException", void 0);
    return CreateSystemTemplateResponse;
}(SpeakeasyBase));
export { CreateSystemTemplateResponse };

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
var CreateCustomDataIdentifierHeaders = /** @class */ (function (_super) {
    __extends(CreateCustomDataIdentifierHeaders, _super);
    function CreateCustomDataIdentifierHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateCustomDataIdentifierHeaders;
}(SpeakeasyBase));
export { CreateCustomDataIdentifierHeaders };
var CreateCustomDataIdentifierRequestBody = /** @class */ (function (_super) {
    __extends(CreateCustomDataIdentifierRequestBody, _super);
    function CreateCustomDataIdentifierRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreWords" }),
        __metadata("design:type", Array)
    ], CreateCustomDataIdentifierRequestBody.prototype, "ignoreWords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], CreateCustomDataIdentifierRequestBody.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumMatchDistance" }),
        __metadata("design:type", Number)
    ], CreateCustomDataIdentifierRequestBody.prototype, "maximumMatchDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regex" }),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierRequestBody.prototype, "regex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateCustomDataIdentifierRequestBody.prototype, "tags", void 0);
    return CreateCustomDataIdentifierRequestBody;
}(SpeakeasyBase));
export { CreateCustomDataIdentifierRequestBody };
var CreateCustomDataIdentifierRequest = /** @class */ (function (_super) {
    __extends(CreateCustomDataIdentifierRequest, _super);
    function CreateCustomDataIdentifierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomDataIdentifierHeaders)
    ], CreateCustomDataIdentifierRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCustomDataIdentifierRequestBody)
    ], CreateCustomDataIdentifierRequest.prototype, "request", void 0);
    return CreateCustomDataIdentifierRequest;
}(SpeakeasyBase));
export { CreateCustomDataIdentifierRequest };
var CreateCustomDataIdentifierResponse = /** @class */ (function (_super) {
    __extends(CreateCustomDataIdentifierResponse, _super);
    function CreateCustomDataIdentifierResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomDataIdentifierResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomDataIdentifierResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCustomDataIdentifierResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateCustomDataIdentifierResponse)
    ], CreateCustomDataIdentifierResponse.prototype, "createCustomDataIdentifierResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomDataIdentifierResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomDataIdentifierResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomDataIdentifierResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCustomDataIdentifierResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomDataIdentifierResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomDataIdentifierResponse.prototype, "validationException", void 0);
    return CreateCustomDataIdentifierResponse;
}(SpeakeasyBase));
export { CreateCustomDataIdentifierResponse };

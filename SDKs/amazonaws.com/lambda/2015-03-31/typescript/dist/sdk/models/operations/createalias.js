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
var CreateAliasPathParams = /** @class */ (function (_super) {
    __extends(CreateAliasPathParams, _super);
    function CreateAliasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], CreateAliasPathParams.prototype, "functionName", void 0);
    return CreateAliasPathParams;
}(SpeakeasyBase));
export { CreateAliasPathParams };
var CreateAliasHeaders = /** @class */ (function (_super) {
    __extends(CreateAliasHeaders, _super);
    function CreateAliasHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAliasHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAliasHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAliasHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAliasHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAliasHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAliasHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAliasHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAliasHeaders;
}(SpeakeasyBase));
export { CreateAliasHeaders };
// CreateAliasRequestBodyRoutingConfig
/**
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
**/
var CreateAliasRequestBodyRoutingConfig = /** @class */ (function (_super) {
    __extends(CreateAliasRequestBodyRoutingConfig, _super);
    function CreateAliasRequestBodyRoutingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AdditionalVersionWeights" }),
        __metadata("design:type", Map)
    ], CreateAliasRequestBodyRoutingConfig.prototype, "additionalVersionWeights", void 0);
    return CreateAliasRequestBodyRoutingConfig;
}(SpeakeasyBase));
export { CreateAliasRequestBodyRoutingConfig };
var CreateAliasRequestBody = /** @class */ (function (_super) {
    __extends(CreateAliasRequestBody, _super);
    function CreateAliasRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateAliasRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=FunctionVersion" }),
        __metadata("design:type", String)
    ], CreateAliasRequestBody.prototype, "functionVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateAliasRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=RoutingConfig" }),
        __metadata("design:type", CreateAliasRequestBodyRoutingConfig)
    ], CreateAliasRequestBody.prototype, "routingConfig", void 0);
    return CreateAliasRequestBody;
}(SpeakeasyBase));
export { CreateAliasRequestBody };
var CreateAliasRequest = /** @class */ (function (_super) {
    __extends(CreateAliasRequest, _super);
    function CreateAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateAliasPathParams)
    ], CreateAliasRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateAliasHeaders)
    ], CreateAliasRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAliasRequestBody)
    ], CreateAliasRequest.prototype, "request", void 0);
    return CreateAliasRequest;
}(SpeakeasyBase));
export { CreateAliasRequest };
var CreateAliasResponse = /** @class */ (function (_super) {
    __extends(CreateAliasResponse, _super);
    function CreateAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AliasConfiguration)
    ], CreateAliasResponse.prototype, "aliasConfiguration", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateAliasResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAliasResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAliasResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAliasResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAliasResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateAliasResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAliasResponse.prototype, "tooManyRequestsException", void 0);
    return CreateAliasResponse;
}(SpeakeasyBase));
export { CreateAliasResponse };

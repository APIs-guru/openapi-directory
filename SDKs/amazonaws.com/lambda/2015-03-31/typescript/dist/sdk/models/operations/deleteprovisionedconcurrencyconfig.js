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
var DeleteProvisionedConcurrencyConfigPathParams = /** @class */ (function (_super) {
    __extends(DeleteProvisionedConcurrencyConfigPathParams, _super);
    function DeleteProvisionedConcurrencyConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], DeleteProvisionedConcurrencyConfigPathParams.prototype, "functionName", void 0);
    return DeleteProvisionedConcurrencyConfigPathParams;
}(SpeakeasyBase));
export { DeleteProvisionedConcurrencyConfigPathParams };
var DeleteProvisionedConcurrencyConfigQueryParams = /** @class */ (function (_super) {
    __extends(DeleteProvisionedConcurrencyConfigQueryParams, _super);
    function DeleteProvisionedConcurrencyConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Qualifier" }),
        __metadata("design:type", String)
    ], DeleteProvisionedConcurrencyConfigQueryParams.prototype, "qualifier", void 0);
    return DeleteProvisionedConcurrencyConfigQueryParams;
}(SpeakeasyBase));
export { DeleteProvisionedConcurrencyConfigQueryParams };
var DeleteProvisionedConcurrencyConfigHeaders = /** @class */ (function (_super) {
    __extends(DeleteProvisionedConcurrencyConfigHeaders, _super);
    function DeleteProvisionedConcurrencyConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteProvisionedConcurrencyConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteProvisionedConcurrencyConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteProvisionedConcurrencyConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteProvisionedConcurrencyConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteProvisionedConcurrencyConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteProvisionedConcurrencyConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteProvisionedConcurrencyConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteProvisionedConcurrencyConfigHeaders;
}(SpeakeasyBase));
export { DeleteProvisionedConcurrencyConfigHeaders };
var DeleteProvisionedConcurrencyConfigRequest = /** @class */ (function (_super) {
    __extends(DeleteProvisionedConcurrencyConfigRequest, _super);
    function DeleteProvisionedConcurrencyConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteProvisionedConcurrencyConfigPathParams)
    ], DeleteProvisionedConcurrencyConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteProvisionedConcurrencyConfigQueryParams)
    ], DeleteProvisionedConcurrencyConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteProvisionedConcurrencyConfigHeaders)
    ], DeleteProvisionedConcurrencyConfigRequest.prototype, "headers", void 0);
    return DeleteProvisionedConcurrencyConfigRequest;
}(SpeakeasyBase));
export { DeleteProvisionedConcurrencyConfigRequest };
var DeleteProvisionedConcurrencyConfigResponse = /** @class */ (function (_super) {
    __extends(DeleteProvisionedConcurrencyConfigResponse, _super);
    function DeleteProvisionedConcurrencyConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteProvisionedConcurrencyConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteProvisionedConcurrencyConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteProvisionedConcurrencyConfigResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteProvisionedConcurrencyConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteProvisionedConcurrencyConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteProvisionedConcurrencyConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteProvisionedConcurrencyConfigResponse.prototype, "tooManyRequestsException", void 0);
    return DeleteProvisionedConcurrencyConfigResponse;
}(SpeakeasyBase));
export { DeleteProvisionedConcurrencyConfigResponse };

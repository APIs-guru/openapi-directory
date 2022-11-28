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
var PutProvisionedConcurrencyConfigPathParams = /** @class */ (function (_super) {
    __extends(PutProvisionedConcurrencyConfigPathParams, _super);
    function PutProvisionedConcurrencyConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], PutProvisionedConcurrencyConfigPathParams.prototype, "functionName", void 0);
    return PutProvisionedConcurrencyConfigPathParams;
}(SpeakeasyBase));
export { PutProvisionedConcurrencyConfigPathParams };
var PutProvisionedConcurrencyConfigQueryParams = /** @class */ (function (_super) {
    __extends(PutProvisionedConcurrencyConfigQueryParams, _super);
    function PutProvisionedConcurrencyConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Qualifier" }),
        __metadata("design:type", String)
    ], PutProvisionedConcurrencyConfigQueryParams.prototype, "qualifier", void 0);
    return PutProvisionedConcurrencyConfigQueryParams;
}(SpeakeasyBase));
export { PutProvisionedConcurrencyConfigQueryParams };
var PutProvisionedConcurrencyConfigHeaders = /** @class */ (function (_super) {
    __extends(PutProvisionedConcurrencyConfigHeaders, _super);
    function PutProvisionedConcurrencyConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutProvisionedConcurrencyConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutProvisionedConcurrencyConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutProvisionedConcurrencyConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutProvisionedConcurrencyConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutProvisionedConcurrencyConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutProvisionedConcurrencyConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutProvisionedConcurrencyConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutProvisionedConcurrencyConfigHeaders;
}(SpeakeasyBase));
export { PutProvisionedConcurrencyConfigHeaders };
var PutProvisionedConcurrencyConfigRequestBody = /** @class */ (function (_super) {
    __extends(PutProvisionedConcurrencyConfigRequestBody, _super);
    function PutProvisionedConcurrencyConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedConcurrentExecutions" }),
        __metadata("design:type", Number)
    ], PutProvisionedConcurrencyConfigRequestBody.prototype, "provisionedConcurrentExecutions", void 0);
    return PutProvisionedConcurrencyConfigRequestBody;
}(SpeakeasyBase));
export { PutProvisionedConcurrencyConfigRequestBody };
var PutProvisionedConcurrencyConfigRequest = /** @class */ (function (_super) {
    __extends(PutProvisionedConcurrencyConfigRequest, _super);
    function PutProvisionedConcurrencyConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutProvisionedConcurrencyConfigPathParams)
    ], PutProvisionedConcurrencyConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutProvisionedConcurrencyConfigQueryParams)
    ], PutProvisionedConcurrencyConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutProvisionedConcurrencyConfigHeaders)
    ], PutProvisionedConcurrencyConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutProvisionedConcurrencyConfigRequestBody)
    ], PutProvisionedConcurrencyConfigRequest.prototype, "request", void 0);
    return PutProvisionedConcurrencyConfigRequest;
}(SpeakeasyBase));
export { PutProvisionedConcurrencyConfigRequest };
var PutProvisionedConcurrencyConfigResponse = /** @class */ (function (_super) {
    __extends(PutProvisionedConcurrencyConfigResponse, _super);
    function PutProvisionedConcurrencyConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutProvisionedConcurrencyConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProvisionedConcurrencyConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutProvisionedConcurrencyConfigResponse)
    ], PutProvisionedConcurrencyConfigResponse.prototype, "putProvisionedConcurrencyConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProvisionedConcurrencyConfigResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProvisionedConcurrencyConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProvisionedConcurrencyConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutProvisionedConcurrencyConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProvisionedConcurrencyConfigResponse.prototype, "tooManyRequestsException", void 0);
    return PutProvisionedConcurrencyConfigResponse;
}(SpeakeasyBase));
export { PutProvisionedConcurrencyConfigResponse };

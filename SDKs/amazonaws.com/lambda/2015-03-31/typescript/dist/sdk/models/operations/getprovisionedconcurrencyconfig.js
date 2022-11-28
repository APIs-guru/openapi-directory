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
var GetProvisionedConcurrencyConfigPathParams = /** @class */ (function (_super) {
    __extends(GetProvisionedConcurrencyConfigPathParams, _super);
    function GetProvisionedConcurrencyConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], GetProvisionedConcurrencyConfigPathParams.prototype, "functionName", void 0);
    return GetProvisionedConcurrencyConfigPathParams;
}(SpeakeasyBase));
export { GetProvisionedConcurrencyConfigPathParams };
var GetProvisionedConcurrencyConfigQueryParams = /** @class */ (function (_super) {
    __extends(GetProvisionedConcurrencyConfigQueryParams, _super);
    function GetProvisionedConcurrencyConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Qualifier" }),
        __metadata("design:type", String)
    ], GetProvisionedConcurrencyConfigQueryParams.prototype, "qualifier", void 0);
    return GetProvisionedConcurrencyConfigQueryParams;
}(SpeakeasyBase));
export { GetProvisionedConcurrencyConfigQueryParams };
var GetProvisionedConcurrencyConfigHeaders = /** @class */ (function (_super) {
    __extends(GetProvisionedConcurrencyConfigHeaders, _super);
    function GetProvisionedConcurrencyConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetProvisionedConcurrencyConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetProvisionedConcurrencyConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetProvisionedConcurrencyConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetProvisionedConcurrencyConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetProvisionedConcurrencyConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetProvisionedConcurrencyConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetProvisionedConcurrencyConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetProvisionedConcurrencyConfigHeaders;
}(SpeakeasyBase));
export { GetProvisionedConcurrencyConfigHeaders };
var GetProvisionedConcurrencyConfigRequest = /** @class */ (function (_super) {
    __extends(GetProvisionedConcurrencyConfigRequest, _super);
    function GetProvisionedConcurrencyConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProvisionedConcurrencyConfigPathParams)
    ], GetProvisionedConcurrencyConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProvisionedConcurrencyConfigQueryParams)
    ], GetProvisionedConcurrencyConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProvisionedConcurrencyConfigHeaders)
    ], GetProvisionedConcurrencyConfigRequest.prototype, "headers", void 0);
    return GetProvisionedConcurrencyConfigRequest;
}(SpeakeasyBase));
export { GetProvisionedConcurrencyConfigRequest };
var GetProvisionedConcurrencyConfigResponse = /** @class */ (function (_super) {
    __extends(GetProvisionedConcurrencyConfigResponse, _super);
    function GetProvisionedConcurrencyConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProvisionedConcurrencyConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetProvisionedConcurrencyConfigResponse)
    ], GetProvisionedConcurrencyConfigResponse.prototype, "getProvisionedConcurrencyConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProvisionedConcurrencyConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProvisionedConcurrencyConfigResponse.prototype, "provisionedConcurrencyConfigNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProvisionedConcurrencyConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProvisionedConcurrencyConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProvisionedConcurrencyConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProvisionedConcurrencyConfigResponse.prototype, "tooManyRequestsException", void 0);
    return GetProvisionedConcurrencyConfigResponse;
}(SpeakeasyBase));
export { GetProvisionedConcurrencyConfigResponse };

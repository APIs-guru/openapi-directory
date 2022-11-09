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
var UpdateFunctionConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationPathParams, _super);
    function UpdateFunctionConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationPathParams.prototype, "functionName", void 0);
    return UpdateFunctionConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationPathParams };
var UpdateFunctionConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationQueryParams, _super);
    function UpdateFunctionConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Handler" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationQueryParams.prototype, "handler", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MemorySize" }),
        __metadata("design:type", Number)
    ], UpdateFunctionConfigurationQueryParams.prototype, "memorySize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Role" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationQueryParams.prototype, "role", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Timeout" }),
        __metadata("design:type", Number)
    ], UpdateFunctionConfigurationQueryParams.prototype, "timeout", void 0);
    return UpdateFunctionConfigurationQueryParams;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationQueryParams };
var UpdateFunctionConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationHeaders, _super);
    function UpdateFunctionConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFunctionConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationHeaders };
var UpdateFunctionConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationRequest, _super);
    function UpdateFunctionConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateFunctionConfigurationPathParams)
    ], UpdateFunctionConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateFunctionConfigurationQueryParams)
    ], UpdateFunctionConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateFunctionConfigurationHeaders)
    ], UpdateFunctionConfigurationRequest.prototype, "headers", void 0);
    return UpdateFunctionConfigurationRequest;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationRequest };
var UpdateFunctionConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationResponse, _super);
    function UpdateFunctionConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FunctionConfiguration)
    ], UpdateFunctionConfigurationResponse.prototype, "functionConfiguration", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.InvalidParameterValueException)
    ], UpdateFunctionConfigurationResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], UpdateFunctionConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ServiceException)
    ], UpdateFunctionConfigurationResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateFunctionConfigurationResponse.prototype, "statusCode", void 0);
    return UpdateFunctionConfigurationResponse;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationResponse };

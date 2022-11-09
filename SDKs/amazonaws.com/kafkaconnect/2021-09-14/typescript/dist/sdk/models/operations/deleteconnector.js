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
var DeleteConnectorPathParams = /** @class */ (function (_super) {
    __extends(DeleteConnectorPathParams, _super);
    function DeleteConnectorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=connectorArn" }),
        __metadata("design:type", String)
    ], DeleteConnectorPathParams.prototype, "connectorArn", void 0);
    return DeleteConnectorPathParams;
}(SpeakeasyBase));
export { DeleteConnectorPathParams };
var DeleteConnectorQueryParams = /** @class */ (function (_super) {
    __extends(DeleteConnectorQueryParams, _super);
    function DeleteConnectorQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currentVersion" }),
        __metadata("design:type", String)
    ], DeleteConnectorQueryParams.prototype, "currentVersion", void 0);
    return DeleteConnectorQueryParams;
}(SpeakeasyBase));
export { DeleteConnectorQueryParams };
var DeleteConnectorHeaders = /** @class */ (function (_super) {
    __extends(DeleteConnectorHeaders, _super);
    function DeleteConnectorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteConnectorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteConnectorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteConnectorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteConnectorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteConnectorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteConnectorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteConnectorHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteConnectorHeaders;
}(SpeakeasyBase));
export { DeleteConnectorHeaders };
var DeleteConnectorRequest = /** @class */ (function (_super) {
    __extends(DeleteConnectorRequest, _super);
    function DeleteConnectorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteConnectorPathParams)
    ], DeleteConnectorRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteConnectorQueryParams)
    ], DeleteConnectorRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteConnectorHeaders)
    ], DeleteConnectorRequest.prototype, "headers", void 0);
    return DeleteConnectorRequest;
}(SpeakeasyBase));
export { DeleteConnectorRequest };
var DeleteConnectorResponse = /** @class */ (function (_super) {
    __extends(DeleteConnectorResponse, _super);
    function DeleteConnectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteConnectorResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteConnectorResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteConnectorResponse)
    ], DeleteConnectorResponse.prototype, "deleteConnectorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteConnectorResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteConnectorResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteConnectorResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteConnectorResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteConnectorResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteConnectorResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteConnectorResponse.prototype, "unauthorizedException", void 0);
    return DeleteConnectorResponse;
}(SpeakeasyBase));
export { DeleteConnectorResponse };

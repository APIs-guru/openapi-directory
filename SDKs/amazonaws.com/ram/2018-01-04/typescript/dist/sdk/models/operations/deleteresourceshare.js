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
var DeleteResourceShareQueryParams = /** @class */ (function (_super) {
    __extends(DeleteResourceShareQueryParams, _super);
    function DeleteResourceShareQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=clientToken" }),
        __metadata("design:type", String)
    ], DeleteResourceShareQueryParams.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=resourceShareArn" }),
        __metadata("design:type", String)
    ], DeleteResourceShareQueryParams.prototype, "resourceShareArn", void 0);
    return DeleteResourceShareQueryParams;
}(SpeakeasyBase));
export { DeleteResourceShareQueryParams };
var DeleteResourceShareHeaders = /** @class */ (function (_super) {
    __extends(DeleteResourceShareHeaders, _super);
    function DeleteResourceShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteResourceShareHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteResourceShareHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteResourceShareHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteResourceShareHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteResourceShareHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteResourceShareHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteResourceShareHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteResourceShareHeaders;
}(SpeakeasyBase));
export { DeleteResourceShareHeaders };
var DeleteResourceShareRequest = /** @class */ (function (_super) {
    __extends(DeleteResourceShareRequest, _super);
    function DeleteResourceShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteResourceShareQueryParams)
    ], DeleteResourceShareRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteResourceShareHeaders)
    ], DeleteResourceShareRequest.prototype, "headers", void 0);
    return DeleteResourceShareRequest;
}(SpeakeasyBase));
export { DeleteResourceShareRequest };
var DeleteResourceShareResponse = /** @class */ (function (_super) {
    __extends(DeleteResourceShareResponse, _super);
    function DeleteResourceShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteResourceShareResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteResourceShareResponse)
    ], DeleteResourceShareResponse.prototype, "deleteResourceShareResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteResourceShareResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteResourceShareResponse.prototype, "invalidClientTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteResourceShareResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteResourceShareResponse.prototype, "invalidStateTransitionException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteResourceShareResponse.prototype, "malformedArnException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteResourceShareResponse.prototype, "operationNotPermittedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteResourceShareResponse.prototype, "serverInternalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteResourceShareResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteResourceShareResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteResourceShareResponse.prototype, "unknownResourceException", void 0);
    return DeleteResourceShareResponse;
}(SpeakeasyBase));
export { DeleteResourceShareResponse };

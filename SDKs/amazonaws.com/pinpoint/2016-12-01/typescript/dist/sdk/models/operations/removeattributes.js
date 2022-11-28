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
var RemoveAttributesPathParams = /** @class */ (function (_super) {
    __extends(RemoveAttributesPathParams, _super);
    function RemoveAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], RemoveAttributesPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attribute-type" }),
        __metadata("design:type", String)
    ], RemoveAttributesPathParams.prototype, "attributeType", void 0);
    return RemoveAttributesPathParams;
}(SpeakeasyBase));
export { RemoveAttributesPathParams };
var RemoveAttributesHeaders = /** @class */ (function (_super) {
    __extends(RemoveAttributesHeaders, _super);
    function RemoveAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RemoveAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RemoveAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RemoveAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RemoveAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RemoveAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RemoveAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RemoveAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RemoveAttributesHeaders;
}(SpeakeasyBase));
export { RemoveAttributesHeaders };
// RemoveAttributesRequestBodyUpdateAttributesRequest
/**
 * Specifies one or more attributes to remove from all the endpoints that are associated with an application.
**/
var RemoveAttributesRequestBodyUpdateAttributesRequest = /** @class */ (function (_super) {
    __extends(RemoveAttributesRequestBodyUpdateAttributesRequest, _super);
    function RemoveAttributesRequestBodyUpdateAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Blacklist" }),
        __metadata("design:type", Array)
    ], RemoveAttributesRequestBodyUpdateAttributesRequest.prototype, "blacklist", void 0);
    return RemoveAttributesRequestBodyUpdateAttributesRequest;
}(SpeakeasyBase));
export { RemoveAttributesRequestBodyUpdateAttributesRequest };
var RemoveAttributesRequestBody = /** @class */ (function (_super) {
    __extends(RemoveAttributesRequestBody, _super);
    function RemoveAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateAttributesRequest" }),
        __metadata("design:type", RemoveAttributesRequestBodyUpdateAttributesRequest)
    ], RemoveAttributesRequestBody.prototype, "updateAttributesRequest", void 0);
    return RemoveAttributesRequestBody;
}(SpeakeasyBase));
export { RemoveAttributesRequestBody };
var RemoveAttributesRequest = /** @class */ (function (_super) {
    __extends(RemoveAttributesRequest, _super);
    function RemoveAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveAttributesPathParams)
    ], RemoveAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveAttributesHeaders)
    ], RemoveAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveAttributesRequestBody)
    ], RemoveAttributesRequest.prototype, "request", void 0);
    return RemoveAttributesRequest;
}(SpeakeasyBase));
export { RemoveAttributesRequest };
var RemoveAttributesResponse = /** @class */ (function (_super) {
    __extends(RemoveAttributesResponse, _super);
    function RemoveAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAttributesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAttributesResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAttributesResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAttributesResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAttributesResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAttributesResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemoveAttributesResponse)
    ], RemoveAttributesResponse.prototype, "removeAttributesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAttributesResponse.prototype, "tooManyRequestsException", void 0);
    return RemoveAttributesResponse;
}(SpeakeasyBase));
export { RemoveAttributesResponse };

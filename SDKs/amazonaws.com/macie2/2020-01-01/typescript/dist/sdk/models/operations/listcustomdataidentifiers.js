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
var ListCustomDataIdentifiersQueryParams = /** @class */ (function (_super) {
    __extends(ListCustomDataIdentifiersQueryParams, _super);
    function ListCustomDataIdentifiersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersQueryParams.prototype, "nextToken", void 0);
    return ListCustomDataIdentifiersQueryParams;
}(SpeakeasyBase));
export { ListCustomDataIdentifiersQueryParams };
var ListCustomDataIdentifiersHeaders = /** @class */ (function (_super) {
    __extends(ListCustomDataIdentifiersHeaders, _super);
    function ListCustomDataIdentifiersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListCustomDataIdentifiersHeaders;
}(SpeakeasyBase));
export { ListCustomDataIdentifiersHeaders };
var ListCustomDataIdentifiersRequestBody = /** @class */ (function (_super) {
    __extends(ListCustomDataIdentifiersRequestBody, _super);
    function ListCustomDataIdentifiersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListCustomDataIdentifiersRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersRequestBody.prototype, "nextToken", void 0);
    return ListCustomDataIdentifiersRequestBody;
}(SpeakeasyBase));
export { ListCustomDataIdentifiersRequestBody };
var ListCustomDataIdentifiersRequest = /** @class */ (function (_super) {
    __extends(ListCustomDataIdentifiersRequest, _super);
    function ListCustomDataIdentifiersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCustomDataIdentifiersQueryParams)
    ], ListCustomDataIdentifiersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCustomDataIdentifiersHeaders)
    ], ListCustomDataIdentifiersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListCustomDataIdentifiersRequestBody)
    ], ListCustomDataIdentifiersRequest.prototype, "request", void 0);
    return ListCustomDataIdentifiersRequest;
}(SpeakeasyBase));
export { ListCustomDataIdentifiersRequest };
var ListCustomDataIdentifiersResponse = /** @class */ (function (_super) {
    __extends(ListCustomDataIdentifiersResponse, _super);
    function ListCustomDataIdentifiersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomDataIdentifiersResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomDataIdentifiersResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCustomDataIdentifiersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomDataIdentifiersResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCustomDataIdentifiersResponse)
    ], ListCustomDataIdentifiersResponse.prototype, "listCustomDataIdentifiersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomDataIdentifiersResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomDataIdentifiersResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListCustomDataIdentifiersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomDataIdentifiersResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomDataIdentifiersResponse.prototype, "validationException", void 0);
    return ListCustomDataIdentifiersResponse;
}(SpeakeasyBase));
export { ListCustomDataIdentifiersResponse };

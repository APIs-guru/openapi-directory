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
var ListPendingInvitationResourcesQueryParams = /** @class */ (function (_super) {
    __extends(ListPendingInvitationResourcesQueryParams, _super);
    function ListPendingInvitationResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesQueryParams.prototype, "nextToken", void 0);
    return ListPendingInvitationResourcesQueryParams;
}(SpeakeasyBase));
export { ListPendingInvitationResourcesQueryParams };
var ListPendingInvitationResourcesHeaders = /** @class */ (function (_super) {
    __extends(ListPendingInvitationResourcesHeaders, _super);
    function ListPendingInvitationResourcesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListPendingInvitationResourcesHeaders;
}(SpeakeasyBase));
export { ListPendingInvitationResourcesHeaders };
var ListPendingInvitationResourcesRequestBody = /** @class */ (function (_super) {
    __extends(ListPendingInvitationResourcesRequestBody, _super);
    function ListPendingInvitationResourcesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListPendingInvitationResourcesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceShareInvitationArn" }),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesRequestBody.prototype, "resourceShareInvitationArn", void 0);
    return ListPendingInvitationResourcesRequestBody;
}(SpeakeasyBase));
export { ListPendingInvitationResourcesRequestBody };
var ListPendingInvitationResourcesRequest = /** @class */ (function (_super) {
    __extends(ListPendingInvitationResourcesRequest, _super);
    function ListPendingInvitationResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListPendingInvitationResourcesQueryParams)
    ], ListPendingInvitationResourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListPendingInvitationResourcesHeaders)
    ], ListPendingInvitationResourcesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListPendingInvitationResourcesRequestBody)
    ], ListPendingInvitationResourcesRequest.prototype, "request", void 0);
    return ListPendingInvitationResourcesRequest;
}(SpeakeasyBase));
export { ListPendingInvitationResourcesRequest };
var ListPendingInvitationResourcesResponse = /** @class */ (function (_super) {
    __extends(ListPendingInvitationResourcesResponse, _super);
    function ListPendingInvitationResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListPendingInvitationResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPendingInvitationResourcesResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPendingInvitationResourcesResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListPendingInvitationResourcesResponse)
    ], ListPendingInvitationResourcesResponse.prototype, "listPendingInvitationResourcesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPendingInvitationResourcesResponse.prototype, "malformedArnException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPendingInvitationResourcesResponse.prototype, "missingRequiredParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPendingInvitationResourcesResponse.prototype, "resourceShareInvitationAlreadyRejectedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPendingInvitationResourcesResponse.prototype, "resourceShareInvitationArnNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPendingInvitationResourcesResponse.prototype, "resourceShareInvitationExpiredException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPendingInvitationResourcesResponse.prototype, "serverInternalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPendingInvitationResourcesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListPendingInvitationResourcesResponse.prototype, "statusCode", void 0);
    return ListPendingInvitationResourcesResponse;
}(SpeakeasyBase));
export { ListPendingInvitationResourcesResponse };

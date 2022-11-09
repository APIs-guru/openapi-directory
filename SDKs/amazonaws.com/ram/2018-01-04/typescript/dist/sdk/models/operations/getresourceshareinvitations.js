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
var GetResourceShareInvitationsQueryParams = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsQueryParams, _super);
    function GetResourceShareInvitationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsQueryParams.prototype, "nextToken", void 0);
    return GetResourceShareInvitationsQueryParams;
}(SpeakeasyBase));
export { GetResourceShareInvitationsQueryParams };
var GetResourceShareInvitationsHeaders = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsHeaders, _super);
    function GetResourceShareInvitationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResourceShareInvitationsHeaders;
}(SpeakeasyBase));
export { GetResourceShareInvitationsHeaders };
var GetResourceShareInvitationsRequestBody = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsRequestBody, _super);
    function GetResourceShareInvitationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], GetResourceShareInvitationsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceShareArns" }),
        __metadata("design:type", Array)
    ], GetResourceShareInvitationsRequestBody.prototype, "resourceShareArns", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceShareInvitationArns" }),
        __metadata("design:type", Array)
    ], GetResourceShareInvitationsRequestBody.prototype, "resourceShareInvitationArns", void 0);
    return GetResourceShareInvitationsRequestBody;
}(SpeakeasyBase));
export { GetResourceShareInvitationsRequestBody };
var GetResourceShareInvitationsRequest = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsRequest, _super);
    function GetResourceShareInvitationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetResourceShareInvitationsQueryParams)
    ], GetResourceShareInvitationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetResourceShareInvitationsHeaders)
    ], GetResourceShareInvitationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetResourceShareInvitationsRequestBody)
    ], GetResourceShareInvitationsRequest.prototype, "request", void 0);
    return GetResourceShareInvitationsRequest;
}(SpeakeasyBase));
export { GetResourceShareInvitationsRequest };
var GetResourceShareInvitationsResponse = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsResponse, _super);
    function GetResourceShareInvitationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetResourceShareInvitationsResponse)
    ], GetResourceShareInvitationsResponse.prototype, "getResourceShareInvitationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "invalidMaxResultsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "malformedArnException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "resourceShareInvitationArnNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "serverInternalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetResourceShareInvitationsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "unknownResourceException", void 0);
    return GetResourceShareInvitationsResponse;
}(SpeakeasyBase));
export { GetResourceShareInvitationsResponse };

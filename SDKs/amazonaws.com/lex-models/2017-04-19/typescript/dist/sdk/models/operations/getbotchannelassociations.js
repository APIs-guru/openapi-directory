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
var GetBotChannelAssociationsPathParams = /** @class */ (function (_super) {
    __extends(GetBotChannelAssociationsPathParams, _super);
    function GetBotChannelAssociationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aliasName" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsPathParams.prototype, "aliasName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botName" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsPathParams.prototype, "botName", void 0);
    return GetBotChannelAssociationsPathParams;
}(SpeakeasyBase));
export { GetBotChannelAssociationsPathParams };
var GetBotChannelAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetBotChannelAssociationsQueryParams, _super);
    function GetBotChannelAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetBotChannelAssociationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameContains" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsQueryParams.prototype, "nameContains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsQueryParams.prototype, "nextToken", void 0);
    return GetBotChannelAssociationsQueryParams;
}(SpeakeasyBase));
export { GetBotChannelAssociationsQueryParams };
var GetBotChannelAssociationsHeaders = /** @class */ (function (_super) {
    __extends(GetBotChannelAssociationsHeaders, _super);
    function GetBotChannelAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBotChannelAssociationsHeaders;
}(SpeakeasyBase));
export { GetBotChannelAssociationsHeaders };
var GetBotChannelAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetBotChannelAssociationsRequest, _super);
    function GetBotChannelAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBotChannelAssociationsPathParams)
    ], GetBotChannelAssociationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBotChannelAssociationsQueryParams)
    ], GetBotChannelAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBotChannelAssociationsHeaders)
    ], GetBotChannelAssociationsRequest.prototype, "headers", void 0);
    return GetBotChannelAssociationsRequest;
}(SpeakeasyBase));
export { GetBotChannelAssociationsRequest };
var GetBotChannelAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetBotChannelAssociationsResponse, _super);
    function GetBotChannelAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBotChannelAssociationsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBotChannelAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBotChannelAssociationsResponse)
    ], GetBotChannelAssociationsResponse.prototype, "getBotChannelAssociationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBotChannelAssociationsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBotChannelAssociationsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBotChannelAssociationsResponse.prototype, "statusCode", void 0);
    return GetBotChannelAssociationsResponse;
}(SpeakeasyBase));
export { GetBotChannelAssociationsResponse };

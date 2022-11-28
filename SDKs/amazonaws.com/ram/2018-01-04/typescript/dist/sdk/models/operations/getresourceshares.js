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
var GetResourceSharesQueryParams = /** @class */ (function (_super) {
    __extends(GetResourceSharesQueryParams, _super);
    function GetResourceSharesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], GetResourceSharesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetResourceSharesQueryParams.prototype, "nextToken", void 0);
    return GetResourceSharesQueryParams;
}(SpeakeasyBase));
export { GetResourceSharesQueryParams };
var GetResourceSharesHeaders = /** @class */ (function (_super) {
    __extends(GetResourceSharesHeaders, _super);
    function GetResourceSharesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResourceSharesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResourceSharesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResourceSharesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResourceSharesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResourceSharesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResourceSharesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResourceSharesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResourceSharesHeaders;
}(SpeakeasyBase));
export { GetResourceSharesHeaders };
export var GetResourceSharesRequestBodyResourceOwnerEnum;
(function (GetResourceSharesRequestBodyResourceOwnerEnum) {
    GetResourceSharesRequestBodyResourceOwnerEnum["Self"] = "SELF";
    GetResourceSharesRequestBodyResourceOwnerEnum["OtherAccounts"] = "OTHER-ACCOUNTS";
})(GetResourceSharesRequestBodyResourceOwnerEnum || (GetResourceSharesRequestBodyResourceOwnerEnum = {}));
export var GetResourceSharesRequestBodyResourceShareStatusEnum;
(function (GetResourceSharesRequestBodyResourceShareStatusEnum) {
    GetResourceSharesRequestBodyResourceShareStatusEnum["Pending"] = "PENDING";
    GetResourceSharesRequestBodyResourceShareStatusEnum["Active"] = "ACTIVE";
    GetResourceSharesRequestBodyResourceShareStatusEnum["Failed"] = "FAILED";
    GetResourceSharesRequestBodyResourceShareStatusEnum["Deleting"] = "DELETING";
    GetResourceSharesRequestBodyResourceShareStatusEnum["Deleted"] = "DELETED";
})(GetResourceSharesRequestBodyResourceShareStatusEnum || (GetResourceSharesRequestBodyResourceShareStatusEnum = {}));
var GetResourceSharesRequestBody = /** @class */ (function (_super) {
    __extends(GetResourceSharesRequestBody, _super);
    function GetResourceSharesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], GetResourceSharesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetResourceSharesRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], GetResourceSharesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissionArn" }),
        __metadata("design:type", String)
    ], GetResourceSharesRequestBody.prototype, "permissionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceOwner" }),
        __metadata("design:type", String)
    ], GetResourceSharesRequestBody.prototype, "resourceOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceShareArns" }),
        __metadata("design:type", Array)
    ], GetResourceSharesRequestBody.prototype, "resourceShareArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceShareStatus" }),
        __metadata("design:type", String)
    ], GetResourceSharesRequestBody.prototype, "resourceShareStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagFilters", elemType: shared.TagFilter }),
        __metadata("design:type", Array)
    ], GetResourceSharesRequestBody.prototype, "tagFilters", void 0);
    return GetResourceSharesRequestBody;
}(SpeakeasyBase));
export { GetResourceSharesRequestBody };
var GetResourceSharesRequest = /** @class */ (function (_super) {
    __extends(GetResourceSharesRequest, _super);
    function GetResourceSharesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourceSharesQueryParams)
    ], GetResourceSharesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourceSharesHeaders)
    ], GetResourceSharesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetResourceSharesRequestBody)
    ], GetResourceSharesRequest.prototype, "request", void 0);
    return GetResourceSharesRequest;
}(SpeakeasyBase));
export { GetResourceSharesRequest };
var GetResourceSharesResponse = /** @class */ (function (_super) {
    __extends(GetResourceSharesResponse, _super);
    function GetResourceSharesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResourceSharesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetResourceSharesResponse)
    ], GetResourceSharesResponse.prototype, "getResourceSharesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetResourceSharesResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetResourceSharesResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetResourceSharesResponse.prototype, "malformedArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetResourceSharesResponse.prototype, "serverInternalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetResourceSharesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResourceSharesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetResourceSharesResponse.prototype, "unknownResourceException", void 0);
    return GetResourceSharesResponse;
}(SpeakeasyBase));
export { GetResourceSharesResponse };

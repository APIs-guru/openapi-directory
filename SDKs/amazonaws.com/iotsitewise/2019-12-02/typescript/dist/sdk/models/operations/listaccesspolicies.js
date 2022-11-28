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
export var ListAccessPoliciesIdentityTypeEnum;
(function (ListAccessPoliciesIdentityTypeEnum) {
    ListAccessPoliciesIdentityTypeEnum["User"] = "USER";
    ListAccessPoliciesIdentityTypeEnum["Group"] = "GROUP";
    ListAccessPoliciesIdentityTypeEnum["Iam"] = "IAM";
})(ListAccessPoliciesIdentityTypeEnum || (ListAccessPoliciesIdentityTypeEnum = {}));
export var ListAccessPoliciesResourceTypeEnum;
(function (ListAccessPoliciesResourceTypeEnum) {
    ListAccessPoliciesResourceTypeEnum["Portal"] = "PORTAL";
    ListAccessPoliciesResourceTypeEnum["Project"] = "PROJECT";
})(ListAccessPoliciesResourceTypeEnum || (ListAccessPoliciesResourceTypeEnum = {}));
var ListAccessPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(ListAccessPoliciesQueryParams, _super);
    function ListAccessPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iamArn" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesQueryParams.prototype, "iamArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=identityId" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesQueryParams.prototype, "identityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=identityType" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesQueryParams.prototype, "identityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAccessPoliciesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceId" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesQueryParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceType" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesQueryParams.prototype, "resourceType", void 0);
    return ListAccessPoliciesQueryParams;
}(SpeakeasyBase));
export { ListAccessPoliciesQueryParams };
var ListAccessPoliciesHeaders = /** @class */ (function (_super) {
    __extends(ListAccessPoliciesHeaders, _super);
    function ListAccessPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAccessPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAccessPoliciesHeaders;
}(SpeakeasyBase));
export { ListAccessPoliciesHeaders };
var ListAccessPoliciesRequest = /** @class */ (function (_super) {
    __extends(ListAccessPoliciesRequest, _super);
    function ListAccessPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAccessPoliciesQueryParams)
    ], ListAccessPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAccessPoliciesHeaders)
    ], ListAccessPoliciesRequest.prototype, "headers", void 0);
    return ListAccessPoliciesRequest;
}(SpeakeasyBase));
export { ListAccessPoliciesRequest };
var ListAccessPoliciesResponse = /** @class */ (function (_super) {
    __extends(ListAccessPoliciesResponse, _super);
    function ListAccessPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAccessPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccessPoliciesResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccessPoliciesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAccessPoliciesResponse)
    ], ListAccessPoliciesResponse.prototype, "listAccessPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAccessPoliciesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccessPoliciesResponse.prototype, "throttlingException", void 0);
    return ListAccessPoliciesResponse;
}(SpeakeasyBase));
export { ListAccessPoliciesResponse };

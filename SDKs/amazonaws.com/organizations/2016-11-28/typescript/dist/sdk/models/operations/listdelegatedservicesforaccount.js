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
var ListDelegatedServicesForAccountQueryParams = /** @class */ (function (_super) {
    __extends(ListDelegatedServicesForAccountQueryParams, _super);
    function ListDelegatedServicesForAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountQueryParams.prototype, "nextToken", void 0);
    return ListDelegatedServicesForAccountQueryParams;
}(SpeakeasyBase));
export { ListDelegatedServicesForAccountQueryParams };
export var ListDelegatedServicesForAccountXAmzTargetEnum;
(function (ListDelegatedServicesForAccountXAmzTargetEnum) {
    ListDelegatedServicesForAccountXAmzTargetEnum["AwsOrganizationsV20161128ListDelegatedServicesForAccount"] = "AWSOrganizationsV20161128.ListDelegatedServicesForAccount";
})(ListDelegatedServicesForAccountXAmzTargetEnum || (ListDelegatedServicesForAccountXAmzTargetEnum = {}));
var ListDelegatedServicesForAccountHeaders = /** @class */ (function (_super) {
    __extends(ListDelegatedServicesForAccountHeaders, _super);
    function ListDelegatedServicesForAccountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountHeaders.prototype, "xAmzTarget", void 0);
    return ListDelegatedServicesForAccountHeaders;
}(SpeakeasyBase));
export { ListDelegatedServicesForAccountHeaders };
var ListDelegatedServicesForAccountRequest = /** @class */ (function (_super) {
    __extends(ListDelegatedServicesForAccountRequest, _super);
    function ListDelegatedServicesForAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDelegatedServicesForAccountQueryParams)
    ], ListDelegatedServicesForAccountRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDelegatedServicesForAccountHeaders)
    ], ListDelegatedServicesForAccountRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListDelegatedServicesForAccountRequest)
    ], ListDelegatedServicesForAccountRequest.prototype, "request", void 0);
    return ListDelegatedServicesForAccountRequest;
}(SpeakeasyBase));
export { ListDelegatedServicesForAccountRequest };
var ListDelegatedServicesForAccountResponse = /** @class */ (function (_super) {
    __extends(ListDelegatedServicesForAccountResponse, _super);
    function ListDelegatedServicesForAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDelegatedServicesForAccountResponse.prototype, "awsOrganizationsNotInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDelegatedServicesForAccountResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDelegatedServicesForAccountResponse.prototype, "accountNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDelegatedServicesForAccountResponse.prototype, "accountNotRegisteredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDelegatedServicesForAccountResponse.prototype, "constraintViolationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDelegatedServicesForAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDelegatedServicesForAccountResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDelegatedServicesForAccountResponse)
    ], ListDelegatedServicesForAccountResponse.prototype, "listDelegatedServicesForAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDelegatedServicesForAccountResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDelegatedServicesForAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDelegatedServicesForAccountResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDelegatedServicesForAccountResponse.prototype, "unsupportedApiEndpointException", void 0);
    return ListDelegatedServicesForAccountResponse;
}(SpeakeasyBase));
export { ListDelegatedServicesForAccountResponse };

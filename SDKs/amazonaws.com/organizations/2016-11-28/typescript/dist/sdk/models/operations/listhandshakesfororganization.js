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
var ListHandshakesForOrganizationQueryParams = /** @class */ (function (_super) {
    __extends(ListHandshakesForOrganizationQueryParams, _super);
    function ListHandshakesForOrganizationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationQueryParams.prototype, "nextToken", void 0);
    return ListHandshakesForOrganizationQueryParams;
}(SpeakeasyBase));
export { ListHandshakesForOrganizationQueryParams };
export var ListHandshakesForOrganizationXAmzTargetEnum;
(function (ListHandshakesForOrganizationXAmzTargetEnum) {
    ListHandshakesForOrganizationXAmzTargetEnum["AwsOrganizationsV20161128ListHandshakesForOrganization"] = "AWSOrganizationsV20161128.ListHandshakesForOrganization";
})(ListHandshakesForOrganizationXAmzTargetEnum || (ListHandshakesForOrganizationXAmzTargetEnum = {}));
var ListHandshakesForOrganizationHeaders = /** @class */ (function (_super) {
    __extends(ListHandshakesForOrganizationHeaders, _super);
    function ListHandshakesForOrganizationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationHeaders.prototype, "xAmzTarget", void 0);
    return ListHandshakesForOrganizationHeaders;
}(SpeakeasyBase));
export { ListHandshakesForOrganizationHeaders };
var ListHandshakesForOrganizationRequest = /** @class */ (function (_super) {
    __extends(ListHandshakesForOrganizationRequest, _super);
    function ListHandshakesForOrganizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListHandshakesForOrganizationQueryParams)
    ], ListHandshakesForOrganizationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListHandshakesForOrganizationHeaders)
    ], ListHandshakesForOrganizationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListHandshakesForOrganizationRequest)
    ], ListHandshakesForOrganizationRequest.prototype, "request", void 0);
    return ListHandshakesForOrganizationRequest;
}(SpeakeasyBase));
export { ListHandshakesForOrganizationRequest };
var ListHandshakesForOrganizationResponse = /** @class */ (function (_super) {
    __extends(ListHandshakesForOrganizationResponse, _super);
    function ListHandshakesForOrganizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListHandshakesForOrganizationResponse.prototype, "awsOrganizationsNotInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListHandshakesForOrganizationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListHandshakesForOrganizationResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListHandshakesForOrganizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListHandshakesForOrganizationResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListHandshakesForOrganizationResponse)
    ], ListHandshakesForOrganizationResponse.prototype, "listHandshakesForOrganizationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListHandshakesForOrganizationResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListHandshakesForOrganizationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListHandshakesForOrganizationResponse.prototype, "tooManyRequestsException", void 0);
    return ListHandshakesForOrganizationResponse;
}(SpeakeasyBase));
export { ListHandshakesForOrganizationResponse };

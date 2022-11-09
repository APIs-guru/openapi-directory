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
var ListOrganizationsQueryParams = /** @class */ (function (_super) {
    __extends(ListOrganizationsQueryParams, _super);
    function ListOrganizationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListOrganizationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListOrganizationsQueryParams.prototype, "nextToken", void 0);
    return ListOrganizationsQueryParams;
}(SpeakeasyBase));
export { ListOrganizationsQueryParams };
export var ListOrganizationsXAmzTargetEnum;
(function (ListOrganizationsXAmzTargetEnum) {
    ListOrganizationsXAmzTargetEnum["WorkMailServiceListOrganizations"] = "WorkMailService.ListOrganizations";
})(ListOrganizationsXAmzTargetEnum || (ListOrganizationsXAmzTargetEnum = {}));
var ListOrganizationsHeaders = /** @class */ (function (_super) {
    __extends(ListOrganizationsHeaders, _super);
    function ListOrganizationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListOrganizationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListOrganizationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListOrganizationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListOrganizationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListOrganizationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListOrganizationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListOrganizationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListOrganizationsHeaders.prototype, "xAmzTarget", void 0);
    return ListOrganizationsHeaders;
}(SpeakeasyBase));
export { ListOrganizationsHeaders };
var ListOrganizationsRequest = /** @class */ (function (_super) {
    __extends(ListOrganizationsRequest, _super);
    function ListOrganizationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListOrganizationsQueryParams)
    ], ListOrganizationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListOrganizationsHeaders)
    ], ListOrganizationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListOrganizationsRequest)
    ], ListOrganizationsRequest.prototype, "request", void 0);
    return ListOrganizationsRequest;
}(SpeakeasyBase));
export { ListOrganizationsRequest };
var ListOrganizationsResponse = /** @class */ (function (_super) {
    __extends(ListOrganizationsResponse, _super);
    function ListOrganizationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListOrganizationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListOrganizationsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListOrganizationsResponse)
    ], ListOrganizationsResponse.prototype, "listOrganizationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListOrganizationsResponse.prototype, "statusCode", void 0);
    return ListOrganizationsResponse;
}(SpeakeasyBase));
export { ListOrganizationsResponse };

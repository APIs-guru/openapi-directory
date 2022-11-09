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
var ListManagedPoliciesInPermissionSetQueryParams = /** @class */ (function (_super) {
    __extends(ListManagedPoliciesInPermissionSetQueryParams, _super);
    function ListManagedPoliciesInPermissionSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetQueryParams.prototype, "nextToken", void 0);
    return ListManagedPoliciesInPermissionSetQueryParams;
}(SpeakeasyBase));
export { ListManagedPoliciesInPermissionSetQueryParams };
export var ListManagedPoliciesInPermissionSetXAmzTargetEnum;
(function (ListManagedPoliciesInPermissionSetXAmzTargetEnum) {
    ListManagedPoliciesInPermissionSetXAmzTargetEnum["SwbExternalServiceListManagedPoliciesInPermissionSet"] = "SWBExternalService.ListManagedPoliciesInPermissionSet";
})(ListManagedPoliciesInPermissionSetXAmzTargetEnum || (ListManagedPoliciesInPermissionSetXAmzTargetEnum = {}));
var ListManagedPoliciesInPermissionSetHeaders = /** @class */ (function (_super) {
    __extends(ListManagedPoliciesInPermissionSetHeaders, _super);
    function ListManagedPoliciesInPermissionSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetHeaders.prototype, "xAmzTarget", void 0);
    return ListManagedPoliciesInPermissionSetHeaders;
}(SpeakeasyBase));
export { ListManagedPoliciesInPermissionSetHeaders };
var ListManagedPoliciesInPermissionSetRequest = /** @class */ (function (_super) {
    __extends(ListManagedPoliciesInPermissionSetRequest, _super);
    function ListManagedPoliciesInPermissionSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListManagedPoliciesInPermissionSetQueryParams)
    ], ListManagedPoliciesInPermissionSetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListManagedPoliciesInPermissionSetHeaders)
    ], ListManagedPoliciesInPermissionSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListManagedPoliciesInPermissionSetRequest)
    ], ListManagedPoliciesInPermissionSetRequest.prototype, "request", void 0);
    return ListManagedPoliciesInPermissionSetRequest;
}(SpeakeasyBase));
export { ListManagedPoliciesInPermissionSetRequest };
var ListManagedPoliciesInPermissionSetResponse = /** @class */ (function (_super) {
    __extends(ListManagedPoliciesInPermissionSetResponse, _super);
    function ListManagedPoliciesInPermissionSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListManagedPoliciesInPermissionSetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListManagedPoliciesInPermissionSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListManagedPoliciesInPermissionSetResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListManagedPoliciesInPermissionSetResponse)
    ], ListManagedPoliciesInPermissionSetResponse.prototype, "listManagedPoliciesInPermissionSetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListManagedPoliciesInPermissionSetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListManagedPoliciesInPermissionSetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListManagedPoliciesInPermissionSetResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListManagedPoliciesInPermissionSetResponse.prototype, "validationException", void 0);
    return ListManagedPoliciesInPermissionSetResponse;
}(SpeakeasyBase));
export { ListManagedPoliciesInPermissionSetResponse };

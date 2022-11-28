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
var ListAccountsForProvisionedPermissionSetQueryParams = /** @class */ (function (_super) {
    __extends(ListAccountsForProvisionedPermissionSetQueryParams, _super);
    function ListAccountsForProvisionedPermissionSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetQueryParams.prototype, "nextToken", void 0);
    return ListAccountsForProvisionedPermissionSetQueryParams;
}(SpeakeasyBase));
export { ListAccountsForProvisionedPermissionSetQueryParams };
export var ListAccountsForProvisionedPermissionSetXAmzTargetEnum;
(function (ListAccountsForProvisionedPermissionSetXAmzTargetEnum) {
    ListAccountsForProvisionedPermissionSetXAmzTargetEnum["SwbExternalServiceListAccountsForProvisionedPermissionSet"] = "SWBExternalService.ListAccountsForProvisionedPermissionSet";
})(ListAccountsForProvisionedPermissionSetXAmzTargetEnum || (ListAccountsForProvisionedPermissionSetXAmzTargetEnum = {}));
var ListAccountsForProvisionedPermissionSetHeaders = /** @class */ (function (_super) {
    __extends(ListAccountsForProvisionedPermissionSetHeaders, _super);
    function ListAccountsForProvisionedPermissionSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetHeaders.prototype, "xAmzTarget", void 0);
    return ListAccountsForProvisionedPermissionSetHeaders;
}(SpeakeasyBase));
export { ListAccountsForProvisionedPermissionSetHeaders };
var ListAccountsForProvisionedPermissionSetRequest = /** @class */ (function (_super) {
    __extends(ListAccountsForProvisionedPermissionSetRequest, _super);
    function ListAccountsForProvisionedPermissionSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAccountsForProvisionedPermissionSetQueryParams)
    ], ListAccountsForProvisionedPermissionSetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAccountsForProvisionedPermissionSetHeaders)
    ], ListAccountsForProvisionedPermissionSetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListAccountsForProvisionedPermissionSetRequest)
    ], ListAccountsForProvisionedPermissionSetRequest.prototype, "request", void 0);
    return ListAccountsForProvisionedPermissionSetRequest;
}(SpeakeasyBase));
export { ListAccountsForProvisionedPermissionSetRequest };
var ListAccountsForProvisionedPermissionSetResponse = /** @class */ (function (_super) {
    __extends(ListAccountsForProvisionedPermissionSetResponse, _super);
    function ListAccountsForProvisionedPermissionSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccountsForProvisionedPermissionSetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAccountsForProvisionedPermissionSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccountsForProvisionedPermissionSetResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAccountsForProvisionedPermissionSetResponse)
    ], ListAccountsForProvisionedPermissionSetResponse.prototype, "listAccountsForProvisionedPermissionSetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccountsForProvisionedPermissionSetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAccountsForProvisionedPermissionSetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccountsForProvisionedPermissionSetResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAccountsForProvisionedPermissionSetResponse.prototype, "validationException", void 0);
    return ListAccountsForProvisionedPermissionSetResponse;
}(SpeakeasyBase));
export { ListAccountsForProvisionedPermissionSetResponse };

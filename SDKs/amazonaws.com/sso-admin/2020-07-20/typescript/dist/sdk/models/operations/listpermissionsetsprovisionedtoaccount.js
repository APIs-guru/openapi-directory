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
var ListPermissionSetsProvisionedToAccountQueryParams = /** @class */ (function (_super) {
    __extends(ListPermissionSetsProvisionedToAccountQueryParams, _super);
    function ListPermissionSetsProvisionedToAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountQueryParams.prototype, "nextToken", void 0);
    return ListPermissionSetsProvisionedToAccountQueryParams;
}(SpeakeasyBase));
export { ListPermissionSetsProvisionedToAccountQueryParams };
export var ListPermissionSetsProvisionedToAccountXAmzTargetEnum;
(function (ListPermissionSetsProvisionedToAccountXAmzTargetEnum) {
    ListPermissionSetsProvisionedToAccountXAmzTargetEnum["SwbExternalServiceListPermissionSetsProvisionedToAccount"] = "SWBExternalService.ListPermissionSetsProvisionedToAccount";
})(ListPermissionSetsProvisionedToAccountXAmzTargetEnum || (ListPermissionSetsProvisionedToAccountXAmzTargetEnum = {}));
var ListPermissionSetsProvisionedToAccountHeaders = /** @class */ (function (_super) {
    __extends(ListPermissionSetsProvisionedToAccountHeaders, _super);
    function ListPermissionSetsProvisionedToAccountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountHeaders.prototype, "xAmzTarget", void 0);
    return ListPermissionSetsProvisionedToAccountHeaders;
}(SpeakeasyBase));
export { ListPermissionSetsProvisionedToAccountHeaders };
var ListPermissionSetsProvisionedToAccountRequest = /** @class */ (function (_super) {
    __extends(ListPermissionSetsProvisionedToAccountRequest, _super);
    function ListPermissionSetsProvisionedToAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPermissionSetsProvisionedToAccountQueryParams)
    ], ListPermissionSetsProvisionedToAccountRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPermissionSetsProvisionedToAccountHeaders)
    ], ListPermissionSetsProvisionedToAccountRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListPermissionSetsProvisionedToAccountRequest)
    ], ListPermissionSetsProvisionedToAccountRequest.prototype, "request", void 0);
    return ListPermissionSetsProvisionedToAccountRequest;
}(SpeakeasyBase));
export { ListPermissionSetsProvisionedToAccountRequest };
var ListPermissionSetsProvisionedToAccountResponse = /** @class */ (function (_super) {
    __extends(ListPermissionSetsProvisionedToAccountResponse, _super);
    function ListPermissionSetsProvisionedToAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPermissionSetsProvisionedToAccountResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPermissionSetsProvisionedToAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPermissionSetsProvisionedToAccountResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPermissionSetsProvisionedToAccountResponse)
    ], ListPermissionSetsProvisionedToAccountResponse.prototype, "listPermissionSetsProvisionedToAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPermissionSetsProvisionedToAccountResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPermissionSetsProvisionedToAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPermissionSetsProvisionedToAccountResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPermissionSetsProvisionedToAccountResponse.prototype, "validationException", void 0);
    return ListPermissionSetsProvisionedToAccountResponse;
}(SpeakeasyBase));
export { ListPermissionSetsProvisionedToAccountResponse };

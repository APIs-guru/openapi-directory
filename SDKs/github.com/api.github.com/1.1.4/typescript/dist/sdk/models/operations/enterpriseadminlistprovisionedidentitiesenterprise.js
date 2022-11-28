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
var EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams, _super);
    function EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams.prototype, "enterprise", void 0);
    return EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams };
var EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams, _super);
    function EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams.prototype, "startIndex", void 0);
    return EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams;
}(SpeakeasyBase));
export { EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams };
var EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest, _super);
    function EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams)
    ], EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams)
    ], EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest.prototype, "queryParams", void 0);
    return EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest;
}(SpeakeasyBase));
export { EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest };
var EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse, _super);
    function EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimUserListEnterprise)
    ], EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse.prototype, "scimUserListEnterprise", void 0);
    return EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse;
}(SpeakeasyBase));
export { EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse };

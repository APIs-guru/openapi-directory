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
var EnterpriseAdminListProvisionedGroupsEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListProvisionedGroupsEnterprisePathParams, _super);
    function EnterpriseAdminListProvisionedGroupsEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListProvisionedGroupsEnterprisePathParams.prototype, "enterprise", void 0);
    return EnterpriseAdminListProvisionedGroupsEnterprisePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminListProvisionedGroupsEnterprisePathParams };
var EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams, _super);
    function EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludedAttributes" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams.prototype, "excludedAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams.prototype, "startIndex", void 0);
    return EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams;
}(SpeakeasyBase));
export { EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams };
var EnterpriseAdminListProvisionedGroupsEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListProvisionedGroupsEnterpriseRequest, _super);
    function EnterpriseAdminListProvisionedGroupsEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListProvisionedGroupsEnterprisePathParams)
    ], EnterpriseAdminListProvisionedGroupsEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams)
    ], EnterpriseAdminListProvisionedGroupsEnterpriseRequest.prototype, "queryParams", void 0);
    return EnterpriseAdminListProvisionedGroupsEnterpriseRequest;
}(SpeakeasyBase));
export { EnterpriseAdminListProvisionedGroupsEnterpriseRequest };
var EnterpriseAdminListProvisionedGroupsEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListProvisionedGroupsEnterpriseResponse, _super);
    function EnterpriseAdminListProvisionedGroupsEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminListProvisionedGroupsEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminListProvisionedGroupsEnterpriseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimGroupListEnterprise)
    ], EnterpriseAdminListProvisionedGroupsEnterpriseResponse.prototype, "scimGroupListEnterprise", void 0);
    return EnterpriseAdminListProvisionedGroupsEnterpriseResponse;
}(SpeakeasyBase));
export { EnterpriseAdminListProvisionedGroupsEnterpriseResponse };

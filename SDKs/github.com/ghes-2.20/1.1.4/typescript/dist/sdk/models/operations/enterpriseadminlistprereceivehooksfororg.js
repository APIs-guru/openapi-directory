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
var EnterpriseAdminListPreReceiveHooksForOrgPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPreReceiveHooksForOrgPathParams, _super);
    function EnterpriseAdminListPreReceiveHooksForOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListPreReceiveHooksForOrgPathParams.prototype, "org", void 0);
    return EnterpriseAdminListPreReceiveHooksForOrgPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminListPreReceiveHooksForOrgPathParams };
export var EnterpriseAdminListPreReceiveHooksForOrgSortEnum;
(function (EnterpriseAdminListPreReceiveHooksForOrgSortEnum) {
    EnterpriseAdminListPreReceiveHooksForOrgSortEnum["Created"] = "created";
    EnterpriseAdminListPreReceiveHooksForOrgSortEnum["Updated"] = "updated";
    EnterpriseAdminListPreReceiveHooksForOrgSortEnum["Name"] = "name";
})(EnterpriseAdminListPreReceiveHooksForOrgSortEnum || (EnterpriseAdminListPreReceiveHooksForOrgSortEnum = {}));
var EnterpriseAdminListPreReceiveHooksForOrgQueryParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPreReceiveHooksForOrgQueryParams, _super);
    function EnterpriseAdminListPreReceiveHooksForOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListPreReceiveHooksForOrgQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListPreReceiveHooksForOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListPreReceiveHooksForOrgQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListPreReceiveHooksForOrgQueryParams.prototype, "sort", void 0);
    return EnterpriseAdminListPreReceiveHooksForOrgQueryParams;
}(SpeakeasyBase));
export { EnterpriseAdminListPreReceiveHooksForOrgQueryParams };
var EnterpriseAdminListPreReceiveHooksForOrgRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPreReceiveHooksForOrgRequest, _super);
    function EnterpriseAdminListPreReceiveHooksForOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListPreReceiveHooksForOrgPathParams)
    ], EnterpriseAdminListPreReceiveHooksForOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListPreReceiveHooksForOrgQueryParams)
    ], EnterpriseAdminListPreReceiveHooksForOrgRequest.prototype, "queryParams", void 0);
    return EnterpriseAdminListPreReceiveHooksForOrgRequest;
}(SpeakeasyBase));
export { EnterpriseAdminListPreReceiveHooksForOrgRequest };
var EnterpriseAdminListPreReceiveHooksForOrgResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPreReceiveHooksForOrgResponse, _super);
    function EnterpriseAdminListPreReceiveHooksForOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminListPreReceiveHooksForOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminListPreReceiveHooksForOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OrgPreReceiveHook }),
        __metadata("design:type", Array)
    ], EnterpriseAdminListPreReceiveHooksForOrgResponse.prototype, "orgPreReceiveHooks", void 0);
    return EnterpriseAdminListPreReceiveHooksForOrgResponse;
}(SpeakeasyBase));
export { EnterpriseAdminListPreReceiveHooksForOrgResponse };

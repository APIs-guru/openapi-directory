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
var ApigeeOrganizationsInstancesNatAddressesListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesNatAddressesListPathParams, _super);
    function ApigeeOrganizationsInstancesNatAddressesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsInstancesNatAddressesListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesNatAddressesListPathParams };
var ApigeeOrganizationsInstancesNatAddressesListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesNatAddressesListQueryParams, _super);
    function ApigeeOrganizationsInstancesNatAddressesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsInstancesNatAddressesListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesNatAddressesListQueryParams };
var ApigeeOrganizationsInstancesNatAddressesListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesNatAddressesListSecurity, _super);
    function ApigeeOrganizationsInstancesNatAddressesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsInstancesNatAddressesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsInstancesNatAddressesListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsInstancesNatAddressesListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesNatAddressesListSecurity };
var ApigeeOrganizationsInstancesNatAddressesListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesNatAddressesListRequest, _super);
    function ApigeeOrganizationsInstancesNatAddressesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesNatAddressesListPathParams)
    ], ApigeeOrganizationsInstancesNatAddressesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesNatAddressesListQueryParams)
    ], ApigeeOrganizationsInstancesNatAddressesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesNatAddressesListSecurity)
    ], ApigeeOrganizationsInstancesNatAddressesListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsInstancesNatAddressesListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesNatAddressesListRequest };
var ApigeeOrganizationsInstancesNatAddressesListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesNatAddressesListResponse, _super);
    function ApigeeOrganizationsInstancesNatAddressesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesNatAddressesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListNatAddressesResponse)
    ], ApigeeOrganizationsInstancesNatAddressesListResponse.prototype, "googleCloudApigeeV1ListNatAddressesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsInstancesNatAddressesListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsInstancesNatAddressesListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesNatAddressesListResponse };

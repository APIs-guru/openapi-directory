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
var ApigeeOrganizationsDevelopersAppsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsListPathParams, _super);
    function ApigeeOrganizationsDevelopersAppsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsDevelopersAppsListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsListPathParams };
var ApigeeOrganizationsDevelopersAppsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsListQueryParams, _super);
    function ApigeeOrganizationsDevelopersAppsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeCred" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "includeCred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyStatus" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "keyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shallowExpand" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "shallowExpand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startKey" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "startKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsDevelopersAppsListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsListQueryParams };
var ApigeeOrganizationsDevelopersAppsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsListSecurity, _super);
    function ApigeeOrganizationsDevelopersAppsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsDevelopersAppsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsDevelopersAppsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsDevelopersAppsListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsListSecurity };
var ApigeeOrganizationsDevelopersAppsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsListRequest, _super);
    function ApigeeOrganizationsDevelopersAppsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsListPathParams)
    ], ApigeeOrganizationsDevelopersAppsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsListQueryParams)
    ], ApigeeOrganizationsDevelopersAppsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsListSecurity)
    ], ApigeeOrganizationsDevelopersAppsListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsDevelopersAppsListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsListRequest };
var ApigeeOrganizationsDevelopersAppsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsListResponse, _super);
    function ApigeeOrganizationsDevelopersAppsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListDeveloperAppsResponse)
    ], ApigeeOrganizationsDevelopersAppsListResponse.prototype, "googleCloudApigeeV1ListDeveloperAppsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsDevelopersAppsListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsDevelopersAppsListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsListResponse };

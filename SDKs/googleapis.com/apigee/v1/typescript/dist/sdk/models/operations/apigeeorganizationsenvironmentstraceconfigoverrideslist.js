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
var ApigeeOrganizationsEnvironmentsTraceConfigOverridesListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsTraceConfigOverridesListPathParams, _super);
    function ApigeeOrganizationsEnvironmentsTraceConfigOverridesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsTraceConfigOverridesListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsTraceConfigOverridesListPathParams };
var ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams };
var ApigeeOrganizationsEnvironmentsTraceConfigOverridesListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsTraceConfigOverridesListSecurity, _super);
    function ApigeeOrganizationsEnvironmentsTraceConfigOverridesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsTraceConfigOverridesListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsTraceConfigOverridesListSecurity };
var ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest, _super);
    function ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsTraceConfigOverridesListPathParams)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsTraceConfigOverridesListSecurity)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest };
var ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse, _super);
    function ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListTraceConfigOverridesResponse)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse.prototype, "googleCloudApigeeV1ListTraceConfigOverridesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse };

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
var ApigeeOrganizationsHostQueriesCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostQueriesCreatePathParams, _super);
    function ApigeeOrganizationsHostQueriesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsHostQueriesCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostQueriesCreatePathParams };
var ApigeeOrganizationsHostQueriesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostQueriesCreateQueryParams, _super);
    function ApigeeOrganizationsHostQueriesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsHostQueriesCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostQueriesCreateQueryParams };
var ApigeeOrganizationsHostQueriesCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostQueriesCreateSecurity, _super);
    function ApigeeOrganizationsHostQueriesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsHostQueriesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsHostQueriesCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsHostQueriesCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostQueriesCreateSecurity };
var ApigeeOrganizationsHostQueriesCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostQueriesCreateRequest, _super);
    function ApigeeOrganizationsHostQueriesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsHostQueriesCreatePathParams)
    ], ApigeeOrganizationsHostQueriesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsHostQueriesCreateQueryParams)
    ], ApigeeOrganizationsHostQueriesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1Query)
    ], ApigeeOrganizationsHostQueriesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsHostQueriesCreateSecurity)
    ], ApigeeOrganizationsHostQueriesCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsHostQueriesCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostQueriesCreateRequest };
var ApigeeOrganizationsHostQueriesCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostQueriesCreateResponse, _super);
    function ApigeeOrganizationsHostQueriesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1AsyncQuery)
    ], ApigeeOrganizationsHostQueriesCreateResponse.prototype, "googleCloudApigeeV1AsyncQuery", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsHostQueriesCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsHostQueriesCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostQueriesCreateResponse };

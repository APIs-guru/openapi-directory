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
var ApigeeOrganizationsEnvironmentsKeystoresCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresCreatePathParams, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresCreatePathParams };
var ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams };
var ApigeeOrganizationsEnvironmentsKeystoresCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresCreateSecurity, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresCreateSecurity };
var ApigeeOrganizationsEnvironmentsKeystoresCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresCreateRequest, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresCreatePathParams)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresCreateQueryParams)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1KeystoreInput)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresCreateSecurity)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresCreateRequest };
var ApigeeOrganizationsEnvironmentsKeystoresCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresCreateResponse, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1Keystore)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateResponse.prototype, "googleCloudApigeeV1Keystore", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsKeystoresCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresCreateResponse };

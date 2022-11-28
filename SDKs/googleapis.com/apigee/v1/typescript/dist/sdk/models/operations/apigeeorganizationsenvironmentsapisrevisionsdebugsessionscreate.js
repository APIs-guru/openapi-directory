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
var ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams };
var ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams };
var ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity };
var ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1DebugSessionInput)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest };
var ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1DebugSession)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse.prototype, "googleCloudApigeeV1DebugSession", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse };

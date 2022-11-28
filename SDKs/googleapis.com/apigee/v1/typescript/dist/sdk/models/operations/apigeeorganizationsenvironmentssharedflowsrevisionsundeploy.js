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
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sequencedRollout" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "sequencedRollout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse };

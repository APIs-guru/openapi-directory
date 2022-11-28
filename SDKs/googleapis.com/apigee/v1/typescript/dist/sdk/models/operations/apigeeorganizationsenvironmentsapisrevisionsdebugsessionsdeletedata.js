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
var ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataPathParams, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataPathParams };
var ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams };
var ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataSecurity, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataSecurity };
var ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataPathParams)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataQueryParams)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataSecurity)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest };
var ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse };

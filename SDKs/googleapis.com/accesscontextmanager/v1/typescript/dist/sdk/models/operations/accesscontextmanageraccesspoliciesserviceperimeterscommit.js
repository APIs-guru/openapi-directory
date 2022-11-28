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
var AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams.prototype, "parent", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams };
var AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams };
var AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity };
var AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CommitServicePerimetersRequest)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest.prototype, "security", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest };
var AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse };

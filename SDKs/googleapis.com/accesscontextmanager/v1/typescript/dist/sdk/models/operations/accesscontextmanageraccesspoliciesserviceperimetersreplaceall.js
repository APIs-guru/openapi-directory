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
var AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams.prototype, "parent", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams };
var AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams };
var AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity };
var AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReplaceServicePerimetersRequest)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest.prototype, "security", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest };
var AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse };

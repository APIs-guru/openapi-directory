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
var AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams, _super);
    function AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams.prototype, "parent", void 0);
    return AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams };
var AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams, _super);
    function AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams };
var AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity, _super);
    function AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity };
var AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest, _super);
    function AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReplaceAccessLevelsRequest)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest.prototype, "security", void 0);
    return AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest };
var AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse, _super);
    function AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse };

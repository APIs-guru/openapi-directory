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
var DirectoryResourcesFeaturesListPathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesListPathParams, _super);
    function DirectoryResourcesFeaturesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListPathParams.prototype, "customer", void 0);
    return DirectoryResourcesFeaturesListPathParams;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesListPathParams };
var DirectoryResourcesFeaturesListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesListQueryParams, _super);
    function DirectoryResourcesFeaturesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesFeaturesListQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesListQueryParams };
var DirectoryResourcesFeaturesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesListSecurityOption1, _super);
    function DirectoryResourcesFeaturesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesFeaturesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesFeaturesListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryResourcesFeaturesListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesListSecurityOption1 };
var DirectoryResourcesFeaturesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesListSecurityOption2, _super);
    function DirectoryResourcesFeaturesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesFeaturesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesFeaturesListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryResourcesFeaturesListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesListSecurityOption2 };
var DirectoryResourcesFeaturesListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesListSecurity, _super);
    function DirectoryResourcesFeaturesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesFeaturesListSecurityOption1)
    ], DirectoryResourcesFeaturesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesFeaturesListSecurityOption2)
    ], DirectoryResourcesFeaturesListSecurity.prototype, "option2", void 0);
    return DirectoryResourcesFeaturesListSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesListSecurity };
var DirectoryResourcesFeaturesListRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesListRequest, _super);
    function DirectoryResourcesFeaturesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesListPathParams)
    ], DirectoryResourcesFeaturesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesListQueryParams)
    ], DirectoryResourcesFeaturesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesListSecurity)
    ], DirectoryResourcesFeaturesListRequest.prototype, "security", void 0);
    return DirectoryResourcesFeaturesListRequest;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesListRequest };
var DirectoryResourcesFeaturesListResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesListResponse, _super);
    function DirectoryResourcesFeaturesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Features)
    ], DirectoryResourcesFeaturesListResponse.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesFeaturesListResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesFeaturesListResponse;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesListResponse };

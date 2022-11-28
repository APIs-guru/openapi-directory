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
var DirectorySchemasListPathParams = /** @class */ (function (_super) {
    __extends(DirectorySchemasListPathParams, _super);
    function DirectorySchemasListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectorySchemasListPathParams.prototype, "customerId", void 0);
    return DirectorySchemasListPathParams;
}(SpeakeasyBase));
export { DirectorySchemasListPathParams };
var DirectorySchemasListQueryParams = /** @class */ (function (_super) {
    __extends(DirectorySchemasListQueryParams, _super);
    function DirectorySchemasListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectorySchemasListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectorySchemasListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectorySchemasListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectorySchemasListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectorySchemasListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectorySchemasListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectorySchemasListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectorySchemasListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectorySchemasListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectorySchemasListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectorySchemasListQueryParams.prototype, "uploadProtocol", void 0);
    return DirectorySchemasListQueryParams;
}(SpeakeasyBase));
export { DirectorySchemasListQueryParams };
var DirectorySchemasListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectorySchemasListSecurityOption1, _super);
    function DirectorySchemasListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectorySchemasListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectorySchemasListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectorySchemasListSecurityOption1;
}(SpeakeasyBase));
export { DirectorySchemasListSecurityOption1 };
var DirectorySchemasListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectorySchemasListSecurityOption2, _super);
    function DirectorySchemasListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectorySchemasListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectorySchemasListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectorySchemasListSecurityOption2;
}(SpeakeasyBase));
export { DirectorySchemasListSecurityOption2 };
var DirectorySchemasListSecurity = /** @class */ (function (_super) {
    __extends(DirectorySchemasListSecurity, _super);
    function DirectorySchemasListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectorySchemasListSecurityOption1)
    ], DirectorySchemasListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectorySchemasListSecurityOption2)
    ], DirectorySchemasListSecurity.prototype, "option2", void 0);
    return DirectorySchemasListSecurity;
}(SpeakeasyBase));
export { DirectorySchemasListSecurity };
var DirectorySchemasListRequest = /** @class */ (function (_super) {
    __extends(DirectorySchemasListRequest, _super);
    function DirectorySchemasListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectorySchemasListPathParams)
    ], DirectorySchemasListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectorySchemasListQueryParams)
    ], DirectorySchemasListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectorySchemasListSecurity)
    ], DirectorySchemasListRequest.prototype, "security", void 0);
    return DirectorySchemasListRequest;
}(SpeakeasyBase));
export { DirectorySchemasListRequest };
var DirectorySchemasListResponse = /** @class */ (function (_super) {
    __extends(DirectorySchemasListResponse, _super);
    function DirectorySchemasListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectorySchemasListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Schemas)
    ], DirectorySchemasListResponse.prototype, "schemas", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectorySchemasListResponse.prototype, "statusCode", void 0);
    return DirectorySchemasListResponse;
}(SpeakeasyBase));
export { DirectorySchemasListResponse };

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
var BigqueryProjectsListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryProjectsListQueryParams, _super);
    function BigqueryProjectsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryProjectsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryProjectsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryProjectsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BigqueryProjectsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryProjectsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryProjectsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryProjectsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryProjectsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryProjectsListQueryParams.prototype, "userIp", void 0);
    return BigqueryProjectsListQueryParams;
}(SpeakeasyBase));
export { BigqueryProjectsListQueryParams };
var BigqueryProjectsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryProjectsListSecurityOption1, _super);
    function BigqueryProjectsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryProjectsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryProjectsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryProjectsListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryProjectsListSecurityOption1 };
var BigqueryProjectsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryProjectsListSecurityOption2, _super);
    function BigqueryProjectsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryProjectsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryProjectsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryProjectsListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryProjectsListSecurityOption2 };
var BigqueryProjectsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryProjectsListSecurityOption3, _super);
    function BigqueryProjectsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryProjectsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryProjectsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryProjectsListSecurityOption3;
}(SpeakeasyBase));
export { BigqueryProjectsListSecurityOption3 };
var BigqueryProjectsListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryProjectsListSecurity, _super);
    function BigqueryProjectsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryProjectsListSecurityOption1)
    ], BigqueryProjectsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryProjectsListSecurityOption2)
    ], BigqueryProjectsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryProjectsListSecurityOption3)
    ], BigqueryProjectsListSecurity.prototype, "option3", void 0);
    return BigqueryProjectsListSecurity;
}(SpeakeasyBase));
export { BigqueryProjectsListSecurity };
var BigqueryProjectsListRequest = /** @class */ (function (_super) {
    __extends(BigqueryProjectsListRequest, _super);
    function BigqueryProjectsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryProjectsListQueryParams)
    ], BigqueryProjectsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryProjectsListSecurity)
    ], BigqueryProjectsListRequest.prototype, "security", void 0);
    return BigqueryProjectsListRequest;
}(SpeakeasyBase));
export { BigqueryProjectsListRequest };
var BigqueryProjectsListResponse = /** @class */ (function (_super) {
    __extends(BigqueryProjectsListResponse, _super);
    function BigqueryProjectsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryProjectsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProjectList)
    ], BigqueryProjectsListResponse.prototype, "projectList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryProjectsListResponse.prototype, "statusCode", void 0);
    return BigqueryProjectsListResponse;
}(SpeakeasyBase));
export { BigqueryProjectsListResponse };

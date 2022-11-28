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
var DirectoryUsersAliasesWatchPathParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesWatchPathParams, _super);
    function DirectoryUsersAliasesWatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userKey" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchPathParams.prototype, "userKey", void 0);
    return DirectoryUsersAliasesWatchPathParams;
}(SpeakeasyBase));
export { DirectoryUsersAliasesWatchPathParams };
export var DirectoryUsersAliasesWatchEventEnum;
(function (DirectoryUsersAliasesWatchEventEnum) {
    DirectoryUsersAliasesWatchEventEnum["Add"] = "add";
    DirectoryUsersAliasesWatchEventEnum["Delete"] = "delete";
})(DirectoryUsersAliasesWatchEventEnum || (DirectoryUsersAliasesWatchEventEnum = {}));
var DirectoryUsersAliasesWatchQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesWatchQueryParams, _super);
    function DirectoryUsersAliasesWatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryUsersAliasesWatchQueryParams;
}(SpeakeasyBase));
export { DirectoryUsersAliasesWatchQueryParams };
var DirectoryUsersAliasesWatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesWatchSecurityOption1, _super);
    function DirectoryUsersAliasesWatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesWatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesWatchSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesWatchSecurityOption1;
}(SpeakeasyBase));
export { DirectoryUsersAliasesWatchSecurityOption1 };
var DirectoryUsersAliasesWatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesWatchSecurityOption2, _super);
    function DirectoryUsersAliasesWatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesWatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesWatchSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesWatchSecurityOption2;
}(SpeakeasyBase));
export { DirectoryUsersAliasesWatchSecurityOption2 };
var DirectoryUsersAliasesWatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesWatchSecurityOption3, _super);
    function DirectoryUsersAliasesWatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesWatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesWatchSecurityOption3.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesWatchSecurityOption3;
}(SpeakeasyBase));
export { DirectoryUsersAliasesWatchSecurityOption3 };
var DirectoryUsersAliasesWatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesWatchSecurityOption4, _super);
    function DirectoryUsersAliasesWatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesWatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesWatchSecurityOption4.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesWatchSecurityOption4;
}(SpeakeasyBase));
export { DirectoryUsersAliasesWatchSecurityOption4 };
var DirectoryUsersAliasesWatchSecurity = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesWatchSecurity, _super);
    function DirectoryUsersAliasesWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesWatchSecurityOption1)
    ], DirectoryUsersAliasesWatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesWatchSecurityOption2)
    ], DirectoryUsersAliasesWatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesWatchSecurityOption3)
    ], DirectoryUsersAliasesWatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesWatchSecurityOption4)
    ], DirectoryUsersAliasesWatchSecurity.prototype, "option4", void 0);
    return DirectoryUsersAliasesWatchSecurity;
}(SpeakeasyBase));
export { DirectoryUsersAliasesWatchSecurity };
var DirectoryUsersAliasesWatchRequest = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesWatchRequest, _super);
    function DirectoryUsersAliasesWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesWatchPathParams)
    ], DirectoryUsersAliasesWatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesWatchQueryParams)
    ], DirectoryUsersAliasesWatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], DirectoryUsersAliasesWatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesWatchSecurity)
    ], DirectoryUsersAliasesWatchRequest.prototype, "security", void 0);
    return DirectoryUsersAliasesWatchRequest;
}(SpeakeasyBase));
export { DirectoryUsersAliasesWatchRequest };
var DirectoryUsersAliasesWatchResponse = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesWatchResponse, _super);
    function DirectoryUsersAliasesWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Channel)
    ], DirectoryUsersAliasesWatchResponse.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryUsersAliasesWatchResponse.prototype, "statusCode", void 0);
    return DirectoryUsersAliasesWatchResponse;
}(SpeakeasyBase));
export { DirectoryUsersAliasesWatchResponse };

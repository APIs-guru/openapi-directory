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
var AdminChannelsStopQueryParams = /** @class */ (function (_super) {
    __extends(AdminChannelsStopQueryParams, _super);
    function AdminChannelsStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdminChannelsStopQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdminChannelsStopQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdminChannelsStopQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdminChannelsStopQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdminChannelsStopQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdminChannelsStopQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdminChannelsStopQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdminChannelsStopQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdminChannelsStopQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdminChannelsStopQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdminChannelsStopQueryParams.prototype, "uploadProtocol", void 0);
    return AdminChannelsStopQueryParams;
}(SpeakeasyBase));
export { AdminChannelsStopQueryParams };
var AdminChannelsStopSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdminChannelsStopSecurityOption1, _super);
    function AdminChannelsStopSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminChannelsStopSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminChannelsStopSecurityOption1.prototype, "oauth2c", void 0);
    return AdminChannelsStopSecurityOption1;
}(SpeakeasyBase));
export { AdminChannelsStopSecurityOption1 };
var AdminChannelsStopSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdminChannelsStopSecurityOption2, _super);
    function AdminChannelsStopSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminChannelsStopSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminChannelsStopSecurityOption2.prototype, "oauth2c", void 0);
    return AdminChannelsStopSecurityOption2;
}(SpeakeasyBase));
export { AdminChannelsStopSecurityOption2 };
var AdminChannelsStopSecurityOption3 = /** @class */ (function (_super) {
    __extends(AdminChannelsStopSecurityOption3, _super);
    function AdminChannelsStopSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminChannelsStopSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminChannelsStopSecurityOption3.prototype, "oauth2c", void 0);
    return AdminChannelsStopSecurityOption3;
}(SpeakeasyBase));
export { AdminChannelsStopSecurityOption3 };
var AdminChannelsStopSecurityOption4 = /** @class */ (function (_super) {
    __extends(AdminChannelsStopSecurityOption4, _super);
    function AdminChannelsStopSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminChannelsStopSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminChannelsStopSecurityOption4.prototype, "oauth2c", void 0);
    return AdminChannelsStopSecurityOption4;
}(SpeakeasyBase));
export { AdminChannelsStopSecurityOption4 };
var AdminChannelsStopSecurityOption5 = /** @class */ (function (_super) {
    __extends(AdminChannelsStopSecurityOption5, _super);
    function AdminChannelsStopSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminChannelsStopSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminChannelsStopSecurityOption5.prototype, "oauth2c", void 0);
    return AdminChannelsStopSecurityOption5;
}(SpeakeasyBase));
export { AdminChannelsStopSecurityOption5 };
var AdminChannelsStopSecurity = /** @class */ (function (_super) {
    __extends(AdminChannelsStopSecurity, _super);
    function AdminChannelsStopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminChannelsStopSecurityOption1)
    ], AdminChannelsStopSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminChannelsStopSecurityOption2)
    ], AdminChannelsStopSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminChannelsStopSecurityOption3)
    ], AdminChannelsStopSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminChannelsStopSecurityOption4)
    ], AdminChannelsStopSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminChannelsStopSecurityOption5)
    ], AdminChannelsStopSecurity.prototype, "option5", void 0);
    return AdminChannelsStopSecurity;
}(SpeakeasyBase));
export { AdminChannelsStopSecurity };
var AdminChannelsStopRequest = /** @class */ (function (_super) {
    __extends(AdminChannelsStopRequest, _super);
    function AdminChannelsStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminChannelsStopQueryParams)
    ], AdminChannelsStopRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], AdminChannelsStopRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminChannelsStopSecurity)
    ], AdminChannelsStopRequest.prototype, "security", void 0);
    return AdminChannelsStopRequest;
}(SpeakeasyBase));
export { AdminChannelsStopRequest };
var AdminChannelsStopResponse = /** @class */ (function (_super) {
    __extends(AdminChannelsStopResponse, _super);
    function AdminChannelsStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminChannelsStopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminChannelsStopResponse.prototype, "statusCode", void 0);
    return AdminChannelsStopResponse;
}(SpeakeasyBase));
export { AdminChannelsStopResponse };

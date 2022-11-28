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
var BigtableadminProjectsInstancesListPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListPathParams, _super);
    function BigtableadminProjectsInstancesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListPathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesListPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListPathParams };
var BigtableadminProjectsInstancesListQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListQueryParams, _super);
    function BigtableadminProjectsInstancesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesListQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListQueryParams };
var BigtableadminProjectsInstancesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListSecurityOption1, _super);
    function BigtableadminProjectsInstancesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesListSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesListSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListSecurityOption1 };
var BigtableadminProjectsInstancesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListSecurityOption2, _super);
    function BigtableadminProjectsInstancesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesListSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesListSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListSecurityOption2 };
var BigtableadminProjectsInstancesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListSecurityOption3, _super);
    function BigtableadminProjectsInstancesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesListSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesListSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListSecurityOption3 };
var BigtableadminProjectsInstancesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListSecurityOption4, _super);
    function BigtableadminProjectsInstancesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesListSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesListSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListSecurityOption4 };
var BigtableadminProjectsInstancesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListSecurityOption5, _super);
    function BigtableadminProjectsInstancesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesListSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesListSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListSecurityOption5 };
var BigtableadminProjectsInstancesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListSecurityOption6, _super);
    function BigtableadminProjectsInstancesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesListSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesListSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListSecurityOption6 };
var BigtableadminProjectsInstancesListSecurityOption7 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListSecurityOption7, _super);
    function BigtableadminProjectsInstancesListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesListSecurityOption7.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesListSecurityOption7;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListSecurityOption7 };
var BigtableadminProjectsInstancesListSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListSecurity, _super);
    function BigtableadminProjectsInstancesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesListSecurityOption1)
    ], BigtableadminProjectsInstancesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesListSecurityOption2)
    ], BigtableadminProjectsInstancesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesListSecurityOption3)
    ], BigtableadminProjectsInstancesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesListSecurityOption4)
    ], BigtableadminProjectsInstancesListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesListSecurityOption5)
    ], BigtableadminProjectsInstancesListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesListSecurityOption6)
    ], BigtableadminProjectsInstancesListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesListSecurityOption7)
    ], BigtableadminProjectsInstancesListSecurity.prototype, "option7", void 0);
    return BigtableadminProjectsInstancesListSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListSecurity };
var BigtableadminProjectsInstancesListRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListRequest, _super);
    function BigtableadminProjectsInstancesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesListPathParams)
    ], BigtableadminProjectsInstancesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesListQueryParams)
    ], BigtableadminProjectsInstancesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesListSecurity)
    ], BigtableadminProjectsInstancesListRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesListRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListRequest };
var BigtableadminProjectsInstancesListResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesListResponse, _super);
    function BigtableadminProjectsInstancesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListInstancesResponse)
    ], BigtableadminProjectsInstancesListResponse.prototype, "listInstancesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesListResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesListResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesListResponse };

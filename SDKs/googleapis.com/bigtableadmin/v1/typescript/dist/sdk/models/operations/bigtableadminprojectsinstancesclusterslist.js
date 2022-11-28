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
var BigtableadminProjectsInstancesClustersListPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListPathParams, _super);
    function BigtableadminProjectsInstancesClustersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListPathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesClustersListPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListPathParams };
var BigtableadminProjectsInstancesClustersListQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListQueryParams, _super);
    function BigtableadminProjectsInstancesClustersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesClustersListQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListQueryParams };
var BigtableadminProjectsInstancesClustersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListSecurityOption1, _super);
    function BigtableadminProjectsInstancesClustersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersListSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersListSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListSecurityOption1 };
var BigtableadminProjectsInstancesClustersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListSecurityOption2, _super);
    function BigtableadminProjectsInstancesClustersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersListSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersListSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListSecurityOption2 };
var BigtableadminProjectsInstancesClustersListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListSecurityOption3, _super);
    function BigtableadminProjectsInstancesClustersListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersListSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersListSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListSecurityOption3 };
var BigtableadminProjectsInstancesClustersListSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListSecurityOption4, _super);
    function BigtableadminProjectsInstancesClustersListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersListSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersListSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListSecurityOption4 };
var BigtableadminProjectsInstancesClustersListSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListSecurityOption5, _super);
    function BigtableadminProjectsInstancesClustersListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersListSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersListSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListSecurityOption5 };
var BigtableadminProjectsInstancesClustersListSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListSecurityOption6, _super);
    function BigtableadminProjectsInstancesClustersListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersListSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersListSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListSecurityOption6 };
var BigtableadminProjectsInstancesClustersListSecurityOption7 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListSecurityOption7, _super);
    function BigtableadminProjectsInstancesClustersListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersListSecurityOption7.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersListSecurityOption7;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListSecurityOption7 };
var BigtableadminProjectsInstancesClustersListSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListSecurity, _super);
    function BigtableadminProjectsInstancesClustersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersListSecurityOption1)
    ], BigtableadminProjectsInstancesClustersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersListSecurityOption2)
    ], BigtableadminProjectsInstancesClustersListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersListSecurityOption3)
    ], BigtableadminProjectsInstancesClustersListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersListSecurityOption4)
    ], BigtableadminProjectsInstancesClustersListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersListSecurityOption5)
    ], BigtableadminProjectsInstancesClustersListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersListSecurityOption6)
    ], BigtableadminProjectsInstancesClustersListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersListSecurityOption7)
    ], BigtableadminProjectsInstancesClustersListSecurity.prototype, "option7", void 0);
    return BigtableadminProjectsInstancesClustersListSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListSecurity };
var BigtableadminProjectsInstancesClustersListRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListRequest, _super);
    function BigtableadminProjectsInstancesClustersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersListPathParams)
    ], BigtableadminProjectsInstancesClustersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersListQueryParams)
    ], BigtableadminProjectsInstancesClustersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersListSecurity)
    ], BigtableadminProjectsInstancesClustersListRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesClustersListRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListRequest };
var BigtableadminProjectsInstancesClustersListResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersListResponse, _super);
    function BigtableadminProjectsInstancesClustersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListClustersResponse)
    ], BigtableadminProjectsInstancesClustersListResponse.prototype, "listClustersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesClustersListResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesClustersListResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersListResponse };

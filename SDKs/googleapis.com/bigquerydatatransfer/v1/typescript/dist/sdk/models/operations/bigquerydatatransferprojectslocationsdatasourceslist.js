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
var BigquerydatatransferProjectsLocationsDataSourcesListPathParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesListPathParams, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListPathParams.prototype, "parent", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesListPathParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesListPathParams };
var BigquerydatatransferProjectsLocationsDataSourcesListQueryParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesListQueryParams, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListQueryParams.prototype, "uploadProtocol", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesListQueryParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesListQueryParams };
var BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1 };
var BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2 };
var BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3 };
var BigquerydatatransferProjectsLocationsDataSourcesListSecurity = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesListSecurity, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1)
    ], BigquerydatatransferProjectsLocationsDataSourcesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2)
    ], BigquerydatatransferProjectsLocationsDataSourcesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3)
    ], BigquerydatatransferProjectsLocationsDataSourcesListSecurity.prototype, "option3", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesListSecurity;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesListSecurity };
var BigquerydatatransferProjectsLocationsDataSourcesListRequest = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesListRequest, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesListPathParams)
    ], BigquerydatatransferProjectsLocationsDataSourcesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesListQueryParams)
    ], BigquerydatatransferProjectsLocationsDataSourcesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesListSecurity)
    ], BigquerydatatransferProjectsLocationsDataSourcesListRequest.prototype, "security", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesListRequest;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesListRequest };
var BigquerydatatransferProjectsLocationsDataSourcesListResponse = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesListResponse, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDataSourcesResponse)
    ], BigquerydatatransferProjectsLocationsDataSourcesListResponse.prototype, "listDataSourcesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsLocationsDataSourcesListResponse.prototype, "statusCode", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesListResponse;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesListResponse };

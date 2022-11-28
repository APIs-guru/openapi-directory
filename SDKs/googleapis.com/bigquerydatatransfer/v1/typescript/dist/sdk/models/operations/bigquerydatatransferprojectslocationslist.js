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
var BigquerydatatransferProjectsLocationsListPathParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsListPathParams, _super);
    function BigquerydatatransferProjectsLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListPathParams.prototype, "name", void 0);
    return BigquerydatatransferProjectsLocationsListPathParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsListPathParams };
var BigquerydatatransferProjectsLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsListQueryParams, _super);
    function BigquerydatatransferProjectsLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigquerydatatransferProjectsLocationsListQueryParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsListQueryParams };
var BigquerydatatransferProjectsLocationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsListSecurityOption1, _super);
    function BigquerydatatransferProjectsLocationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsLocationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsLocationsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsLocationsListSecurityOption1;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsListSecurityOption1 };
var BigquerydatatransferProjectsLocationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsListSecurityOption2, _super);
    function BigquerydatatransferProjectsLocationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsLocationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsLocationsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsLocationsListSecurityOption2;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsListSecurityOption2 };
var BigquerydatatransferProjectsLocationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsListSecurityOption3, _super);
    function BigquerydatatransferProjectsLocationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsLocationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsLocationsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsLocationsListSecurityOption3;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsListSecurityOption3 };
var BigquerydatatransferProjectsLocationsListSecurity = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsListSecurity, _super);
    function BigquerydatatransferProjectsLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsLocationsListSecurityOption1)
    ], BigquerydatatransferProjectsLocationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsLocationsListSecurityOption2)
    ], BigquerydatatransferProjectsLocationsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsLocationsListSecurityOption3)
    ], BigquerydatatransferProjectsLocationsListSecurity.prototype, "option3", void 0);
    return BigquerydatatransferProjectsLocationsListSecurity;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsListSecurity };
var BigquerydatatransferProjectsLocationsListRequest = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsListRequest, _super);
    function BigquerydatatransferProjectsLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsLocationsListPathParams)
    ], BigquerydatatransferProjectsLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsLocationsListQueryParams)
    ], BigquerydatatransferProjectsLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsLocationsListSecurity)
    ], BigquerydatatransferProjectsLocationsListRequest.prototype, "security", void 0);
    return BigquerydatatransferProjectsLocationsListRequest;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsListRequest };
var BigquerydatatransferProjectsLocationsListResponse = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsListResponse, _super);
    function BigquerydatatransferProjectsLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLocationsResponse)
    ], BigquerydatatransferProjectsLocationsListResponse.prototype, "listLocationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsLocationsListResponse.prototype, "statusCode", void 0);
    return BigquerydatatransferProjectsLocationsListResponse;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsListResponse };

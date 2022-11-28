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
var BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams.prototype, "name", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams };
var BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams.prototype, "uploadProtocol", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams };
var BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1 };
var BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2 };
var BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3 };
var BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity.prototype, "option3", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity };
var BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest.prototype, "security", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest };
var BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse, _super);
    function BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckValidCredsResponse)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse.prototype, "checkValidCredsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse.prototype, "statusCode", void 0);
    return BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse };

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
var BigquerydatatransferProjectsTransferConfigsRunsGetPathParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsGetPathParams, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetPathParams.prototype, "name", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsGetPathParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsGetPathParams };
var BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams.prototype, "uploadProtocol", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams };
var BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1 };
var BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2 };
var BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3 };
var BigquerydatatransferProjectsTransferConfigsRunsGetSecurity = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsGetSecurity, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetSecurity.prototype, "option3", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsGetSecurity;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsGetSecurity };
var BigquerydatatransferProjectsTransferConfigsRunsGetRequest = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsGetRequest, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsGetPathParams)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsGetSecurity)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetRequest.prototype, "security", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsGetRequest;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsGetRequest };
var BigquerydatatransferProjectsTransferConfigsRunsGetResponse = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsGetResponse, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TransferRun)
    ], BigquerydatatransferProjectsTransferConfigsRunsGetResponse.prototype, "transferRun", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsGetResponse;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsGetResponse };

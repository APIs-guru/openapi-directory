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
var BigquerydatatransferProjectsTransferConfigsListPathParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsListPathParams, _super);
    function BigquerydatatransferProjectsTransferConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListPathParams.prototype, "parent", void 0);
    return BigquerydatatransferProjectsTransferConfigsListPathParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsListPathParams };
var BigquerydatatransferProjectsTransferConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsListQueryParams, _super);
    function BigquerydatatransferProjectsTransferConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataSourceIds" }),
        __metadata("design:type", Array)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "dataSourceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigquerydatatransferProjectsTransferConfigsListQueryParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsListQueryParams };
var BigquerydatatransferProjectsTransferConfigsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsListSecurityOption1, _super);
    function BigquerydatatransferProjectsTransferConfigsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsListSecurityOption1;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsListSecurityOption1 };
var BigquerydatatransferProjectsTransferConfigsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsListSecurityOption2, _super);
    function BigquerydatatransferProjectsTransferConfigsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsListSecurityOption2;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsListSecurityOption2 };
var BigquerydatatransferProjectsTransferConfigsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsListSecurityOption3, _super);
    function BigquerydatatransferProjectsTransferConfigsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsListSecurityOption3;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsListSecurityOption3 };
var BigquerydatatransferProjectsTransferConfigsListSecurity = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsListSecurity, _super);
    function BigquerydatatransferProjectsTransferConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsListSecurityOption1)
    ], BigquerydatatransferProjectsTransferConfigsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsListSecurityOption2)
    ], BigquerydatatransferProjectsTransferConfigsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsListSecurityOption3)
    ], BigquerydatatransferProjectsTransferConfigsListSecurity.prototype, "option3", void 0);
    return BigquerydatatransferProjectsTransferConfigsListSecurity;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsListSecurity };
var BigquerydatatransferProjectsTransferConfigsListRequest = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsListRequest, _super);
    function BigquerydatatransferProjectsTransferConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsListPathParams)
    ], BigquerydatatransferProjectsTransferConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsListQueryParams)
    ], BigquerydatatransferProjectsTransferConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsListSecurity)
    ], BigquerydatatransferProjectsTransferConfigsListRequest.prototype, "security", void 0);
    return BigquerydatatransferProjectsTransferConfigsListRequest;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsListRequest };
var BigquerydatatransferProjectsTransferConfigsListResponse = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsListResponse, _super);
    function BigquerydatatransferProjectsTransferConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTransferConfigsResponse)
    ], BigquerydatatransferProjectsTransferConfigsListResponse.prototype, "listTransferConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsTransferConfigsListResponse.prototype, "statusCode", void 0);
    return BigquerydatatransferProjectsTransferConfigsListResponse;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsListResponse };

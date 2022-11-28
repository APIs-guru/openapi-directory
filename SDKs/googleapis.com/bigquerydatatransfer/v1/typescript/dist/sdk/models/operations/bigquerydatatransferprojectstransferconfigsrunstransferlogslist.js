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
var BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams.prototype, "parent", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams };
export var BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum;
(function (BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum) {
    BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum["MessageSeverityUnspecified"] = "MESSAGE_SEVERITY_UNSPECIFIED";
    BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum["Info"] = "INFO";
    BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum["Warning"] = "WARNING";
    BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum["Error"] = "ERROR";
})(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum || (BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum = {}));
var BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=messageTypes" }),
        __metadata("design:type", Array)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "messageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams };
var BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1 };
var BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2 };
var BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3 };
var BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity.prototype, "option3", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity };
var BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest.prototype, "security", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest };
var BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTransferLogsResponse)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse.prototype, "listTransferLogsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse.prototype, "statusCode", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse };

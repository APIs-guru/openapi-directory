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
var BigquerydatatransferProjectsTransferConfigsRunsListPathParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsListPathParams, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListPathParams.prototype, "parent", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsListPathParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsListPathParams };
export var BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum;
(function (BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum) {
    BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum["RunAttemptUnspecified"] = "RUN_ATTEMPT_UNSPECIFIED";
    BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum["Latest"] = "LATEST";
})(BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum || (BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum = {}));
export var BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum;
(function (BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum) {
    BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum["TransferStateUnspecified"] = "TRANSFER_STATE_UNSPECIFIED";
    BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum["Pending"] = "PENDING";
    BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum["Running"] = "RUNNING";
    BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum["Succeeded"] = "SUCCEEDED";
    BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum["Failed"] = "FAILED";
    BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum["Cancelled"] = "CANCELLED";
})(BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum || (BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum = {}));
var BigquerydatatransferProjectsTransferConfigsRunsListQueryParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsListQueryParams, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=runAttempt" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "runAttempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" }),
        __metadata("design:type", Array)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "states", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsListQueryParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsListQueryParams };
var BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1 };
var BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2 };
var BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3 };
var BigquerydatatransferProjectsTransferConfigsRunsListSecurity = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsListSecurity, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1)
    ], BigquerydatatransferProjectsTransferConfigsRunsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2)
    ], BigquerydatatransferProjectsTransferConfigsRunsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3)
    ], BigquerydatatransferProjectsTransferConfigsRunsListSecurity.prototype, "option3", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsListSecurity;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsListSecurity };
var BigquerydatatransferProjectsTransferConfigsRunsListRequest = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsListRequest, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsListPathParams)
    ], BigquerydatatransferProjectsTransferConfigsRunsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsListQueryParams)
    ], BigquerydatatransferProjectsTransferConfigsRunsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsRunsListSecurity)
    ], BigquerydatatransferProjectsTransferConfigsRunsListRequest.prototype, "security", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsListRequest;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsListRequest };
var BigquerydatatransferProjectsTransferConfigsRunsListResponse = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsRunsListResponse, _super);
    function BigquerydatatransferProjectsTransferConfigsRunsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsRunsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTransferRunsResponse)
    ], BigquerydatatransferProjectsTransferConfigsRunsListResponse.prototype, "listTransferRunsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsTransferConfigsRunsListResponse.prototype, "statusCode", void 0);
    return BigquerydatatransferProjectsTransferConfigsRunsListResponse;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsRunsListResponse };

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
var BigquerydatatransferProjectsTransferConfigsScheduleRunsPathParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsScheduleRunsPathParams, _super);
    function BigquerydatatransferProjectsTransferConfigsScheduleRunsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsPathParams.prototype, "parent", void 0);
    return BigquerydatatransferProjectsTransferConfigsScheduleRunsPathParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsScheduleRunsPathParams };
var BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams, _super);
    function BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams.prototype, "uploadProtocol", void 0);
    return BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams };
var BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1, _super);
    function BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1 };
var BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2, _super);
    function BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2 };
var BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity, _super);
    function BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity.prototype, "option2", void 0);
    return BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity };
var BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest, _super);
    function BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsScheduleRunsPathParams)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ScheduleTransferRunsRequest)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest.prototype, "security", void 0);
    return BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest };
var BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse, _super);
    function BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduleTransferRunsResponse)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse.prototype, "scheduleTransferRunsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse.prototype, "statusCode", void 0);
    return BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse };

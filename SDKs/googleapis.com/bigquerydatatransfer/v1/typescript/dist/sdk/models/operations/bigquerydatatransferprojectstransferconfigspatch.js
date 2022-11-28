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
var BigquerydatatransferProjectsTransferConfigsPatchPathParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsPatchPathParams, _super);
    function BigquerydatatransferProjectsTransferConfigsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchPathParams.prototype, "name", void 0);
    return BigquerydatatransferProjectsTransferConfigsPatchPathParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsPatchPathParams };
var BigquerydatatransferProjectsTransferConfigsPatchQueryParams = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsPatchQueryParams, _super);
    function BigquerydatatransferProjectsTransferConfigsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorizationCode" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "authorizationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceAccountName" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "serviceAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versionInfo" }),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchQueryParams.prototype, "versionInfo", void 0);
    return BigquerydatatransferProjectsTransferConfigsPatchQueryParams;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsPatchQueryParams };
var BigquerydatatransferProjectsTransferConfigsPatchSecurity = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsPatchSecurity, _super);
    function BigquerydatatransferProjectsTransferConfigsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigquerydatatransferProjectsTransferConfigsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigquerydatatransferProjectsTransferConfigsPatchSecurity.prototype, "oauth2c", void 0);
    return BigquerydatatransferProjectsTransferConfigsPatchSecurity;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsPatchSecurity };
var BigquerydatatransferProjectsTransferConfigsPatchRequest = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsPatchRequest, _super);
    function BigquerydatatransferProjectsTransferConfigsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsPatchPathParams)
    ], BigquerydatatransferProjectsTransferConfigsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsPatchQueryParams)
    ], BigquerydatatransferProjectsTransferConfigsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TransferConfigInput)
    ], BigquerydatatransferProjectsTransferConfigsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigquerydatatransferProjectsTransferConfigsPatchSecurity)
    ], BigquerydatatransferProjectsTransferConfigsPatchRequest.prototype, "security", void 0);
    return BigquerydatatransferProjectsTransferConfigsPatchRequest;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsPatchRequest };
var BigquerydatatransferProjectsTransferConfigsPatchResponse = /** @class */ (function (_super) {
    __extends(BigquerydatatransferProjectsTransferConfigsPatchResponse, _super);
    function BigquerydatatransferProjectsTransferConfigsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigquerydatatransferProjectsTransferConfigsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigquerydatatransferProjectsTransferConfigsPatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TransferConfig)
    ], BigquerydatatransferProjectsTransferConfigsPatchResponse.prototype, "transferConfig", void 0);
    return BigquerydatatransferProjectsTransferConfigsPatchResponse;
}(SpeakeasyBase));
export { BigquerydatatransferProjectsTransferConfigsPatchResponse };

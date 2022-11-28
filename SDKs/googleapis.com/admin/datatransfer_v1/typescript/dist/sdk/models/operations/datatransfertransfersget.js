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
var DatatransferTransfersGetPathParams = /** @class */ (function (_super) {
    __extends(DatatransferTransfersGetPathParams, _super);
    function DatatransferTransfersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataTransferId" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetPathParams.prototype, "dataTransferId", void 0);
    return DatatransferTransfersGetPathParams;
}(SpeakeasyBase));
export { DatatransferTransfersGetPathParams };
var DatatransferTransfersGetQueryParams = /** @class */ (function (_super) {
    __extends(DatatransferTransfersGetQueryParams, _super);
    function DatatransferTransfersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatatransferTransfersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatatransferTransfersGetQueryParams.prototype, "uploadProtocol", void 0);
    return DatatransferTransfersGetQueryParams;
}(SpeakeasyBase));
export { DatatransferTransfersGetQueryParams };
var DatatransferTransfersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatatransferTransfersGetSecurityOption1, _super);
    function DatatransferTransfersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatatransferTransfersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatatransferTransfersGetSecurityOption1.prototype, "oauth2c", void 0);
    return DatatransferTransfersGetSecurityOption1;
}(SpeakeasyBase));
export { DatatransferTransfersGetSecurityOption1 };
var DatatransferTransfersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatatransferTransfersGetSecurityOption2, _super);
    function DatatransferTransfersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatatransferTransfersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatatransferTransfersGetSecurityOption2.prototype, "oauth2c", void 0);
    return DatatransferTransfersGetSecurityOption2;
}(SpeakeasyBase));
export { DatatransferTransfersGetSecurityOption2 };
var DatatransferTransfersGetSecurity = /** @class */ (function (_super) {
    __extends(DatatransferTransfersGetSecurity, _super);
    function DatatransferTransfersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatatransferTransfersGetSecurityOption1)
    ], DatatransferTransfersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatatransferTransfersGetSecurityOption2)
    ], DatatransferTransfersGetSecurity.prototype, "option2", void 0);
    return DatatransferTransfersGetSecurity;
}(SpeakeasyBase));
export { DatatransferTransfersGetSecurity };
var DatatransferTransfersGetRequest = /** @class */ (function (_super) {
    __extends(DatatransferTransfersGetRequest, _super);
    function DatatransferTransfersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatatransferTransfersGetPathParams)
    ], DatatransferTransfersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatatransferTransfersGetQueryParams)
    ], DatatransferTransfersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatatransferTransfersGetSecurity)
    ], DatatransferTransfersGetRequest.prototype, "security", void 0);
    return DatatransferTransfersGetRequest;
}(SpeakeasyBase));
export { DatatransferTransfersGetRequest };
var DatatransferTransfersGetResponse = /** @class */ (function (_super) {
    __extends(DatatransferTransfersGetResponse, _super);
    function DatatransferTransfersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatatransferTransfersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DataTransfer)
    ], DatatransferTransfersGetResponse.prototype, "dataTransfer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatatransferTransfersGetResponse.prototype, "statusCode", void 0);
    return DatatransferTransfersGetResponse;
}(SpeakeasyBase));
export { DatatransferTransfersGetResponse };

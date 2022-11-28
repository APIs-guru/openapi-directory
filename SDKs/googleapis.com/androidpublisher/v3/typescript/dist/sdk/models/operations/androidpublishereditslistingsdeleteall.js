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
var AndroidpublisherEditsListingsDeleteallPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsListingsDeleteallPathParams, _super);
    function AndroidpublisherEditsListingsDeleteallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsListingsDeleteallPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsListingsDeleteallPathParams };
var AndroidpublisherEditsListingsDeleteallQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsListingsDeleteallQueryParams, _super);
    function AndroidpublisherEditsListingsDeleteallQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherEditsListingsDeleteallQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsListingsDeleteallQueryParams };
var AndroidpublisherEditsListingsDeleteallSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsListingsDeleteallSecurity, _super);
    function AndroidpublisherEditsListingsDeleteallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsListingsDeleteallSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsListingsDeleteallSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsListingsDeleteallSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsListingsDeleteallSecurity };
var AndroidpublisherEditsListingsDeleteallRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsListingsDeleteallRequest, _super);
    function AndroidpublisherEditsListingsDeleteallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsListingsDeleteallPathParams)
    ], AndroidpublisherEditsListingsDeleteallRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsListingsDeleteallQueryParams)
    ], AndroidpublisherEditsListingsDeleteallRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsListingsDeleteallSecurity)
    ], AndroidpublisherEditsListingsDeleteallRequest.prototype, "security", void 0);
    return AndroidpublisherEditsListingsDeleteallRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsListingsDeleteallRequest };
var AndroidpublisherEditsListingsDeleteallResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsListingsDeleteallResponse, _super);
    function AndroidpublisherEditsListingsDeleteallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsListingsDeleteallResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsListingsDeleteallResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsListingsDeleteallResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsListingsDeleteallResponse };

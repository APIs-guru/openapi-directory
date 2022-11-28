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
var Adexchangebuyer2AccountsCreativesStopWatchingPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesStopWatchingPathParams, _super);
    function Adexchangebuyer2AccountsCreativesStopWatchingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creativeId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingPathParams.prototype, "creativeId", void 0);
    return Adexchangebuyer2AccountsCreativesStopWatchingPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesStopWatchingPathParams };
var Adexchangebuyer2AccountsCreativesStopWatchingQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesStopWatchingQueryParams, _super);
    function Adexchangebuyer2AccountsCreativesStopWatchingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsCreativesStopWatchingQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesStopWatchingQueryParams };
var Adexchangebuyer2AccountsCreativesStopWatchingSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesStopWatchingSecurity, _super);
    function Adexchangebuyer2AccountsCreativesStopWatchingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsCreativesStopWatchingSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsCreativesStopWatchingSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsCreativesStopWatchingSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesStopWatchingSecurity };
var Adexchangebuyer2AccountsCreativesStopWatchingRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesStopWatchingRequest, _super);
    function Adexchangebuyer2AccountsCreativesStopWatchingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesStopWatchingPathParams)
    ], Adexchangebuyer2AccountsCreativesStopWatchingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesStopWatchingQueryParams)
    ], Adexchangebuyer2AccountsCreativesStopWatchingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], Adexchangebuyer2AccountsCreativesStopWatchingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesStopWatchingSecurity)
    ], Adexchangebuyer2AccountsCreativesStopWatchingRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsCreativesStopWatchingRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesStopWatchingRequest };
var Adexchangebuyer2AccountsCreativesStopWatchingResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesStopWatchingResponse, _super);
    function Adexchangebuyer2AccountsCreativesStopWatchingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesStopWatchingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], Adexchangebuyer2AccountsCreativesStopWatchingResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsCreativesStopWatchingResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsCreativesStopWatchingResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesStopWatchingResponse };

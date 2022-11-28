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
var Adexchangebuyer2BiddersFilterSetsGetPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsGetPathParams, _super);
    function Adexchangebuyer2BiddersFilterSetsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetPathParams.prototype, "name", void 0);
    return Adexchangebuyer2BiddersFilterSetsGetPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsGetPathParams };
var Adexchangebuyer2BiddersFilterSetsGetQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsGetQueryParams, _super);
    function Adexchangebuyer2BiddersFilterSetsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2BiddersFilterSetsGetQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsGetQueryParams };
var Adexchangebuyer2BiddersFilterSetsGetSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsGetSecurity, _super);
    function Adexchangebuyer2BiddersFilterSetsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2BiddersFilterSetsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2BiddersFilterSetsGetSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2BiddersFilterSetsGetSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsGetSecurity };
var Adexchangebuyer2BiddersFilterSetsGetRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsGetRequest, _super);
    function Adexchangebuyer2BiddersFilterSetsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsGetPathParams)
    ], Adexchangebuyer2BiddersFilterSetsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsGetQueryParams)
    ], Adexchangebuyer2BiddersFilterSetsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsGetSecurity)
    ], Adexchangebuyer2BiddersFilterSetsGetRequest.prototype, "security", void 0);
    return Adexchangebuyer2BiddersFilterSetsGetRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsGetRequest };
var Adexchangebuyer2BiddersFilterSetsGetResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsGetResponse, _super);
    function Adexchangebuyer2BiddersFilterSetsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FilterSet)
    ], Adexchangebuyer2BiddersFilterSetsGetResponse.prototype, "filterSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsGetResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2BiddersFilterSetsGetResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsGetResponse };

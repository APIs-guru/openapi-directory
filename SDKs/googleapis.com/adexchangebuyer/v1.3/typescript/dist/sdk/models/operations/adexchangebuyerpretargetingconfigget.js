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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AdexchangebuyerPretargetingConfigGetPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigGetPathParams, _super);
    function AdexchangebuyerPretargetingConfigGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigGetPathParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigGetPathParams.prototype, "configId", void 0);
    return AdexchangebuyerPretargetingConfigGetPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigGetPathParams };
var AdexchangebuyerPretargetingConfigGetQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigGetQueryParams, _super);
    function AdexchangebuyerPretargetingConfigGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerPretargetingConfigGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigGetQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerPretargetingConfigGetQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigGetQueryParams };
var AdexchangebuyerPretargetingConfigGetSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigGetSecurity, _super);
    function AdexchangebuyerPretargetingConfigGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerPretargetingConfigGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerPretargetingConfigGetSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerPretargetingConfigGetSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigGetSecurity };
var AdexchangebuyerPretargetingConfigGetRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigGetRequest, _super);
    function AdexchangebuyerPretargetingConfigGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigGetPathParams)
    ], AdexchangebuyerPretargetingConfigGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigGetQueryParams)
    ], AdexchangebuyerPretargetingConfigGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigGetSecurity)
    ], AdexchangebuyerPretargetingConfigGetRequest.prototype, "security", void 0);
    return AdexchangebuyerPretargetingConfigGetRequest;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigGetRequest };
var AdexchangebuyerPretargetingConfigGetResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigGetResponse, _super);
    function AdexchangebuyerPretargetingConfigGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PretargetingConfig)
    ], AdexchangebuyerPretargetingConfigGetResponse.prototype, "pretargetingConfig", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerPretargetingConfigGetResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerPretargetingConfigGetResponse;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigGetResponse };

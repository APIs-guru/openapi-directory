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
var AdexchangebuyerCreativesInsertQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesInsertQueryParams, _super);
    function AdexchangebuyerCreativesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerCreativesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesInsertQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerCreativesInsertQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesInsertQueryParams };
var AdexchangebuyerCreativesInsertSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesInsertSecurity, _super);
    function AdexchangebuyerCreativesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerCreativesInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerCreativesInsertSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerCreativesInsertSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesInsertSecurity };
var AdexchangebuyerCreativesInsertRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesInsertRequest, _super);
    function AdexchangebuyerCreativesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerCreativesInsertQueryParams)
    ], AdexchangebuyerCreativesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Creative)
    ], AdexchangebuyerCreativesInsertRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerCreativesInsertSecurity)
    ], AdexchangebuyerCreativesInsertRequest.prototype, "security", void 0);
    return AdexchangebuyerCreativesInsertRequest;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesInsertRequest };
var AdexchangebuyerCreativesInsertResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesInsertResponse, _super);
    function AdexchangebuyerCreativesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Creative)
    ], AdexchangebuyerCreativesInsertResponse.prototype, "creative", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerCreativesInsertResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerCreativesInsertResponse;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesInsertResponse };

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
var ConfigureAliasPathParams = /** @class */ (function (_super) {
    __extends(ConfigureAliasPathParams, _super);
    function ConfigureAliasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], ConfigureAliasPathParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" }),
        __metadata("design:type", String)
    ], ConfigureAliasPathParams.prototype, "emailAddress", void 0);
    return ConfigureAliasPathParams;
}(SpeakeasyBase));
export { ConfigureAliasPathParams };
var ConfigureAliasQueryParams = /** @class */ (function (_super) {
    __extends(ConfigureAliasQueryParams, _super);
    function ConfigureAliasQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], ConfigureAliasQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email_address" }),
        __metadata("design:type", String)
    ], ConfigureAliasQueryParams.prototype, "emailAddress", void 0);
    return ConfigureAliasQueryParams;
}(SpeakeasyBase));
export { ConfigureAliasQueryParams };
var ConfigureAliasRequest = /** @class */ (function (_super) {
    __extends(ConfigureAliasRequest, _super);
    function ConfigureAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfigureAliasPathParams)
    ], ConfigureAliasRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfigureAliasQueryParams)
    ], ConfigureAliasRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateAliasRequest)
    ], ConfigureAliasRequest.prototype, "request", void 0);
    return ConfigureAliasRequest;
}(SpeakeasyBase));
export { ConfigureAliasRequest };
var ConfigureAliasResponse = /** @class */ (function (_super) {
    __extends(ConfigureAliasResponse, _super);
    function ConfigureAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConfigureAliasResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfigureAliasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfigureAliasResponse.prototype, "statusCode", void 0);
    return ConfigureAliasResponse;
}(SpeakeasyBase));
export { ConfigureAliasResponse };

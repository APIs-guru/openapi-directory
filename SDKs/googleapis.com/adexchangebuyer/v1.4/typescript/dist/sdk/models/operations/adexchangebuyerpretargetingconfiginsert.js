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
var AdexchangebuyerPretargetingConfigInsertPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigInsertPathParams, _super);
    function AdexchangebuyerPretargetingConfigInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigInsertPathParams.prototype, "accountId", void 0);
    return AdexchangebuyerPretargetingConfigInsertPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigInsertPathParams };
var AdexchangebuyerPretargetingConfigInsertQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigInsertQueryParams, _super);
    function AdexchangebuyerPretargetingConfigInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerPretargetingConfigInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigInsertQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerPretargetingConfigInsertQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigInsertQueryParams };
var AdexchangebuyerPretargetingConfigInsertSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigInsertSecurity, _super);
    function AdexchangebuyerPretargetingConfigInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerPretargetingConfigInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerPretargetingConfigInsertSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerPretargetingConfigInsertSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigInsertSecurity };
var AdexchangebuyerPretargetingConfigInsertRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigInsertRequest, _super);
    function AdexchangebuyerPretargetingConfigInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigInsertPathParams)
    ], AdexchangebuyerPretargetingConfigInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigInsertQueryParams)
    ], AdexchangebuyerPretargetingConfigInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PretargetingConfig)
    ], AdexchangebuyerPretargetingConfigInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigInsertSecurity)
    ], AdexchangebuyerPretargetingConfigInsertRequest.prototype, "security", void 0);
    return AdexchangebuyerPretargetingConfigInsertRequest;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigInsertRequest };
var AdexchangebuyerPretargetingConfigInsertResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigInsertResponse, _super);
    function AdexchangebuyerPretargetingConfigInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PretargetingConfig)
    ], AdexchangebuyerPretargetingConfigInsertResponse.prototype, "pretargetingConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerPretargetingConfigInsertResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerPretargetingConfigInsertResponse;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigInsertResponse };

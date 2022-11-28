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
var AdexchangebuyerPretargetingConfigDeletePathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigDeletePathParams, _super);
    function AdexchangebuyerPretargetingConfigDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigDeletePathParams.prototype, "configId", void 0);
    return AdexchangebuyerPretargetingConfigDeletePathParams;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigDeletePathParams };
var AdexchangebuyerPretargetingConfigDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigDeleteQueryParams, _super);
    function AdexchangebuyerPretargetingConfigDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerPretargetingConfigDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigDeleteQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerPretargetingConfigDeleteQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigDeleteQueryParams };
var AdexchangebuyerPretargetingConfigDeleteSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigDeleteSecurity, _super);
    function AdexchangebuyerPretargetingConfigDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerPretargetingConfigDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerPretargetingConfigDeleteSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerPretargetingConfigDeleteSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigDeleteSecurity };
var AdexchangebuyerPretargetingConfigDeleteRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigDeleteRequest, _super);
    function AdexchangebuyerPretargetingConfigDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigDeletePathParams)
    ], AdexchangebuyerPretargetingConfigDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigDeleteQueryParams)
    ], AdexchangebuyerPretargetingConfigDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigDeleteSecurity)
    ], AdexchangebuyerPretargetingConfigDeleteRequest.prototype, "security", void 0);
    return AdexchangebuyerPretargetingConfigDeleteRequest;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigDeleteRequest };
var AdexchangebuyerPretargetingConfigDeleteResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigDeleteResponse, _super);
    function AdexchangebuyerPretargetingConfigDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerPretargetingConfigDeleteResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerPretargetingConfigDeleteResponse;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigDeleteResponse };

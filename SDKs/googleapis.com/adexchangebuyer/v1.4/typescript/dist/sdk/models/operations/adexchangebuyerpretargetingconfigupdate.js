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
var AdexchangebuyerPretargetingConfigUpdatePathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigUpdatePathParams, _super);
    function AdexchangebuyerPretargetingConfigUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigUpdatePathParams.prototype, "configId", void 0);
    return AdexchangebuyerPretargetingConfigUpdatePathParams;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigUpdatePathParams };
var AdexchangebuyerPretargetingConfigUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigUpdateQueryParams, _super);
    function AdexchangebuyerPretargetingConfigUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerPretargetingConfigUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigUpdateQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerPretargetingConfigUpdateQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigUpdateQueryParams };
var AdexchangebuyerPretargetingConfigUpdateSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigUpdateSecurity, _super);
    function AdexchangebuyerPretargetingConfigUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerPretargetingConfigUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerPretargetingConfigUpdateSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerPretargetingConfigUpdateSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigUpdateSecurity };
var AdexchangebuyerPretargetingConfigUpdateRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigUpdateRequest, _super);
    function AdexchangebuyerPretargetingConfigUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigUpdatePathParams)
    ], AdexchangebuyerPretargetingConfigUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigUpdateQueryParams)
    ], AdexchangebuyerPretargetingConfigUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PretargetingConfig)
    ], AdexchangebuyerPretargetingConfigUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigUpdateSecurity)
    ], AdexchangebuyerPretargetingConfigUpdateRequest.prototype, "security", void 0);
    return AdexchangebuyerPretargetingConfigUpdateRequest;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigUpdateRequest };
var AdexchangebuyerPretargetingConfigUpdateResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigUpdateResponse, _super);
    function AdexchangebuyerPretargetingConfigUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PretargetingConfig)
    ], AdexchangebuyerPretargetingConfigUpdateResponse.prototype, "pretargetingConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerPretargetingConfigUpdateResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerPretargetingConfigUpdateResponse;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigUpdateResponse };

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
var AdexchangebuyerPretargetingConfigListPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigListPathParams, _super);
    function AdexchangebuyerPretargetingConfigListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigListPathParams.prototype, "accountId", void 0);
    return AdexchangebuyerPretargetingConfigListPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigListPathParams };
var AdexchangebuyerPretargetingConfigListQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigListQueryParams, _super);
    function AdexchangebuyerPretargetingConfigListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerPretargetingConfigListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigListQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerPretargetingConfigListQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigListQueryParams };
var AdexchangebuyerPretargetingConfigListSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigListSecurity, _super);
    function AdexchangebuyerPretargetingConfigListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerPretargetingConfigListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerPretargetingConfigListSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerPretargetingConfigListSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigListSecurity };
var AdexchangebuyerPretargetingConfigListRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigListRequest, _super);
    function AdexchangebuyerPretargetingConfigListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigListPathParams)
    ], AdexchangebuyerPretargetingConfigListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigListQueryParams)
    ], AdexchangebuyerPretargetingConfigListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigListSecurity)
    ], AdexchangebuyerPretargetingConfigListRequest.prototype, "security", void 0);
    return AdexchangebuyerPretargetingConfigListRequest;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigListRequest };
var AdexchangebuyerPretargetingConfigListResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigListResponse, _super);
    function AdexchangebuyerPretargetingConfigListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PretargetingConfigList)
    ], AdexchangebuyerPretargetingConfigListResponse.prototype, "pretargetingConfigList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerPretargetingConfigListResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerPretargetingConfigListResponse;
}(SpeakeasyBase));
export { AdexchangebuyerPretargetingConfigListResponse };

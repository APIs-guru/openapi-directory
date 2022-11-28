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
var AdexchangebuyerBudgetUpdatePathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerBudgetUpdatePathParams, _super);
    function AdexchangebuyerBudgetUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerBudgetUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billingId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerBudgetUpdatePathParams.prototype, "billingId", void 0);
    return AdexchangebuyerBudgetUpdatePathParams;
}(SpeakeasyBase));
export { AdexchangebuyerBudgetUpdatePathParams };
var AdexchangebuyerBudgetUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerBudgetUpdateQueryParams, _super);
    function AdexchangebuyerBudgetUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerBudgetUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerBudgetUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerBudgetUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerBudgetUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerBudgetUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerBudgetUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerBudgetUpdateQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerBudgetUpdateQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerBudgetUpdateQueryParams };
var AdexchangebuyerBudgetUpdateSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerBudgetUpdateSecurity, _super);
    function AdexchangebuyerBudgetUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerBudgetUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerBudgetUpdateSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerBudgetUpdateSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerBudgetUpdateSecurity };
var AdexchangebuyerBudgetUpdateRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerBudgetUpdateRequest, _super);
    function AdexchangebuyerBudgetUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerBudgetUpdatePathParams)
    ], AdexchangebuyerBudgetUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerBudgetUpdateQueryParams)
    ], AdexchangebuyerBudgetUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Budget)
    ], AdexchangebuyerBudgetUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerBudgetUpdateSecurity)
    ], AdexchangebuyerBudgetUpdateRequest.prototype, "security", void 0);
    return AdexchangebuyerBudgetUpdateRequest;
}(SpeakeasyBase));
export { AdexchangebuyerBudgetUpdateRequest };
var AdexchangebuyerBudgetUpdateResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerBudgetUpdateResponse, _super);
    function AdexchangebuyerBudgetUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Budget)
    ], AdexchangebuyerBudgetUpdateResponse.prototype, "budget", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerBudgetUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerBudgetUpdateResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerBudgetUpdateResponse;
}(SpeakeasyBase));
export { AdexchangebuyerBudgetUpdateResponse };

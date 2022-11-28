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
export var AdexchangebuyerCreativesListDealsStatusFilterEnum;
(function (AdexchangebuyerCreativesListDealsStatusFilterEnum) {
    AdexchangebuyerCreativesListDealsStatusFilterEnum["Approved"] = "approved";
    AdexchangebuyerCreativesListDealsStatusFilterEnum["ConditionallyApproved"] = "conditionally_approved";
    AdexchangebuyerCreativesListDealsStatusFilterEnum["Disapproved"] = "disapproved";
    AdexchangebuyerCreativesListDealsStatusFilterEnum["NotChecked"] = "not_checked";
})(AdexchangebuyerCreativesListDealsStatusFilterEnum || (AdexchangebuyerCreativesListDealsStatusFilterEnum = {}));
export var AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum;
(function (AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum) {
    AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum["Approved"] = "approved";
    AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum["ConditionallyApproved"] = "conditionally_approved";
    AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum["Disapproved"] = "disapproved";
    AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum["NotChecked"] = "not_checked";
})(AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum || (AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum = {}));
var AdexchangebuyerCreativesListQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesListQueryParams, _super);
    function AdexchangebuyerCreativesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" }),
        __metadata("design:type", Array)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=buyerCreativeId" }),
        __metadata("design:type", Array)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "buyerCreativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealsStatusFilter" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "dealsStatusFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=openAuctionStatusFilter" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "openAuctionStatusFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerCreativesListQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesListQueryParams };
var AdexchangebuyerCreativesListSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesListSecurity, _super);
    function AdexchangebuyerCreativesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerCreativesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerCreativesListSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerCreativesListSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesListSecurity };
var AdexchangebuyerCreativesListRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesListRequest, _super);
    function AdexchangebuyerCreativesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerCreativesListQueryParams)
    ], AdexchangebuyerCreativesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerCreativesListSecurity)
    ], AdexchangebuyerCreativesListRequest.prototype, "security", void 0);
    return AdexchangebuyerCreativesListRequest;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesListRequest };
var AdexchangebuyerCreativesListResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesListResponse, _super);
    function AdexchangebuyerCreativesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreativesList)
    ], AdexchangebuyerCreativesListResponse.prototype, "creativesList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerCreativesListResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerCreativesListResponse;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesListResponse };

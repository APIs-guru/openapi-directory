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
export var GetCommunityConversationsOrderEnum;
(function (GetCommunityConversationsOrderEnum) {
    GetCommunityConversationsOrderEnum["Ascending"] = "ASCENDING";
    GetCommunityConversationsOrderEnum["Descending"] = "DESCENDING";
})(GetCommunityConversationsOrderEnum || (GetCommunityConversationsOrderEnum = {}));
export var GetCommunityConversationsSortEnum;
(function (GetCommunityConversationsSortEnum) {
    GetCommunityConversationsSortEnum["Alphabetically"] = "ALPHABETICALLY";
    GetCommunityConversationsSortEnum["RecentActivity"] = "RECENT_ACTIVITY";
    GetCommunityConversationsSortEnum["Popularity"] = "POPULARITY";
})(GetCommunityConversationsSortEnum || (GetCommunityConversationsSortEnum = {}));
var GetCommunityConversationsQueryParams = /** @class */ (function (_super) {
    __extends(GetCommunityConversationsQueryParams, _super);
    function GetCommunityConversationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeOwn" }),
        __metadata("design:type", Boolean)
    ], GetCommunityConversationsQueryParams.prototype, "includeOwn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetCommunityConversationsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results" }),
        __metadata("design:type", Number)
    ], GetCommunityConversationsQueryParams.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCommunityConversationsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetCommunityConversationsQueryParams.prototype, "startIndex", void 0);
    return GetCommunityConversationsQueryParams;
}(SpeakeasyBase));
export { GetCommunityConversationsQueryParams };
var GetCommunityConversationsSecurity = /** @class */ (function (_super) {
    __extends(GetCommunityConversationsSecurity, _super);
    function GetCommunityConversationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetCommunityConversationsSecurity.prototype, "oauth", void 0);
    return GetCommunityConversationsSecurity;
}(SpeakeasyBase));
export { GetCommunityConversationsSecurity };
var GetCommunityConversationsRequest = /** @class */ (function (_super) {
    __extends(GetCommunityConversationsRequest, _super);
    function GetCommunityConversationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommunityConversationsQueryParams)
    ], GetCommunityConversationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommunityConversationsSecurity)
    ], GetCommunityConversationsRequest.prototype, "security", void 0);
    return GetCommunityConversationsRequest;
}(SpeakeasyBase));
export { GetCommunityConversationsRequest };
var GetCommunityConversationsResponse = /** @class */ (function (_super) {
    __extends(GetCommunityConversationsResponse, _super);
    function GetCommunityConversationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCommunityConversationsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommunityConversationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetCommunityConversationsResponse.prototype, "conversations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommunityConversationsResponse.prototype, "statusCode", void 0);
    return GetCommunityConversationsResponse;
}(SpeakeasyBase));
export { GetCommunityConversationsResponse };

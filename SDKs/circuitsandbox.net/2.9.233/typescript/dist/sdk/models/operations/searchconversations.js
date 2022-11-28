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
export var SearchConversationsScopeEnum;
(function (SearchConversationsScopeEnum) {
    SearchConversationsScopeEnum["Files"] = "FILES";
    SearchConversationsScopeEnum["People"] = "PEOPLE";
    SearchConversationsScopeEnum["Members"] = "MEMBERS";
    SearchConversationsScopeEnum["Messages"] = "MESSAGES";
    SearchConversationsScopeEnum["Sentby"] = "SENTBY";
    SearchConversationsScopeEnum["All"] = "ALL";
    SearchConversationsScopeEnum["Conversations"] = "CONVERSATIONS";
    SearchConversationsScopeEnum["Label"] = "LABEL";
    SearchConversationsScopeEnum["Filter"] = "FILTER";
})(SearchConversationsScopeEnum || (SearchConversationsScopeEnum = {}));
var SearchConversationsQueryParams = /** @class */ (function (_super) {
    __extends(SearchConversationsQueryParams, _super);
    function SearchConversationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemIds" }),
        __metadata("design:type", Boolean)
    ], SearchConversationsQueryParams.prototype, "includeItemIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], SearchConversationsQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term" }),
        __metadata("design:type", String)
    ], SearchConversationsQueryParams.prototype, "term", void 0);
    return SearchConversationsQueryParams;
}(SpeakeasyBase));
export { SearchConversationsQueryParams };
var SearchConversationsSecurity = /** @class */ (function (_super) {
    __extends(SearchConversationsSecurity, _super);
    function SearchConversationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], SearchConversationsSecurity.prototype, "oauth", void 0);
    return SearchConversationsSecurity;
}(SpeakeasyBase));
export { SearchConversationsSecurity };
var SearchConversationsRequest = /** @class */ (function (_super) {
    __extends(SearchConversationsRequest, _super);
    function SearchConversationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchConversationsQueryParams)
    ], SearchConversationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchConversationsSecurity)
    ], SearchConversationsRequest.prototype, "security", void 0);
    return SearchConversationsRequest;
}(SpeakeasyBase));
export { SearchConversationsRequest };
var SearchConversationsResponse = /** @class */ (function (_super) {
    __extends(SearchConversationsResponse, _super);
    function SearchConversationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SearchConversationsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchConversationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchConversationsResponse.prototype, "conversationSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchConversationsResponse.prototype, "statusCode", void 0);
    return SearchConversationsResponse;
}(SpeakeasyBase));
export { SearchConversationsResponse };

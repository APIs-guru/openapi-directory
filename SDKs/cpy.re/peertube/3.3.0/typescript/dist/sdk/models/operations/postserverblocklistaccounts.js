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
var PostServerBlocklistAccountsRequestBody = /** @class */ (function (_super) {
    __extends(PostServerBlocklistAccountsRequestBody, _super);
    function PostServerBlocklistAccountsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], PostServerBlocklistAccountsRequestBody.prototype, "accountName", void 0);
    return PostServerBlocklistAccountsRequestBody;
}(SpeakeasyBase));
export { PostServerBlocklistAccountsRequestBody };
var PostServerBlocklistAccountsSecurity = /** @class */ (function (_super) {
    __extends(PostServerBlocklistAccountsSecurity, _super);
    function PostServerBlocklistAccountsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PostServerBlocklistAccountsSecurity.prototype, "oAuth2", void 0);
    return PostServerBlocklistAccountsSecurity;
}(SpeakeasyBase));
export { PostServerBlocklistAccountsSecurity };
var PostServerBlocklistAccountsRequest = /** @class */ (function (_super) {
    __extends(PostServerBlocklistAccountsRequest, _super);
    function PostServerBlocklistAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServerBlocklistAccountsRequestBody)
    ], PostServerBlocklistAccountsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServerBlocklistAccountsSecurity)
    ], PostServerBlocklistAccountsRequest.prototype, "security", void 0);
    return PostServerBlocklistAccountsRequest;
}(SpeakeasyBase));
export { PostServerBlocklistAccountsRequest };
var PostServerBlocklistAccountsResponse = /** @class */ (function (_super) {
    __extends(PostServerBlocklistAccountsResponse, _super);
    function PostServerBlocklistAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServerBlocklistAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServerBlocklistAccountsResponse.prototype, "statusCode", void 0);
    return PostServerBlocklistAccountsResponse;
}(SpeakeasyBase));
export { PostServerBlocklistAccountsResponse };

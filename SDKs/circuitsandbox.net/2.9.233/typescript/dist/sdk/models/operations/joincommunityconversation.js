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
var JoinCommunityConversationPathParams = /** @class */ (function (_super) {
    __extends(JoinCommunityConversationPathParams, _super);
    function JoinCommunityConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], JoinCommunityConversationPathParams.prototype, "convId", void 0);
    return JoinCommunityConversationPathParams;
}(SpeakeasyBase));
export { JoinCommunityConversationPathParams };
var JoinCommunityConversationSecurity = /** @class */ (function (_super) {
    __extends(JoinCommunityConversationSecurity, _super);
    function JoinCommunityConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], JoinCommunityConversationSecurity.prototype, "oauth", void 0);
    return JoinCommunityConversationSecurity;
}(SpeakeasyBase));
export { JoinCommunityConversationSecurity };
var JoinCommunityConversationRequest = /** @class */ (function (_super) {
    __extends(JoinCommunityConversationRequest, _super);
    function JoinCommunityConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JoinCommunityConversationPathParams)
    ], JoinCommunityConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JoinCommunityConversationSecurity)
    ], JoinCommunityConversationRequest.prototype, "security", void 0);
    return JoinCommunityConversationRequest;
}(SpeakeasyBase));
export { JoinCommunityConversationRequest };
var JoinCommunityConversationResponse = /** @class */ (function (_super) {
    __extends(JoinCommunityConversationResponse, _super);
    function JoinCommunityConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], JoinCommunityConversationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JoinCommunityConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], JoinCommunityConversationResponse.prototype, "conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JoinCommunityConversationResponse.prototype, "statusCode", void 0);
    return JoinCommunityConversationResponse;
}(SpeakeasyBase));
export { JoinCommunityConversationResponse };

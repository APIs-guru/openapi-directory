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
var GroupV2AddOptionalConversationPathParams = /** @class */ (function (_super) {
    __extends(GroupV2AddOptionalConversationPathParams, _super);
    function GroupV2AddOptionalConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2AddOptionalConversationPathParams.prototype, "groupId", void 0);
    return GroupV2AddOptionalConversationPathParams;
}(SpeakeasyBase));
export { GroupV2AddOptionalConversationPathParams };
var GroupV2AddOptionalConversationSecurity = /** @class */ (function (_super) {
    __extends(GroupV2AddOptionalConversationSecurity, _super);
    function GroupV2AddOptionalConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2AddOptionalConversationSecurity.prototype, "oauth2", void 0);
    return GroupV2AddOptionalConversationSecurity;
}(SpeakeasyBase));
export { GroupV2AddOptionalConversationSecurity };
var GroupV2AddOptionalConversationRequest = /** @class */ (function (_super) {
    __extends(GroupV2AddOptionalConversationRequest, _super);
    function GroupV2AddOptionalConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2AddOptionalConversationPathParams)
    ], GroupV2AddOptionalConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2AddOptionalConversationSecurity)
    ], GroupV2AddOptionalConversationRequest.prototype, "security", void 0);
    return GroupV2AddOptionalConversationRequest;
}(SpeakeasyBase));
export { GroupV2AddOptionalConversationRequest };
var GroupV2AddOptionalConversationResponse = /** @class */ (function (_super) {
    __extends(GroupV2AddOptionalConversationResponse, _super);
    function GroupV2AddOptionalConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2AddOptionalConversationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupV2AddOptionalConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupV2AddOptionalConversationResponse.prototype, "statusCode", void 0);
    return GroupV2AddOptionalConversationResponse;
}(SpeakeasyBase));
export { GroupV2AddOptionalConversationResponse };

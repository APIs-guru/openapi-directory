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
var UnPinAConversationPathParams = /** @class */ (function (_super) {
    __extends(UnPinAConversationPathParams, _super);
    function UnPinAConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], UnPinAConversationPathParams.prototype, "convId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], UnPinAConversationPathParams.prototype, "itemId", void 0);
    return UnPinAConversationPathParams;
}(SpeakeasyBase));
export { UnPinAConversationPathParams };
var UnPinAConversationSecurity = /** @class */ (function (_super) {
    __extends(UnPinAConversationSecurity, _super);
    function UnPinAConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UnPinAConversationSecurity.prototype, "oauth", void 0);
    return UnPinAConversationSecurity;
}(SpeakeasyBase));
export { UnPinAConversationSecurity };
var UnPinAConversationRequest = /** @class */ (function (_super) {
    __extends(UnPinAConversationRequest, _super);
    function UnPinAConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnPinAConversationPathParams)
    ], UnPinAConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnPinAConversationSecurity)
    ], UnPinAConversationRequest.prototype, "security", void 0);
    return UnPinAConversationRequest;
}(SpeakeasyBase));
export { UnPinAConversationRequest };
var UnPinAConversationResponse = /** @class */ (function (_super) {
    __extends(UnPinAConversationResponse, _super);
    function UnPinAConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UnPinAConversationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UnPinAConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UnPinAConversationResponse.prototype, "conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UnPinAConversationResponse.prototype, "statusCode", void 0);
    return UnPinAConversationResponse;
}(SpeakeasyBase));
export { UnPinAConversationResponse };

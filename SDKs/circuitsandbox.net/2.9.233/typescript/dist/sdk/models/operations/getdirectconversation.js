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
var GetDirectConversationQueryParams = /** @class */ (function (_super) {
    __extends(GetDirectConversationQueryParams, _super);
    function GetDirectConversationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=participant" }),
        __metadata("design:type", String)
    ], GetDirectConversationQueryParams.prototype, "participant", void 0);
    return GetDirectConversationQueryParams;
}(SpeakeasyBase));
export { GetDirectConversationQueryParams };
var GetDirectConversationSecurity = /** @class */ (function (_super) {
    __extends(GetDirectConversationSecurity, _super);
    function GetDirectConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetDirectConversationSecurity.prototype, "oauth", void 0);
    return GetDirectConversationSecurity;
}(SpeakeasyBase));
export { GetDirectConversationSecurity };
var GetDirectConversationRequest = /** @class */ (function (_super) {
    __extends(GetDirectConversationRequest, _super);
    function GetDirectConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDirectConversationQueryParams)
    ], GetDirectConversationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDirectConversationSecurity)
    ], GetDirectConversationRequest.prototype, "security", void 0);
    return GetDirectConversationRequest;
}(SpeakeasyBase));
export { GetDirectConversationRequest };
var GetDirectConversationResponse = /** @class */ (function (_super) {
    __extends(GetDirectConversationResponse, _super);
    function GetDirectConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDirectConversationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDirectConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDirectConversationResponse.prototype, "conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDirectConversationResponse.prototype, "statusCode", void 0);
    return GetDirectConversationResponse;
}(SpeakeasyBase));
export { GetDirectConversationResponse };

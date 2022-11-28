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
var GetConversationsByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetConversationsByIdQueryParams, _super);
    function GetConversationsByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=convIds" }),
        __metadata("design:type", Array)
    ], GetConversationsByIdQueryParams.prototype, "convIds", void 0);
    return GetConversationsByIdQueryParams;
}(SpeakeasyBase));
export { GetConversationsByIdQueryParams };
var GetConversationsByIdSecurity = /** @class */ (function (_super) {
    __extends(GetConversationsByIdSecurity, _super);
    function GetConversationsByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetConversationsByIdSecurity.prototype, "oauth", void 0);
    return GetConversationsByIdSecurity;
}(SpeakeasyBase));
export { GetConversationsByIdSecurity };
var GetConversationsByIdRequest = /** @class */ (function (_super) {
    __extends(GetConversationsByIdRequest, _super);
    function GetConversationsByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationsByIdQueryParams)
    ], GetConversationsByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationsByIdSecurity)
    ], GetConversationsByIdRequest.prototype, "security", void 0);
    return GetConversationsByIdRequest;
}(SpeakeasyBase));
export { GetConversationsByIdRequest };
var GetConversationsByIdResponse = /** @class */ (function (_super) {
    __extends(GetConversationsByIdResponse, _super);
    function GetConversationsByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetConversationsByIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConversationsByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetConversationsByIdResponse.prototype, "conversations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConversationsByIdResponse.prototype, "statusCode", void 0);
    return GetConversationsByIdResponse;
}(SpeakeasyBase));
export { GetConversationsByIdResponse };

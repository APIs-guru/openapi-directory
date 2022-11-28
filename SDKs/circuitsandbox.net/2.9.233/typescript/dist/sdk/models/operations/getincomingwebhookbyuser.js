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
var GetIncomingWebhookByUserPathParams = /** @class */ (function (_super) {
    __extends(GetIncomingWebhookByUserPathParams, _super);
    function GetIncomingWebhookByUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GetIncomingWebhookByUserPathParams.prototype, "userId", void 0);
    return GetIncomingWebhookByUserPathParams;
}(SpeakeasyBase));
export { GetIncomingWebhookByUserPathParams };
var GetIncomingWebhookByUserQueryParams = /** @class */ (function (_super) {
    __extends(GetIncomingWebhookByUserQueryParams, _super);
    function GetIncomingWebhookByUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetIncomingWebhookByUserQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchpointer" }),
        __metadata("design:type", String)
    ], GetIncomingWebhookByUserQueryParams.prototype, "searchpointer", void 0);
    return GetIncomingWebhookByUserQueryParams;
}(SpeakeasyBase));
export { GetIncomingWebhookByUserQueryParams };
var GetIncomingWebhookByUserSecurity = /** @class */ (function (_super) {
    __extends(GetIncomingWebhookByUserSecurity, _super);
    function GetIncomingWebhookByUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetIncomingWebhookByUserSecurity.prototype, "oauth", void 0);
    return GetIncomingWebhookByUserSecurity;
}(SpeakeasyBase));
export { GetIncomingWebhookByUserSecurity };
var GetIncomingWebhookByUserRequest = /** @class */ (function (_super) {
    __extends(GetIncomingWebhookByUserRequest, _super);
    function GetIncomingWebhookByUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIncomingWebhookByUserPathParams)
    ], GetIncomingWebhookByUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIncomingWebhookByUserQueryParams)
    ], GetIncomingWebhookByUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIncomingWebhookByUserSecurity)
    ], GetIncomingWebhookByUserRequest.prototype, "security", void 0);
    return GetIncomingWebhookByUserRequest;
}(SpeakeasyBase));
export { GetIncomingWebhookByUserRequest };
var GetIncomingWebhookByUserResponse = /** @class */ (function (_super) {
    __extends(GetIncomingWebhookByUserResponse, _super);
    function GetIncomingWebhookByUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetIncomingWebhookByUserResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIncomingWebhookByUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetIncomingWebhookByUserResponse.prototype, "incomingWebhooks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIncomingWebhookByUserResponse.prototype, "statusCode", void 0);
    return GetIncomingWebhookByUserResponse;
}(SpeakeasyBase));
export { GetIncomingWebhookByUserResponse };

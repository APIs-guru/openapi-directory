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
var GetWebhookPathParams = /** @class */ (function (_super) {
    __extends(GetWebhookPathParams, _super);
    function GetWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_gid" }),
        __metadata("design:type", String)
    ], GetWebhookPathParams.prototype, "webhookGid", void 0);
    return GetWebhookPathParams;
}(SpeakeasyBase));
export { GetWebhookPathParams };
var GetWebhookQueryParams = /** @class */ (function (_super) {
    __extends(GetWebhookQueryParams, _super);
    function GetWebhookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetWebhookQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetWebhookQueryParams.prototype, "optPretty", void 0);
    return GetWebhookQueryParams;
}(SpeakeasyBase));
export { GetWebhookQueryParams };
var GetWebhook200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWebhook200ApplicationJson, _super);
    function GetWebhook200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.WebhookResponse)
    ], GetWebhook200ApplicationJson.prototype, "data", void 0);
    return GetWebhook200ApplicationJson;
}(SpeakeasyBase));
export { GetWebhook200ApplicationJson };
var GetWebhookRequest = /** @class */ (function (_super) {
    __extends(GetWebhookRequest, _super);
    function GetWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWebhookPathParams)
    ], GetWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWebhookQueryParams)
    ], GetWebhookRequest.prototype, "queryParams", void 0);
    return GetWebhookRequest;
}(SpeakeasyBase));
export { GetWebhookRequest };
var GetWebhookResponse = /** @class */ (function (_super) {
    __extends(GetWebhookResponse, _super);
    function GetWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetWebhookResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWebhook200ApplicationJson)
    ], GetWebhookResponse.prototype, "getWebhook200ApplicationJsonObject", void 0);
    return GetWebhookResponse;
}(SpeakeasyBase));
export { GetWebhookResponse };

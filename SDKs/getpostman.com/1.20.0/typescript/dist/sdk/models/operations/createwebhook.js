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
var CreateWebhookQueryParams = /** @class */ (function (_super) {
    __extends(CreateWebhookQueryParams, _super);
    function CreateWebhookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" }),
        __metadata("design:type", String)
    ], CreateWebhookQueryParams.prototype, "workspace", void 0);
    return CreateWebhookQueryParams;
}(SpeakeasyBase));
export { CreateWebhookQueryParams };
var CreateWebhookRequestBodyWebhook = /** @class */ (function (_super) {
    __extends(CreateWebhookRequestBodyWebhook, _super);
    function CreateWebhookRequestBodyWebhook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", String)
    ], CreateWebhookRequestBodyWebhook.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateWebhookRequestBodyWebhook.prototype, "name", void 0);
    return CreateWebhookRequestBodyWebhook;
}(SpeakeasyBase));
export { CreateWebhookRequestBodyWebhook };
var CreateWebhookRequestBody = /** @class */ (function (_super) {
    __extends(CreateWebhookRequestBody, _super);
    function CreateWebhookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook" }),
        __metadata("design:type", CreateWebhookRequestBodyWebhook)
    ], CreateWebhookRequestBody.prototype, "webhook", void 0);
    return CreateWebhookRequestBody;
}(SpeakeasyBase));
export { CreateWebhookRequestBody };
var CreateWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateWebhookRequest, _super);
    function CreateWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWebhookQueryParams)
    ], CreateWebhookRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateWebhookRequestBody)
    ], CreateWebhookRequest.prototype, "request", void 0);
    return CreateWebhookRequest;
}(SpeakeasyBase));
export { CreateWebhookRequest };
var CreateWebhookResponse = /** @class */ (function (_super) {
    __extends(CreateWebhookResponse, _super);
    function CreateWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateWebhookResponse.prototype, "statusCode", void 0);
    return CreateWebhookResponse;
}(SpeakeasyBase));
export { CreateWebhookResponse };

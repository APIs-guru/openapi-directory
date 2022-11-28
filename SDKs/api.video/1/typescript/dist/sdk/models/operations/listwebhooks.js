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
var ListWebhooksQueryParams = /** @class */ (function (_super) {
    __extends(ListWebhooksQueryParams, _super);
    function ListWebhooksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" }),
        __metadata("design:type", Number)
    ], ListWebhooksQueryParams.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=events" }),
        __metadata("design:type", String)
    ], ListWebhooksQueryParams.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ListWebhooksQueryParams.prototype, "pageSize", void 0);
    return ListWebhooksQueryParams;
}(SpeakeasyBase));
export { ListWebhooksQueryParams };
var ListWebhooksSecurity = /** @class */ (function (_super) {
    __extends(ListWebhooksSecurity, _super);
    function ListWebhooksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ListWebhooksSecurity.prototype, "bearerAuth", void 0);
    return ListWebhooksSecurity;
}(SpeakeasyBase));
export { ListWebhooksSecurity };
var ListWebhooksRequest = /** @class */ (function (_super) {
    __extends(ListWebhooksRequest, _super);
    function ListWebhooksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWebhooksQueryParams)
    ], ListWebhooksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWebhooksSecurity)
    ], ListWebhooksRequest.prototype, "security", void 0);
    return ListWebhooksRequest;
}(SpeakeasyBase));
export { ListWebhooksRequest };
var ListWebhooksResponse = /** @class */ (function (_super) {
    __extends(ListWebhooksResponse, _super);
    function ListWebhooksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWebhooksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListWebhooksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WebhooksListResponse)
    ], ListWebhooksResponse.prototype, "webhooksListResponse", void 0);
    return ListWebhooksResponse;
}(SpeakeasyBase));
export { ListWebhooksResponse };

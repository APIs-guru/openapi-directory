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
var OrgsListWebhooksPathParams = /** @class */ (function (_super) {
    __extends(OrgsListWebhooksPathParams, _super);
    function OrgsListWebhooksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsListWebhooksPathParams.prototype, "org", void 0);
    return OrgsListWebhooksPathParams;
}(SpeakeasyBase));
export { OrgsListWebhooksPathParams };
var OrgsListWebhooksQueryParams = /** @class */ (function (_super) {
    __extends(OrgsListWebhooksQueryParams, _super);
    function OrgsListWebhooksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], OrgsListWebhooksQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], OrgsListWebhooksQueryParams.prototype, "perPage", void 0);
    return OrgsListWebhooksQueryParams;
}(SpeakeasyBase));
export { OrgsListWebhooksQueryParams };
var OrgsListWebhooksRequest = /** @class */ (function (_super) {
    __extends(OrgsListWebhooksRequest, _super);
    function OrgsListWebhooksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsListWebhooksPathParams)
    ], OrgsListWebhooksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsListWebhooksQueryParams)
    ], OrgsListWebhooksRequest.prototype, "queryParams", void 0);
    return OrgsListWebhooksRequest;
}(SpeakeasyBase));
export { OrgsListWebhooksRequest };
var OrgsListWebhooksResponse = /** @class */ (function (_super) {
    __extends(OrgsListWebhooksResponse, _super);
    function OrgsListWebhooksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgsListWebhooksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OrgsListWebhooksResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgsListWebhooksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], OrgsListWebhooksResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OrgHook }),
        __metadata("design:type", Array)
    ], OrgsListWebhooksResponse.prototype, "orgHooks", void 0);
    return OrgsListWebhooksResponse;
}(SpeakeasyBase));
export { OrgsListWebhooksResponse };

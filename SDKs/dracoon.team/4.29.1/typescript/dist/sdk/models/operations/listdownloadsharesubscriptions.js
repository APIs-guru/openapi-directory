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
var ListDownloadShareSubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(ListDownloadShareSubscriptionsQueryParams, _super);
    function ListDownloadShareSubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ListDownloadShareSubscriptionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListDownloadShareSubscriptionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListDownloadShareSubscriptionsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListDownloadShareSubscriptionsQueryParams.prototype, "sort", void 0);
    return ListDownloadShareSubscriptionsQueryParams;
}(SpeakeasyBase));
export { ListDownloadShareSubscriptionsQueryParams };
var ListDownloadShareSubscriptionsHeaders = /** @class */ (function (_super) {
    __extends(ListDownloadShareSubscriptionsHeaders, _super);
    function ListDownloadShareSubscriptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], ListDownloadShareSubscriptionsHeaders.prototype, "xSdsAuthToken", void 0);
    return ListDownloadShareSubscriptionsHeaders;
}(SpeakeasyBase));
export { ListDownloadShareSubscriptionsHeaders };
var ListDownloadShareSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(ListDownloadShareSubscriptionsRequest, _super);
    function ListDownloadShareSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDownloadShareSubscriptionsQueryParams)
    ], ListDownloadShareSubscriptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDownloadShareSubscriptionsHeaders)
    ], ListDownloadShareSubscriptionsRequest.prototype, "headers", void 0);
    return ListDownloadShareSubscriptionsRequest;
}(SpeakeasyBase));
export { ListDownloadShareSubscriptionsRequest };
var ListDownloadShareSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(ListDownloadShareSubscriptionsResponse, _super);
    function ListDownloadShareSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDownloadShareSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], ListDownloadShareSubscriptionsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDownloadShareSubscriptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscribedDownloadShareList)
    ], ListDownloadShareSubscriptionsResponse.prototype, "subscribedDownloadShareList", void 0);
    return ListDownloadShareSubscriptionsResponse;
}(SpeakeasyBase));
export { ListDownloadShareSubscriptionsResponse };

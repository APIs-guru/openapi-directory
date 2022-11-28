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
var ListUploadShareSubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(ListUploadShareSubscriptionsQueryParams, _super);
    function ListUploadShareSubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ListUploadShareSubscriptionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListUploadShareSubscriptionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListUploadShareSubscriptionsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListUploadShareSubscriptionsQueryParams.prototype, "sort", void 0);
    return ListUploadShareSubscriptionsQueryParams;
}(SpeakeasyBase));
export { ListUploadShareSubscriptionsQueryParams };
var ListUploadShareSubscriptionsHeaders = /** @class */ (function (_super) {
    __extends(ListUploadShareSubscriptionsHeaders, _super);
    function ListUploadShareSubscriptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], ListUploadShareSubscriptionsHeaders.prototype, "xSdsAuthToken", void 0);
    return ListUploadShareSubscriptionsHeaders;
}(SpeakeasyBase));
export { ListUploadShareSubscriptionsHeaders };
var ListUploadShareSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(ListUploadShareSubscriptionsRequest, _super);
    function ListUploadShareSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUploadShareSubscriptionsQueryParams)
    ], ListUploadShareSubscriptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUploadShareSubscriptionsHeaders)
    ], ListUploadShareSubscriptionsRequest.prototype, "headers", void 0);
    return ListUploadShareSubscriptionsRequest;
}(SpeakeasyBase));
export { ListUploadShareSubscriptionsRequest };
var ListUploadShareSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(ListUploadShareSubscriptionsResponse, _super);
    function ListUploadShareSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUploadShareSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], ListUploadShareSubscriptionsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListUploadShareSubscriptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscribedUploadShareList)
    ], ListUploadShareSubscriptionsResponse.prototype, "subscribedUploadShareList", void 0);
    return ListUploadShareSubscriptionsResponse;
}(SpeakeasyBase));
export { ListUploadShareSubscriptionsResponse };

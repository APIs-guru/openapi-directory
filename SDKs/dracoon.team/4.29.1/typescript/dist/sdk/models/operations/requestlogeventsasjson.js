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
var RequestLogEventsAsJsonQueryParams = /** @class */ (function (_super) {
    __extends(RequestLogEventsAsJsonQueryParams, _super);
    function RequestLogEventsAsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_end" }),
        __metadata("design:type", String)
    ], RequestLogEventsAsJsonQueryParams.prototype, "dateEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_start" }),
        __metadata("design:type", String)
    ], RequestLogEventsAsJsonQueryParams.prototype, "dateStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestLogEventsAsJsonQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestLogEventsAsJsonQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], RequestLogEventsAsJsonQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Object)
    ], RequestLogEventsAsJsonQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Number)
    ], RequestLogEventsAsJsonQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_client" }),
        __metadata("design:type", String)
    ], RequestLogEventsAsJsonQueryParams.prototype, "userClient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", Number)
    ], RequestLogEventsAsJsonQueryParams.prototype, "userId", void 0);
    return RequestLogEventsAsJsonQueryParams;
}(SpeakeasyBase));
export { RequestLogEventsAsJsonQueryParams };
var RequestLogEventsAsJsonHeaders = /** @class */ (function (_super) {
    __extends(RequestLogEventsAsJsonHeaders, _super);
    function RequestLogEventsAsJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestLogEventsAsJsonHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestLogEventsAsJsonHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestLogEventsAsJsonHeaders;
}(SpeakeasyBase));
export { RequestLogEventsAsJsonHeaders };
var RequestLogEventsAsJsonRequest = /** @class */ (function (_super) {
    __extends(RequestLogEventsAsJsonRequest, _super);
    function RequestLogEventsAsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestLogEventsAsJsonQueryParams)
    ], RequestLogEventsAsJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestLogEventsAsJsonHeaders)
    ], RequestLogEventsAsJsonRequest.prototype, "headers", void 0);
    return RequestLogEventsAsJsonRequest;
}(SpeakeasyBase));
export { RequestLogEventsAsJsonRequest };
var RequestLogEventsAsJsonResponse = /** @class */ (function (_super) {
    __extends(RequestLogEventsAsJsonResponse, _super);
    function RequestLogEventsAsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestLogEventsAsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestLogEventsAsJsonResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LogEventList)
    ], RequestLogEventsAsJsonResponse.prototype, "logEventList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestLogEventsAsJsonResponse.prototype, "statusCode", void 0);
    return RequestLogEventsAsJsonResponse;
}(SpeakeasyBase));
export { RequestLogEventsAsJsonResponse };

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
var RequestSyslogEventsQueryParams = /** @class */ (function (_super) {
    __extends(RequestSyslogEventsQueryParams, _super);
    function RequestSyslogEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_end" }),
        __metadata("design:type", String)
    ], RequestSyslogEventsQueryParams.prototype, "dateEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_start" }),
        __metadata("design:type", String)
    ], RequestSyslogEventsQueryParams.prototype, "dateStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestSyslogEventsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestSyslogEventsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], RequestSyslogEventsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Object)
    ], RequestSyslogEventsQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Number)
    ], RequestSyslogEventsQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_client" }),
        __metadata("design:type", String)
    ], RequestSyslogEventsQueryParams.prototype, "userClient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", Number)
    ], RequestSyslogEventsQueryParams.prototype, "userId", void 0);
    return RequestSyslogEventsQueryParams;
}(SpeakeasyBase));
export { RequestSyslogEventsQueryParams };
var RequestSyslogEventsHeaders = /** @class */ (function (_super) {
    __extends(RequestSyslogEventsHeaders, _super);
    function RequestSyslogEventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestSyslogEventsHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestSyslogEventsHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestSyslogEventsHeaders;
}(SpeakeasyBase));
export { RequestSyslogEventsHeaders };
var RequestSyslogEventsRequest = /** @class */ (function (_super) {
    __extends(RequestSyslogEventsRequest, _super);
    function RequestSyslogEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestSyslogEventsQueryParams)
    ], RequestSyslogEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestSyslogEventsHeaders)
    ], RequestSyslogEventsRequest.prototype, "headers", void 0);
    return RequestSyslogEventsRequest;
}(SpeakeasyBase));
export { RequestSyslogEventsRequest };
var RequestSyslogEventsResponse = /** @class */ (function (_super) {
    __extends(RequestSyslogEventsResponse, _super);
    function RequestSyslogEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestSyslogEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestSyslogEventsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestSyslogEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyslogEventList)
    ], RequestSyslogEventsResponse.prototype, "syslogEventList", void 0);
    return RequestSyslogEventsResponse;
}(SpeakeasyBase));
export { RequestSyslogEventsResponse };

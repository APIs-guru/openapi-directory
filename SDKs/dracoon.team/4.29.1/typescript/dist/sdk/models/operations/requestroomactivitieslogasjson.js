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
var RequestRoomActivitiesLogAsJsonPathParams = /** @class */ (function (_super) {
    __extends(RequestRoomActivitiesLogAsJsonPathParams, _super);
    function RequestRoomActivitiesLogAsJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" }),
        __metadata("design:type", Number)
    ], RequestRoomActivitiesLogAsJsonPathParams.prototype, "roomId", void 0);
    return RequestRoomActivitiesLogAsJsonPathParams;
}(SpeakeasyBase));
export { RequestRoomActivitiesLogAsJsonPathParams };
var RequestRoomActivitiesLogAsJsonQueryParams = /** @class */ (function (_super) {
    __extends(RequestRoomActivitiesLogAsJsonQueryParams, _super);
    function RequestRoomActivitiesLogAsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_end" }),
        __metadata("design:type", String)
    ], RequestRoomActivitiesLogAsJsonQueryParams.prototype, "dateEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_start" }),
        __metadata("design:type", String)
    ], RequestRoomActivitiesLogAsJsonQueryParams.prototype, "dateStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestRoomActivitiesLogAsJsonQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestRoomActivitiesLogAsJsonQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], RequestRoomActivitiesLogAsJsonQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Number)
    ], RequestRoomActivitiesLogAsJsonQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Number)
    ], RequestRoomActivitiesLogAsJsonQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", Number)
    ], RequestRoomActivitiesLogAsJsonQueryParams.prototype, "userId", void 0);
    return RequestRoomActivitiesLogAsJsonQueryParams;
}(SpeakeasyBase));
export { RequestRoomActivitiesLogAsJsonQueryParams };
var RequestRoomActivitiesLogAsJsonHeaders = /** @class */ (function (_super) {
    __extends(RequestRoomActivitiesLogAsJsonHeaders, _super);
    function RequestRoomActivitiesLogAsJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestRoomActivitiesLogAsJsonHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestRoomActivitiesLogAsJsonHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestRoomActivitiesLogAsJsonHeaders;
}(SpeakeasyBase));
export { RequestRoomActivitiesLogAsJsonHeaders };
var RequestRoomActivitiesLogAsJsonRequest = /** @class */ (function (_super) {
    __extends(RequestRoomActivitiesLogAsJsonRequest, _super);
    function RequestRoomActivitiesLogAsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomActivitiesLogAsJsonPathParams)
    ], RequestRoomActivitiesLogAsJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomActivitiesLogAsJsonQueryParams)
    ], RequestRoomActivitiesLogAsJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomActivitiesLogAsJsonHeaders)
    ], RequestRoomActivitiesLogAsJsonRequest.prototype, "headers", void 0);
    return RequestRoomActivitiesLogAsJsonRequest;
}(SpeakeasyBase));
export { RequestRoomActivitiesLogAsJsonRequest };
var RequestRoomActivitiesLogAsJsonResponse = /** @class */ (function (_super) {
    __extends(RequestRoomActivitiesLogAsJsonResponse, _super);
    function RequestRoomActivitiesLogAsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestRoomActivitiesLogAsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestRoomActivitiesLogAsJsonResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LogEventList)
    ], RequestRoomActivitiesLogAsJsonResponse.prototype, "logEventList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestRoomActivitiesLogAsJsonResponse.prototype, "statusCode", void 0);
    return RequestRoomActivitiesLogAsJsonResponse;
}(SpeakeasyBase));
export { RequestRoomActivitiesLogAsJsonResponse };

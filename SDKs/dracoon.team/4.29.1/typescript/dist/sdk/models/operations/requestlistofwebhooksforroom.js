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
var RequestListOfWebhooksForRoomPathParams = /** @class */ (function (_super) {
    __extends(RequestListOfWebhooksForRoomPathParams, _super);
    function RequestListOfWebhooksForRoomPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" }),
        __metadata("design:type", Number)
    ], RequestListOfWebhooksForRoomPathParams.prototype, "roomId", void 0);
    return RequestListOfWebhooksForRoomPathParams;
}(SpeakeasyBase));
export { RequestListOfWebhooksForRoomPathParams };
var RequestListOfWebhooksForRoomQueryParams = /** @class */ (function (_super) {
    __extends(RequestListOfWebhooksForRoomQueryParams, _super);
    function RequestListOfWebhooksForRoomQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestListOfWebhooksForRoomQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestListOfWebhooksForRoomQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestListOfWebhooksForRoomQueryParams.prototype, "offset", void 0);
    return RequestListOfWebhooksForRoomQueryParams;
}(SpeakeasyBase));
export { RequestListOfWebhooksForRoomQueryParams };
var RequestListOfWebhooksForRoomHeaders = /** @class */ (function (_super) {
    __extends(RequestListOfWebhooksForRoomHeaders, _super);
    function RequestListOfWebhooksForRoomHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestListOfWebhooksForRoomHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestListOfWebhooksForRoomHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestListOfWebhooksForRoomHeaders;
}(SpeakeasyBase));
export { RequestListOfWebhooksForRoomHeaders };
var RequestListOfWebhooksForRoomRequest = /** @class */ (function (_super) {
    __extends(RequestListOfWebhooksForRoomRequest, _super);
    function RequestListOfWebhooksForRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestListOfWebhooksForRoomPathParams)
    ], RequestListOfWebhooksForRoomRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestListOfWebhooksForRoomQueryParams)
    ], RequestListOfWebhooksForRoomRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestListOfWebhooksForRoomHeaders)
    ], RequestListOfWebhooksForRoomRequest.prototype, "headers", void 0);
    return RequestListOfWebhooksForRoomRequest;
}(SpeakeasyBase));
export { RequestListOfWebhooksForRoomRequest };
var RequestListOfWebhooksForRoomResponse = /** @class */ (function (_super) {
    __extends(RequestListOfWebhooksForRoomResponse, _super);
    function RequestListOfWebhooksForRoomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestListOfWebhooksForRoomResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestListOfWebhooksForRoomResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoomWebhookList)
    ], RequestListOfWebhooksForRoomResponse.prototype, "roomWebhookList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestListOfWebhooksForRoomResponse.prototype, "statusCode", void 0);
    return RequestListOfWebhooksForRoomResponse;
}(SpeakeasyBase));
export { RequestListOfWebhooksForRoomResponse };

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
var RequestRoomGroupsPathParams = /** @class */ (function (_super) {
    __extends(RequestRoomGroupsPathParams, _super);
    function RequestRoomGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" }),
        __metadata("design:type", Number)
    ], RequestRoomGroupsPathParams.prototype, "roomId", void 0);
    return RequestRoomGroupsPathParams;
}(SpeakeasyBase));
export { RequestRoomGroupsPathParams };
var RequestRoomGroupsQueryParams = /** @class */ (function (_super) {
    __extends(RequestRoomGroupsQueryParams, _super);
    function RequestRoomGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestRoomGroupsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestRoomGroupsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestRoomGroupsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], RequestRoomGroupsQueryParams.prototype, "sort", void 0);
    return RequestRoomGroupsQueryParams;
}(SpeakeasyBase));
export { RequestRoomGroupsQueryParams };
var RequestRoomGroupsHeaders = /** @class */ (function (_super) {
    __extends(RequestRoomGroupsHeaders, _super);
    function RequestRoomGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestRoomGroupsHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestRoomGroupsHeaders;
}(SpeakeasyBase));
export { RequestRoomGroupsHeaders };
var RequestRoomGroupsRequest = /** @class */ (function (_super) {
    __extends(RequestRoomGroupsRequest, _super);
    function RequestRoomGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomGroupsPathParams)
    ], RequestRoomGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomGroupsQueryParams)
    ], RequestRoomGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomGroupsHeaders)
    ], RequestRoomGroupsRequest.prototype, "headers", void 0);
    return RequestRoomGroupsRequest;
}(SpeakeasyBase));
export { RequestRoomGroupsRequest };
var RequestRoomGroupsResponse = /** @class */ (function (_super) {
    __extends(RequestRoomGroupsResponse, _super);
    function RequestRoomGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestRoomGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestRoomGroupsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoomGroupList)
    ], RequestRoomGroupsResponse.prototype, "roomGroupList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestRoomGroupsResponse.prototype, "statusCode", void 0);
    return RequestRoomGroupsResponse;
}(SpeakeasyBase));
export { RequestRoomGroupsResponse };

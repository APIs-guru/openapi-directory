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
var UpdateRoomGroupsPathParams = /** @class */ (function (_super) {
    __extends(UpdateRoomGroupsPathParams, _super);
    function UpdateRoomGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" }),
        __metadata("design:type", Number)
    ], UpdateRoomGroupsPathParams.prototype, "roomId", void 0);
    return UpdateRoomGroupsPathParams;
}(SpeakeasyBase));
export { UpdateRoomGroupsPathParams };
var UpdateRoomGroupsHeaders = /** @class */ (function (_super) {
    __extends(UpdateRoomGroupsHeaders, _super);
    function UpdateRoomGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], UpdateRoomGroupsHeaders.prototype, "xSdsAuthToken", void 0);
    return UpdateRoomGroupsHeaders;
}(SpeakeasyBase));
export { UpdateRoomGroupsHeaders };
var UpdateRoomGroupsRequest = /** @class */ (function (_super) {
    __extends(UpdateRoomGroupsRequest, _super);
    function UpdateRoomGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRoomGroupsPathParams)
    ], UpdateRoomGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRoomGroupsHeaders)
    ], UpdateRoomGroupsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RoomGroupsAddBatchRequest)
    ], UpdateRoomGroupsRequest.prototype, "request", void 0);
    return UpdateRoomGroupsRequest;
}(SpeakeasyBase));
export { UpdateRoomGroupsRequest };
var UpdateRoomGroupsResponse = /** @class */ (function (_super) {
    __extends(UpdateRoomGroupsResponse, _super);
    function UpdateRoomGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRoomGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateRoomGroupsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRoomGroupsResponse.prototype, "statusCode", void 0);
    return UpdateRoomGroupsResponse;
}(SpeakeasyBase));
export { UpdateRoomGroupsResponse };

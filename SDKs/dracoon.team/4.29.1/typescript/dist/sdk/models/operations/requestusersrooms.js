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
var RequestUsersRoomsPathParams = /** @class */ (function (_super) {
    __extends(RequestUsersRoomsPathParams, _super);
    function RequestUsersRoomsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], RequestUsersRoomsPathParams.prototype, "userId", void 0);
    return RequestUsersRoomsPathParams;
}(SpeakeasyBase));
export { RequestUsersRoomsPathParams };
var RequestUsersRoomsQueryParams = /** @class */ (function (_super) {
    __extends(RequestUsersRoomsQueryParams, _super);
    function RequestUsersRoomsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestUsersRoomsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestUsersRoomsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestUsersRoomsQueryParams.prototype, "offset", void 0);
    return RequestUsersRoomsQueryParams;
}(SpeakeasyBase));
export { RequestUsersRoomsQueryParams };
var RequestUsersRoomsHeaders = /** @class */ (function (_super) {
    __extends(RequestUsersRoomsHeaders, _super);
    function RequestUsersRoomsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestUsersRoomsHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestUsersRoomsHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestUsersRoomsHeaders;
}(SpeakeasyBase));
export { RequestUsersRoomsHeaders };
var RequestUsersRoomsRequest = /** @class */ (function (_super) {
    __extends(RequestUsersRoomsRequest, _super);
    function RequestUsersRoomsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUsersRoomsPathParams)
    ], RequestUsersRoomsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUsersRoomsQueryParams)
    ], RequestUsersRoomsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUsersRoomsHeaders)
    ], RequestUsersRoomsRequest.prototype, "headers", void 0);
    return RequestUsersRoomsRequest;
}(SpeakeasyBase));
export { RequestUsersRoomsRequest };
var RequestUsersRoomsResponse = /** @class */ (function (_super) {
    __extends(RequestUsersRoomsResponse, _super);
    function RequestUsersRoomsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestUsersRoomsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestUsersRoomsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoomTreeDataList)
    ], RequestUsersRoomsResponse.prototype, "roomTreeDataList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestUsersRoomsResponse.prototype, "statusCode", void 0);
    return RequestUsersRoomsResponse;
}(SpeakeasyBase));
export { RequestUsersRoomsResponse };

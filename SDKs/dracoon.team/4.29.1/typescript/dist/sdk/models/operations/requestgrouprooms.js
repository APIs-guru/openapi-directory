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
var RequestGroupRoomsPathParams = /** @class */ (function (_super) {
    __extends(RequestGroupRoomsPathParams, _super);
    function RequestGroupRoomsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" }),
        __metadata("design:type", Number)
    ], RequestGroupRoomsPathParams.prototype, "groupId", void 0);
    return RequestGroupRoomsPathParams;
}(SpeakeasyBase));
export { RequestGroupRoomsPathParams };
var RequestGroupRoomsQueryParams = /** @class */ (function (_super) {
    __extends(RequestGroupRoomsQueryParams, _super);
    function RequestGroupRoomsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestGroupRoomsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestGroupRoomsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestGroupRoomsQueryParams.prototype, "offset", void 0);
    return RequestGroupRoomsQueryParams;
}(SpeakeasyBase));
export { RequestGroupRoomsQueryParams };
var RequestGroupRoomsHeaders = /** @class */ (function (_super) {
    __extends(RequestGroupRoomsHeaders, _super);
    function RequestGroupRoomsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestGroupRoomsHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestGroupRoomsHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestGroupRoomsHeaders;
}(SpeakeasyBase));
export { RequestGroupRoomsHeaders };
var RequestGroupRoomsRequest = /** @class */ (function (_super) {
    __extends(RequestGroupRoomsRequest, _super);
    function RequestGroupRoomsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestGroupRoomsPathParams)
    ], RequestGroupRoomsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestGroupRoomsQueryParams)
    ], RequestGroupRoomsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestGroupRoomsHeaders)
    ], RequestGroupRoomsRequest.prototype, "headers", void 0);
    return RequestGroupRoomsRequest;
}(SpeakeasyBase));
export { RequestGroupRoomsRequest };
var RequestGroupRoomsResponse = /** @class */ (function (_super) {
    __extends(RequestGroupRoomsResponse, _super);
    function RequestGroupRoomsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestGroupRoomsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestGroupRoomsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoomTreeDataList)
    ], RequestGroupRoomsResponse.prototype, "roomTreeDataList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestGroupRoomsResponse.prototype, "statusCode", void 0);
    return RequestGroupRoomsResponse;
}(SpeakeasyBase));
export { RequestGroupRoomsResponse };

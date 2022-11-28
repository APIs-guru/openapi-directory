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
var RemoveRoomRescueKeyPairPathParams = /** @class */ (function (_super) {
    __extends(RemoveRoomRescueKeyPairPathParams, _super);
    function RemoveRoomRescueKeyPairPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" }),
        __metadata("design:type", Number)
    ], RemoveRoomRescueKeyPairPathParams.prototype, "roomId", void 0);
    return RemoveRoomRescueKeyPairPathParams;
}(SpeakeasyBase));
export { RemoveRoomRescueKeyPairPathParams };
var RemoveRoomRescueKeyPairQueryParams = /** @class */ (function (_super) {
    __extends(RemoveRoomRescueKeyPairQueryParams, _super);
    function RemoveRoomRescueKeyPairQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], RemoveRoomRescueKeyPairQueryParams.prototype, "version", void 0);
    return RemoveRoomRescueKeyPairQueryParams;
}(SpeakeasyBase));
export { RemoveRoomRescueKeyPairQueryParams };
var RemoveRoomRescueKeyPairHeaders = /** @class */ (function (_super) {
    __extends(RemoveRoomRescueKeyPairHeaders, _super);
    function RemoveRoomRescueKeyPairHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RemoveRoomRescueKeyPairHeaders.prototype, "xSdsAuthToken", void 0);
    return RemoveRoomRescueKeyPairHeaders;
}(SpeakeasyBase));
export { RemoveRoomRescueKeyPairHeaders };
var RemoveRoomRescueKeyPairRequest = /** @class */ (function (_super) {
    __extends(RemoveRoomRescueKeyPairRequest, _super);
    function RemoveRoomRescueKeyPairRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveRoomRescueKeyPairPathParams)
    ], RemoveRoomRescueKeyPairRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveRoomRescueKeyPairQueryParams)
    ], RemoveRoomRescueKeyPairRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveRoomRescueKeyPairHeaders)
    ], RemoveRoomRescueKeyPairRequest.prototype, "headers", void 0);
    return RemoveRoomRescueKeyPairRequest;
}(SpeakeasyBase));
export { RemoveRoomRescueKeyPairRequest };
var RemoveRoomRescueKeyPairResponse = /** @class */ (function (_super) {
    __extends(RemoveRoomRescueKeyPairResponse, _super);
    function RemoveRoomRescueKeyPairResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveRoomRescueKeyPairResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveRoomRescueKeyPairResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveRoomRescueKeyPairResponse.prototype, "statusCode", void 0);
    return RemoveRoomRescueKeyPairResponse;
}(SpeakeasyBase));
export { RemoveRoomRescueKeyPairResponse };

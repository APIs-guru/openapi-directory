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
var CreateAndPreserveRoomRescueKeyPairPathParams = /** @class */ (function (_super) {
    __extends(CreateAndPreserveRoomRescueKeyPairPathParams, _super);
    function CreateAndPreserveRoomRescueKeyPairPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" }),
        __metadata("design:type", Number)
    ], CreateAndPreserveRoomRescueKeyPairPathParams.prototype, "roomId", void 0);
    return CreateAndPreserveRoomRescueKeyPairPathParams;
}(SpeakeasyBase));
export { CreateAndPreserveRoomRescueKeyPairPathParams };
var CreateAndPreserveRoomRescueKeyPairHeaders = /** @class */ (function (_super) {
    __extends(CreateAndPreserveRoomRescueKeyPairHeaders, _super);
    function CreateAndPreserveRoomRescueKeyPairHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], CreateAndPreserveRoomRescueKeyPairHeaders.prototype, "xSdsAuthToken", void 0);
    return CreateAndPreserveRoomRescueKeyPairHeaders;
}(SpeakeasyBase));
export { CreateAndPreserveRoomRescueKeyPairHeaders };
var CreateAndPreserveRoomRescueKeyPairRequest = /** @class */ (function (_super) {
    __extends(CreateAndPreserveRoomRescueKeyPairRequest, _super);
    function CreateAndPreserveRoomRescueKeyPairRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAndPreserveRoomRescueKeyPairPathParams)
    ], CreateAndPreserveRoomRescueKeyPairRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAndPreserveRoomRescueKeyPairHeaders)
    ], CreateAndPreserveRoomRescueKeyPairRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateKeyPairRequest)
    ], CreateAndPreserveRoomRescueKeyPairRequest.prototype, "request", void 0);
    return CreateAndPreserveRoomRescueKeyPairRequest;
}(SpeakeasyBase));
export { CreateAndPreserveRoomRescueKeyPairRequest };
var CreateAndPreserveRoomRescueKeyPairResponse = /** @class */ (function (_super) {
    __extends(CreateAndPreserveRoomRescueKeyPairResponse, _super);
    function CreateAndPreserveRoomRescueKeyPairResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAndPreserveRoomRescueKeyPairResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateAndPreserveRoomRescueKeyPairResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAndPreserveRoomRescueKeyPairResponse.prototype, "statusCode", void 0);
    return CreateAndPreserveRoomRescueKeyPairResponse;
}(SpeakeasyBase));
export { CreateAndPreserveRoomRescueKeyPairResponse };

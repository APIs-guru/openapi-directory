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
var RequestRoomRescueKeyPairsPathParams = /** @class */ (function (_super) {
    __extends(RequestRoomRescueKeyPairsPathParams, _super);
    function RequestRoomRescueKeyPairsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" }),
        __metadata("design:type", Number)
    ], RequestRoomRescueKeyPairsPathParams.prototype, "roomId", void 0);
    return RequestRoomRescueKeyPairsPathParams;
}(SpeakeasyBase));
export { RequestRoomRescueKeyPairsPathParams };
var RequestRoomRescueKeyPairsHeaders = /** @class */ (function (_super) {
    __extends(RequestRoomRescueKeyPairsHeaders, _super);
    function RequestRoomRescueKeyPairsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestRoomRescueKeyPairsHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestRoomRescueKeyPairsHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestRoomRescueKeyPairsHeaders;
}(SpeakeasyBase));
export { RequestRoomRescueKeyPairsHeaders };
var RequestRoomRescueKeyPairsRequest = /** @class */ (function (_super) {
    __extends(RequestRoomRescueKeyPairsRequest, _super);
    function RequestRoomRescueKeyPairsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomRescueKeyPairsPathParams)
    ], RequestRoomRescueKeyPairsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomRescueKeyPairsHeaders)
    ], RequestRoomRescueKeyPairsRequest.prototype, "headers", void 0);
    return RequestRoomRescueKeyPairsRequest;
}(SpeakeasyBase));
export { RequestRoomRescueKeyPairsRequest };
var RequestRoomRescueKeyPairsResponseOutput = /** @class */ (function (_super) {
    __extends(RequestRoomRescueKeyPairsResponseOutput, _super);
    function RequestRoomRescueKeyPairsResponseOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestRoomRescueKeyPairsResponseOutput.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestRoomRescueKeyPairsResponseOutput.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestRoomRescueKeyPairsResponseOutput.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.UserKeyPairContainerOutput }),
        __metadata("design:type", Array)
    ], RequestRoomRescueKeyPairsResponseOutput.prototype, "userKeyPairContainers", void 0);
    return RequestRoomRescueKeyPairsResponseOutput;
}(SpeakeasyBase));
export { RequestRoomRescueKeyPairsResponseOutput };

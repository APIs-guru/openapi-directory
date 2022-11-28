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
var ToggleNotificationChannelsHeaders = /** @class */ (function (_super) {
    __extends(ToggleNotificationChannelsHeaders, _super);
    function ToggleNotificationChannelsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], ToggleNotificationChannelsHeaders.prototype, "xSdsAuthToken", void 0);
    return ToggleNotificationChannelsHeaders;
}(SpeakeasyBase));
export { ToggleNotificationChannelsHeaders };
var ToggleNotificationChannelsRequest = /** @class */ (function (_super) {
    __extends(ToggleNotificationChannelsRequest, _super);
    function ToggleNotificationChannelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToggleNotificationChannelsHeaders)
    ], ToggleNotificationChannelsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NotificationChannelActivationRequest)
    ], ToggleNotificationChannelsRequest.prototype, "request", void 0);
    return ToggleNotificationChannelsRequest;
}(SpeakeasyBase));
export { ToggleNotificationChannelsRequest };
var ToggleNotificationChannelsResponse = /** @class */ (function (_super) {
    __extends(ToggleNotificationChannelsResponse, _super);
    function ToggleNotificationChannelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ToggleNotificationChannelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], ToggleNotificationChannelsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotificationChannelList)
    ], ToggleNotificationChannelsResponse.prototype, "notificationChannelList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ToggleNotificationChannelsResponse.prototype, "statusCode", void 0);
    return ToggleNotificationChannelsResponse;
}(SpeakeasyBase));
export { ToggleNotificationChannelsResponse };

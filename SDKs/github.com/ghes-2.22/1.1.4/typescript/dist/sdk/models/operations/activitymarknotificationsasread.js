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
var ActivityMarkNotificationsAsReadRequestBody = /** @class */ (function (_super) {
    __extends(ActivityMarkNotificationsAsReadRequestBody, _super);
    function ActivityMarkNotificationsAsReadRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_read_at" }),
        __metadata("design:type", Date)
    ], ActivityMarkNotificationsAsReadRequestBody.prototype, "lastReadAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read" }),
        __metadata("design:type", Boolean)
    ], ActivityMarkNotificationsAsReadRequestBody.prototype, "read", void 0);
    return ActivityMarkNotificationsAsReadRequestBody;
}(SpeakeasyBase));
export { ActivityMarkNotificationsAsReadRequestBody };
var ActivityMarkNotificationsAsRead202ApplicationJson = /** @class */ (function (_super) {
    __extends(ActivityMarkNotificationsAsRead202ApplicationJson, _super);
    function ActivityMarkNotificationsAsRead202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ActivityMarkNotificationsAsRead202ApplicationJson.prototype, "message", void 0);
    return ActivityMarkNotificationsAsRead202ApplicationJson;
}(SpeakeasyBase));
export { ActivityMarkNotificationsAsRead202ApplicationJson };
var ActivityMarkNotificationsAsReadRequest = /** @class */ (function (_super) {
    __extends(ActivityMarkNotificationsAsReadRequest, _super);
    function ActivityMarkNotificationsAsReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActivityMarkNotificationsAsReadRequestBody)
    ], ActivityMarkNotificationsAsReadRequest.prototype, "request", void 0);
    return ActivityMarkNotificationsAsReadRequest;
}(SpeakeasyBase));
export { ActivityMarkNotificationsAsReadRequest };
var ActivityMarkNotificationsAsReadResponse = /** @class */ (function (_super) {
    __extends(ActivityMarkNotificationsAsReadResponse, _super);
    function ActivityMarkNotificationsAsReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivityMarkNotificationsAsReadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivityMarkNotificationsAsReadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityMarkNotificationsAsRead202ApplicationJson)
    ], ActivityMarkNotificationsAsReadResponse.prototype, "activityMarkNotificationsAsRead202ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ActivityMarkNotificationsAsReadResponse.prototype, "basicError", void 0);
    return ActivityMarkNotificationsAsReadResponse;
}(SpeakeasyBase));
export { ActivityMarkNotificationsAsReadResponse };

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
var PatchNotificationsIdPathParams = /** @class */ (function (_super) {
    __extends(PatchNotificationsIdPathParams, _super);
    function PatchNotificationsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchNotificationsIdPathParams.prototype, "id", void 0);
    return PatchNotificationsIdPathParams;
}(SpeakeasyBase));
export { PatchNotificationsIdPathParams };
var PatchNotificationsIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchNotificationsIdRequestBody, _super);
    function PatchNotificationsIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notify_on_copy" }),
        __metadata("design:type", Boolean)
    ], PatchNotificationsIdRequestBody.prototype, "notifyOnCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notify_user_actions" }),
        __metadata("design:type", Boolean)
    ], PatchNotificationsIdRequestBody.prototype, "notifyUserActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=recursive" }),
        __metadata("design:type", Boolean)
    ], PatchNotificationsIdRequestBody.prototype, "recursive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=send_interval" }),
        __metadata("design:type", String)
    ], PatchNotificationsIdRequestBody.prototype, "sendInterval", void 0);
    return PatchNotificationsIdRequestBody;
}(SpeakeasyBase));
export { PatchNotificationsIdRequestBody };
var PatchNotificationsIdRequest = /** @class */ (function (_super) {
    __extends(PatchNotificationsIdRequest, _super);
    function PatchNotificationsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchNotificationsIdPathParams)
    ], PatchNotificationsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchNotificationsIdRequestBody)
    ], PatchNotificationsIdRequest.prototype, "request", void 0);
    return PatchNotificationsIdRequest;
}(SpeakeasyBase));
export { PatchNotificationsIdRequest };
var PatchNotificationsIdResponse = /** @class */ (function (_super) {
    __extends(PatchNotificationsIdResponse, _super);
    function PatchNotificationsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchNotificationsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotificationEntity)
    ], PatchNotificationsIdResponse.prototype, "notificationEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchNotificationsIdResponse.prototype, "statusCode", void 0);
    return PatchNotificationsIdResponse;
}(SpeakeasyBase));
export { PatchNotificationsIdResponse };

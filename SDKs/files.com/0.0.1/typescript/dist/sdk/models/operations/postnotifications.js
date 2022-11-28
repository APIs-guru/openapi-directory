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
var PostNotificationsRequestBody = /** @class */ (function (_super) {
    __extends(PostNotificationsRequestBody, _super);
    function PostNotificationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_id" }),
        __metadata("design:type", Number)
    ], PostNotificationsRequestBody.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notify_on_copy" }),
        __metadata("design:type", Boolean)
    ], PostNotificationsRequestBody.prototype, "notifyOnCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notify_user_actions" }),
        __metadata("design:type", Boolean)
    ], PostNotificationsRequestBody.prototype, "notifyUserActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], PostNotificationsRequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=recursive" }),
        __metadata("design:type", Boolean)
    ], PostNotificationsRequestBody.prototype, "recursive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=send_interval" }),
        __metadata("design:type", String)
    ], PostNotificationsRequestBody.prototype, "sendInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_id" }),
        __metadata("design:type", Number)
    ], PostNotificationsRequestBody.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=username" }),
        __metadata("design:type", String)
    ], PostNotificationsRequestBody.prototype, "username", void 0);
    return PostNotificationsRequestBody;
}(SpeakeasyBase));
export { PostNotificationsRequestBody };
var PostNotificationsRequest = /** @class */ (function (_super) {
    __extends(PostNotificationsRequest, _super);
    function PostNotificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostNotificationsRequestBody)
    ], PostNotificationsRequest.prototype, "request", void 0);
    return PostNotificationsRequest;
}(SpeakeasyBase));
export { PostNotificationsRequest };
var PostNotificationsResponse = /** @class */ (function (_super) {
    __extends(PostNotificationsResponse, _super);
    function PostNotificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostNotificationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotificationEntity)
    ], PostNotificationsResponse.prototype, "notificationEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostNotificationsResponse.prototype, "statusCode", void 0);
    return PostNotificationsResponse;
}(SpeakeasyBase));
export { PostNotificationsResponse };

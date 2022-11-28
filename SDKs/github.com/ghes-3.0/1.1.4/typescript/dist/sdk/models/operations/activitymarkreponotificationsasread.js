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
var ActivityMarkRepoNotificationsAsReadPathParams = /** @class */ (function (_super) {
    __extends(ActivityMarkRepoNotificationsAsReadPathParams, _super);
    function ActivityMarkRepoNotificationsAsReadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActivityMarkRepoNotificationsAsReadPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActivityMarkRepoNotificationsAsReadPathParams.prototype, "repo", void 0);
    return ActivityMarkRepoNotificationsAsReadPathParams;
}(SpeakeasyBase));
export { ActivityMarkRepoNotificationsAsReadPathParams };
var ActivityMarkRepoNotificationsAsReadRequestBody = /** @class */ (function (_super) {
    __extends(ActivityMarkRepoNotificationsAsReadRequestBody, _super);
    function ActivityMarkRepoNotificationsAsReadRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_read_at" }),
        __metadata("design:type", Date)
    ], ActivityMarkRepoNotificationsAsReadRequestBody.prototype, "lastReadAt", void 0);
    return ActivityMarkRepoNotificationsAsReadRequestBody;
}(SpeakeasyBase));
export { ActivityMarkRepoNotificationsAsReadRequestBody };
var ActivityMarkRepoNotificationsAsRead202ApplicationJson = /** @class */ (function (_super) {
    __extends(ActivityMarkRepoNotificationsAsRead202ApplicationJson, _super);
    function ActivityMarkRepoNotificationsAsRead202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ActivityMarkRepoNotificationsAsRead202ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityMarkRepoNotificationsAsRead202ApplicationJson.prototype, "url", void 0);
    return ActivityMarkRepoNotificationsAsRead202ApplicationJson;
}(SpeakeasyBase));
export { ActivityMarkRepoNotificationsAsRead202ApplicationJson };
var ActivityMarkRepoNotificationsAsReadRequest = /** @class */ (function (_super) {
    __extends(ActivityMarkRepoNotificationsAsReadRequest, _super);
    function ActivityMarkRepoNotificationsAsReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityMarkRepoNotificationsAsReadPathParams)
    ], ActivityMarkRepoNotificationsAsReadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActivityMarkRepoNotificationsAsReadRequestBody)
    ], ActivityMarkRepoNotificationsAsReadRequest.prototype, "request", void 0);
    return ActivityMarkRepoNotificationsAsReadRequest;
}(SpeakeasyBase));
export { ActivityMarkRepoNotificationsAsReadRequest };
var ActivityMarkRepoNotificationsAsReadResponse = /** @class */ (function (_super) {
    __extends(ActivityMarkRepoNotificationsAsReadResponse, _super);
    function ActivityMarkRepoNotificationsAsReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivityMarkRepoNotificationsAsReadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivityMarkRepoNotificationsAsReadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityMarkRepoNotificationsAsRead202ApplicationJson)
    ], ActivityMarkRepoNotificationsAsReadResponse.prototype, "activityMarkRepoNotificationsAsRead202ApplicationJsonObject", void 0);
    return ActivityMarkRepoNotificationsAsReadResponse;
}(SpeakeasyBase));
export { ActivityMarkRepoNotificationsAsReadResponse };

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
var ActivitySetThreadSubscriptionPathParams = /** @class */ (function (_super) {
    __extends(ActivitySetThreadSubscriptionPathParams, _super);
    function ActivitySetThreadSubscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thread_id" }),
        __metadata("design:type", Number)
    ], ActivitySetThreadSubscriptionPathParams.prototype, "threadId", void 0);
    return ActivitySetThreadSubscriptionPathParams;
}(SpeakeasyBase));
export { ActivitySetThreadSubscriptionPathParams };
var ActivitySetThreadSubscriptionRequestBody = /** @class */ (function (_super) {
    __extends(ActivitySetThreadSubscriptionRequestBody, _super);
    function ActivitySetThreadSubscriptionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignored" }),
        __metadata("design:type", Boolean)
    ], ActivitySetThreadSubscriptionRequestBody.prototype, "ignored", void 0);
    return ActivitySetThreadSubscriptionRequestBody;
}(SpeakeasyBase));
export { ActivitySetThreadSubscriptionRequestBody };
var ActivitySetThreadSubscriptionRequest = /** @class */ (function (_super) {
    __extends(ActivitySetThreadSubscriptionRequest, _super);
    function ActivitySetThreadSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitySetThreadSubscriptionPathParams)
    ], ActivitySetThreadSubscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActivitySetThreadSubscriptionRequestBody)
    ], ActivitySetThreadSubscriptionRequest.prototype, "request", void 0);
    return ActivitySetThreadSubscriptionRequest;
}(SpeakeasyBase));
export { ActivitySetThreadSubscriptionRequest };
var ActivitySetThreadSubscriptionResponse = /** @class */ (function (_super) {
    __extends(ActivitySetThreadSubscriptionResponse, _super);
    function ActivitySetThreadSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivitySetThreadSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivitySetThreadSubscriptionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ActivitySetThreadSubscriptionResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ThreadSubscription)
    ], ActivitySetThreadSubscriptionResponse.prototype, "threadSubscription", void 0);
    return ActivitySetThreadSubscriptionResponse;
}(SpeakeasyBase));
export { ActivitySetThreadSubscriptionResponse };

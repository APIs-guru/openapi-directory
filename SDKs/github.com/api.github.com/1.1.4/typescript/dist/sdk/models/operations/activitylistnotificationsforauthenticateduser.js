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
var ActivityListNotificationsForAuthenticatedUserQueryParams = /** @class */ (function (_super) {
    __extends(ActivityListNotificationsForAuthenticatedUserQueryParams, _super);
    function ActivityListNotificationsForAuthenticatedUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", Boolean)
    ], ActivityListNotificationsForAuthenticatedUserQueryParams.prototype, "all", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], ActivityListNotificationsForAuthenticatedUserQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActivityListNotificationsForAuthenticatedUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=participating" }),
        __metadata("design:type", Boolean)
    ], ActivityListNotificationsForAuthenticatedUserQueryParams.prototype, "participating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActivityListNotificationsForAuthenticatedUserQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], ActivityListNotificationsForAuthenticatedUserQueryParams.prototype, "since", void 0);
    return ActivityListNotificationsForAuthenticatedUserQueryParams;
}(SpeakeasyBase));
export { ActivityListNotificationsForAuthenticatedUserQueryParams };
var ActivityListNotificationsForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(ActivityListNotificationsForAuthenticatedUserRequest, _super);
    function ActivityListNotificationsForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityListNotificationsForAuthenticatedUserQueryParams)
    ], ActivityListNotificationsForAuthenticatedUserRequest.prototype, "queryParams", void 0);
    return ActivityListNotificationsForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { ActivityListNotificationsForAuthenticatedUserRequest };
var ActivityListNotificationsForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(ActivityListNotificationsForAuthenticatedUserResponse, _super);
    function ActivityListNotificationsForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivityListNotificationsForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActivityListNotificationsForAuthenticatedUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivityListNotificationsForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ActivityListNotificationsForAuthenticatedUserResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Thread }),
        __metadata("design:type", Array)
    ], ActivityListNotificationsForAuthenticatedUserResponse.prototype, "threads", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ActivityListNotificationsForAuthenticatedUserResponse.prototype, "validationError", void 0);
    return ActivityListNotificationsForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { ActivityListNotificationsForAuthenticatedUserResponse };

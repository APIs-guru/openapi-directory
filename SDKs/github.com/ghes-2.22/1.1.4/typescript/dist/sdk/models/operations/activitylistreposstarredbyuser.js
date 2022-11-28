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
var ActivityListReposStarredByUserPathParams = /** @class */ (function (_super) {
    __extends(ActivityListReposStarredByUserPathParams, _super);
    function ActivityListReposStarredByUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], ActivityListReposStarredByUserPathParams.prototype, "username", void 0);
    return ActivityListReposStarredByUserPathParams;
}(SpeakeasyBase));
export { ActivityListReposStarredByUserPathParams };
var ActivityListReposStarredByUserQueryParams = /** @class */ (function (_super) {
    __extends(ActivityListReposStarredByUserQueryParams, _super);
    function ActivityListReposStarredByUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], ActivityListReposStarredByUserQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActivityListReposStarredByUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActivityListReposStarredByUserQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ActivityListReposStarredByUserQueryParams.prototype, "sort", void 0);
    return ActivityListReposStarredByUserQueryParams;
}(SpeakeasyBase));
export { ActivityListReposStarredByUserQueryParams };
var ActivityListReposStarredByUserRequest = /** @class */ (function (_super) {
    __extends(ActivityListReposStarredByUserRequest, _super);
    function ActivityListReposStarredByUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityListReposStarredByUserPathParams)
    ], ActivityListReposStarredByUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityListReposStarredByUserQueryParams)
    ], ActivityListReposStarredByUserRequest.prototype, "queryParams", void 0);
    return ActivityListReposStarredByUserRequest;
}(SpeakeasyBase));
export { ActivityListReposStarredByUserRequest };
var ActivityListReposStarredByUserResponse = /** @class */ (function (_super) {
    __extends(ActivityListReposStarredByUserResponse, _super);
    function ActivityListReposStarredByUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivityListReposStarredByUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActivityListReposStarredByUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivityListReposStarredByUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ActivityListReposStarredByUserResponse.prototype, "activityListReposStarredByUser200ApplicationJsonAnyOf", void 0);
    return ActivityListReposStarredByUserResponse;
}(SpeakeasyBase));
export { ActivityListReposStarredByUserResponse };

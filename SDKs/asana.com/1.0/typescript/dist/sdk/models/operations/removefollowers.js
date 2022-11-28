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
var RemoveFollowersPathParams = /** @class */ (function (_super) {
    __extends(RemoveFollowersPathParams, _super);
    function RemoveFollowersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], RemoveFollowersPathParams.prototype, "goalGid", void 0);
    return RemoveFollowersPathParams;
}(SpeakeasyBase));
export { RemoveFollowersPathParams };
var RemoveFollowersQueryParams = /** @class */ (function (_super) {
    __extends(RemoveFollowersQueryParams, _super);
    function RemoveFollowersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveFollowersQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveFollowersQueryParams.prototype, "optPretty", void 0);
    return RemoveFollowersQueryParams;
}(SpeakeasyBase));
export { RemoveFollowersQueryParams };
var RemoveFollowersRequestBody = /** @class */ (function (_super) {
    __extends(RemoveFollowersRequestBody, _super);
    function RemoveFollowersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskAddFollowersRequest)
    ], RemoveFollowersRequestBody.prototype, "data", void 0);
    return RemoveFollowersRequestBody;
}(SpeakeasyBase));
export { RemoveFollowersRequestBody };
var RemoveFollowers201ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveFollowers201ApplicationJson, _super);
    function RemoveFollowers201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalResponse)
    ], RemoveFollowers201ApplicationJson.prototype, "data", void 0);
    return RemoveFollowers201ApplicationJson;
}(SpeakeasyBase));
export { RemoveFollowers201ApplicationJson };
var RemoveFollowersRequest = /** @class */ (function (_super) {
    __extends(RemoveFollowersRequest, _super);
    function RemoveFollowersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFollowersPathParams)
    ], RemoveFollowersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFollowersQueryParams)
    ], RemoveFollowersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveFollowersRequestBody)
    ], RemoveFollowersRequest.prototype, "request", void 0);
    return RemoveFollowersRequest;
}(SpeakeasyBase));
export { RemoveFollowersRequest };
var RemoveFollowersResponse = /** @class */ (function (_super) {
    __extends(RemoveFollowersResponse, _super);
    function RemoveFollowersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveFollowersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveFollowersResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveFollowersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFollowers201ApplicationJson)
    ], RemoveFollowersResponse.prototype, "removeFollowers201ApplicationJsonObject", void 0);
    return RemoveFollowersResponse;
}(SpeakeasyBase));
export { RemoveFollowersResponse };

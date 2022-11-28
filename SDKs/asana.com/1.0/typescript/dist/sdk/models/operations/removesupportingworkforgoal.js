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
var RemoveSupportingWorkForGoalPathParams = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoalPathParams, _super);
    function RemoveSupportingWorkForGoalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], RemoveSupportingWorkForGoalPathParams.prototype, "goalGid", void 0);
    return RemoveSupportingWorkForGoalPathParams;
}(SpeakeasyBase));
export { RemoveSupportingWorkForGoalPathParams };
var RemoveSupportingWorkForGoalQueryParams = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoalQueryParams, _super);
    function RemoveSupportingWorkForGoalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveSupportingWorkForGoalQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveSupportingWorkForGoalQueryParams.prototype, "optPretty", void 0);
    return RemoveSupportingWorkForGoalQueryParams;
}(SpeakeasyBase));
export { RemoveSupportingWorkForGoalQueryParams };
var RemoveSupportingWorkForGoalRequestBody = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoalRequestBody, _super);
    function RemoveSupportingWorkForGoalRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalAddSupportingWorkRequest)
    ], RemoveSupportingWorkForGoalRequestBody.prototype, "data", void 0);
    return RemoveSupportingWorkForGoalRequestBody;
}(SpeakeasyBase));
export { RemoveSupportingWorkForGoalRequestBody };
var RemoveSupportingWorkForGoal200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoal200ApplicationJson, _super);
    function RemoveSupportingWorkForGoal200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveSupportingWorkForGoal200ApplicationJson.prototype, "data", void 0);
    return RemoveSupportingWorkForGoal200ApplicationJson;
}(SpeakeasyBase));
export { RemoveSupportingWorkForGoal200ApplicationJson };
var RemoveSupportingWorkForGoalRequest = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoalRequest, _super);
    function RemoveSupportingWorkForGoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveSupportingWorkForGoalPathParams)
    ], RemoveSupportingWorkForGoalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveSupportingWorkForGoalQueryParams)
    ], RemoveSupportingWorkForGoalRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveSupportingWorkForGoalRequestBody)
    ], RemoveSupportingWorkForGoalRequest.prototype, "request", void 0);
    return RemoveSupportingWorkForGoalRequest;
}(SpeakeasyBase));
export { RemoveSupportingWorkForGoalRequest };
var RemoveSupportingWorkForGoalResponse = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoalResponse, _super);
    function RemoveSupportingWorkForGoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveSupportingWorkForGoalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveSupportingWorkForGoalResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveSupportingWorkForGoalResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveSupportingWorkForGoal200ApplicationJson)
    ], RemoveSupportingWorkForGoalResponse.prototype, "removeSupportingWorkForGoal200ApplicationJsonObject", void 0);
    return RemoveSupportingWorkForGoalResponse;
}(SpeakeasyBase));
export { RemoveSupportingWorkForGoalResponse };

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
var UpdateGoalPathParams = /** @class */ (function (_super) {
    __extends(UpdateGoalPathParams, _super);
    function UpdateGoalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], UpdateGoalPathParams.prototype, "goalGid", void 0);
    return UpdateGoalPathParams;
}(SpeakeasyBase));
export { UpdateGoalPathParams };
var UpdateGoalQueryParams = /** @class */ (function (_super) {
    __extends(UpdateGoalQueryParams, _super);
    function UpdateGoalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], UpdateGoalQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], UpdateGoalQueryParams.prototype, "optPretty", void 0);
    return UpdateGoalQueryParams;
}(SpeakeasyBase));
export { UpdateGoalQueryParams };
var UpdateGoalRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdateGoalRequestBodyInput, _super);
    function UpdateGoalRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalRequestInput)
    ], UpdateGoalRequestBodyInput.prototype, "data", void 0);
    return UpdateGoalRequestBodyInput;
}(SpeakeasyBase));
export { UpdateGoalRequestBodyInput };
var UpdateGoal200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateGoal200ApplicationJson, _super);
    function UpdateGoal200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalResponse)
    ], UpdateGoal200ApplicationJson.prototype, "data", void 0);
    return UpdateGoal200ApplicationJson;
}(SpeakeasyBase));
export { UpdateGoal200ApplicationJson };
var UpdateGoalRequest = /** @class */ (function (_super) {
    __extends(UpdateGoalRequest, _super);
    function UpdateGoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGoalPathParams)
    ], UpdateGoalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGoalQueryParams)
    ], UpdateGoalRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGoalRequestBodyInput)
    ], UpdateGoalRequest.prototype, "request", void 0);
    return UpdateGoalRequest;
}(SpeakeasyBase));
export { UpdateGoalRequest };
var UpdateGoalResponse = /** @class */ (function (_super) {
    __extends(UpdateGoalResponse, _super);
    function UpdateGoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGoalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateGoalResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGoalResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGoal200ApplicationJson)
    ], UpdateGoalResponse.prototype, "updateGoal200ApplicationJsonObject", void 0);
    return UpdateGoalResponse;
}(SpeakeasyBase));
export { UpdateGoalResponse };

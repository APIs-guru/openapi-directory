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
var UpdateGoalMetricPathParams = /** @class */ (function (_super) {
    __extends(UpdateGoalMetricPathParams, _super);
    function UpdateGoalMetricPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], UpdateGoalMetricPathParams.prototype, "goalGid", void 0);
    return UpdateGoalMetricPathParams;
}(SpeakeasyBase));
export { UpdateGoalMetricPathParams };
var UpdateGoalMetricQueryParams = /** @class */ (function (_super) {
    __extends(UpdateGoalMetricQueryParams, _super);
    function UpdateGoalMetricQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], UpdateGoalMetricQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], UpdateGoalMetricQueryParams.prototype, "optPretty", void 0);
    return UpdateGoalMetricQueryParams;
}(SpeakeasyBase));
export { UpdateGoalMetricQueryParams };
var UpdateGoalMetricRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdateGoalMetricRequestBodyInput, _super);
    function UpdateGoalMetricRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalMetricCurrentValueRequestInput)
    ], UpdateGoalMetricRequestBodyInput.prototype, "data", void 0);
    return UpdateGoalMetricRequestBodyInput;
}(SpeakeasyBase));
export { UpdateGoalMetricRequestBodyInput };
var UpdateGoalMetric200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateGoalMetric200ApplicationJson, _super);
    function UpdateGoalMetric200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalResponse)
    ], UpdateGoalMetric200ApplicationJson.prototype, "data", void 0);
    return UpdateGoalMetric200ApplicationJson;
}(SpeakeasyBase));
export { UpdateGoalMetric200ApplicationJson };
var UpdateGoalMetricRequest = /** @class */ (function (_super) {
    __extends(UpdateGoalMetricRequest, _super);
    function UpdateGoalMetricRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGoalMetricPathParams)
    ], UpdateGoalMetricRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGoalMetricQueryParams)
    ], UpdateGoalMetricRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGoalMetricRequestBodyInput)
    ], UpdateGoalMetricRequest.prototype, "request", void 0);
    return UpdateGoalMetricRequest;
}(SpeakeasyBase));
export { UpdateGoalMetricRequest };
var UpdateGoalMetricResponse = /** @class */ (function (_super) {
    __extends(UpdateGoalMetricResponse, _super);
    function UpdateGoalMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGoalMetricResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateGoalMetricResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGoalMetricResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGoalMetric200ApplicationJson)
    ], UpdateGoalMetricResponse.prototype, "updateGoalMetric200ApplicationJsonObject", void 0);
    return UpdateGoalMetricResponse;
}(SpeakeasyBase));
export { UpdateGoalMetricResponse };

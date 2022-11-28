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
var CreateGoalMetricPathParams = /** @class */ (function (_super) {
    __extends(CreateGoalMetricPathParams, _super);
    function CreateGoalMetricPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], CreateGoalMetricPathParams.prototype, "goalGid", void 0);
    return CreateGoalMetricPathParams;
}(SpeakeasyBase));
export { CreateGoalMetricPathParams };
var CreateGoalMetricQueryParams = /** @class */ (function (_super) {
    __extends(CreateGoalMetricQueryParams, _super);
    function CreateGoalMetricQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateGoalMetricQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateGoalMetricQueryParams.prototype, "optPretty", void 0);
    return CreateGoalMetricQueryParams;
}(SpeakeasyBase));
export { CreateGoalMetricQueryParams };
var CreateGoalMetricRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateGoalMetricRequestBodyInput, _super);
    function CreateGoalMetricRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalMetricRequestInput)
    ], CreateGoalMetricRequestBodyInput.prototype, "data", void 0);
    return CreateGoalMetricRequestBodyInput;
}(SpeakeasyBase));
export { CreateGoalMetricRequestBodyInput };
var CreateGoalMetric200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGoalMetric200ApplicationJson, _super);
    function CreateGoalMetric200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalResponse)
    ], CreateGoalMetric200ApplicationJson.prototype, "data", void 0);
    return CreateGoalMetric200ApplicationJson;
}(SpeakeasyBase));
export { CreateGoalMetric200ApplicationJson };
var CreateGoalMetricRequest = /** @class */ (function (_super) {
    __extends(CreateGoalMetricRequest, _super);
    function CreateGoalMetricRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGoalMetricPathParams)
    ], CreateGoalMetricRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGoalMetricQueryParams)
    ], CreateGoalMetricRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateGoalMetricRequestBodyInput)
    ], CreateGoalMetricRequest.prototype, "request", void 0);
    return CreateGoalMetricRequest;
}(SpeakeasyBase));
export { CreateGoalMetricRequest };
var CreateGoalMetricResponse = /** @class */ (function (_super) {
    __extends(CreateGoalMetricResponse, _super);
    function CreateGoalMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateGoalMetricResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateGoalMetricResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateGoalMetricResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGoalMetric200ApplicationJson)
    ], CreateGoalMetricResponse.prototype, "createGoalMetric200ApplicationJsonObject", void 0);
    return CreateGoalMetricResponse;
}(SpeakeasyBase));
export { CreateGoalMetricResponse };

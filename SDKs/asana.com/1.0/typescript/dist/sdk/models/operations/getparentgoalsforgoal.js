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
var GetParentGoalsForGoalPathParams = /** @class */ (function (_super) {
    __extends(GetParentGoalsForGoalPathParams, _super);
    function GetParentGoalsForGoalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], GetParentGoalsForGoalPathParams.prototype, "goalGid", void 0);
    return GetParentGoalsForGoalPathParams;
}(SpeakeasyBase));
export { GetParentGoalsForGoalPathParams };
var GetParentGoalsForGoalQueryParams = /** @class */ (function (_super) {
    __extends(GetParentGoalsForGoalQueryParams, _super);
    function GetParentGoalsForGoalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetParentGoalsForGoalQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetParentGoalsForGoalQueryParams.prototype, "optPretty", void 0);
    return GetParentGoalsForGoalQueryParams;
}(SpeakeasyBase));
export { GetParentGoalsForGoalQueryParams };
var GetParentGoalsForGoal200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetParentGoalsForGoal200ApplicationJson, _super);
    function GetParentGoalsForGoal200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.GoalCompact }),
        __metadata("design:type", Array)
    ], GetParentGoalsForGoal200ApplicationJson.prototype, "data", void 0);
    return GetParentGoalsForGoal200ApplicationJson;
}(SpeakeasyBase));
export { GetParentGoalsForGoal200ApplicationJson };
var GetParentGoalsForGoalRequest = /** @class */ (function (_super) {
    __extends(GetParentGoalsForGoalRequest, _super);
    function GetParentGoalsForGoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetParentGoalsForGoalPathParams)
    ], GetParentGoalsForGoalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetParentGoalsForGoalQueryParams)
    ], GetParentGoalsForGoalRequest.prototype, "queryParams", void 0);
    return GetParentGoalsForGoalRequest;
}(SpeakeasyBase));
export { GetParentGoalsForGoalRequest };
var GetParentGoalsForGoalResponse = /** @class */ (function (_super) {
    __extends(GetParentGoalsForGoalResponse, _super);
    function GetParentGoalsForGoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetParentGoalsForGoalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetParentGoalsForGoalResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetParentGoalsForGoalResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetParentGoalsForGoal200ApplicationJson)
    ], GetParentGoalsForGoalResponse.prototype, "getParentGoalsForGoal200ApplicationJsonObject", void 0);
    return GetParentGoalsForGoalResponse;
}(SpeakeasyBase));
export { GetParentGoalsForGoalResponse };

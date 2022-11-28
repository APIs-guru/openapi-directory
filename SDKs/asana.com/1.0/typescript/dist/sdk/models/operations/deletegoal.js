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
var DeleteGoalPathParams = /** @class */ (function (_super) {
    __extends(DeleteGoalPathParams, _super);
    function DeleteGoalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], DeleteGoalPathParams.prototype, "goalGid", void 0);
    return DeleteGoalPathParams;
}(SpeakeasyBase));
export { DeleteGoalPathParams };
var DeleteGoalQueryParams = /** @class */ (function (_super) {
    __extends(DeleteGoalQueryParams, _super);
    function DeleteGoalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], DeleteGoalQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], DeleteGoalQueryParams.prototype, "optPretty", void 0);
    return DeleteGoalQueryParams;
}(SpeakeasyBase));
export { DeleteGoalQueryParams };
var DeleteGoal200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGoal200ApplicationJson, _super);
    function DeleteGoal200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteGoal200ApplicationJson.prototype, "data", void 0);
    return DeleteGoal200ApplicationJson;
}(SpeakeasyBase));
export { DeleteGoal200ApplicationJson };
var DeleteGoalRequest = /** @class */ (function (_super) {
    __extends(DeleteGoalRequest, _super);
    function DeleteGoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGoalPathParams)
    ], DeleteGoalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGoalQueryParams)
    ], DeleteGoalRequest.prototype, "queryParams", void 0);
    return DeleteGoalRequest;
}(SpeakeasyBase));
export { DeleteGoalRequest };
var DeleteGoalResponse = /** @class */ (function (_super) {
    __extends(DeleteGoalResponse, _super);
    function DeleteGoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteGoalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DeleteGoalResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteGoalResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGoal200ApplicationJson)
    ], DeleteGoalResponse.prototype, "deleteGoal200ApplicationJsonObject", void 0);
    return DeleteGoalResponse;
}(SpeakeasyBase));
export { DeleteGoalResponse };

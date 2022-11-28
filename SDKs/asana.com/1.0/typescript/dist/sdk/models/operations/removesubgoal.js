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
var RemoveSubgoalPathParams = /** @class */ (function (_super) {
    __extends(RemoveSubgoalPathParams, _super);
    function RemoveSubgoalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], RemoveSubgoalPathParams.prototype, "goalGid", void 0);
    return RemoveSubgoalPathParams;
}(SpeakeasyBase));
export { RemoveSubgoalPathParams };
var RemoveSubgoalQueryParams = /** @class */ (function (_super) {
    __extends(RemoveSubgoalQueryParams, _super);
    function RemoveSubgoalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveSubgoalQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveSubgoalQueryParams.prototype, "optPretty", void 0);
    return RemoveSubgoalQueryParams;
}(SpeakeasyBase));
export { RemoveSubgoalQueryParams };
var RemoveSubgoalRequestBody = /** @class */ (function (_super) {
    __extends(RemoveSubgoalRequestBody, _super);
    function RemoveSubgoalRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalRemoveSubgoalRequest)
    ], RemoveSubgoalRequestBody.prototype, "data", void 0);
    return RemoveSubgoalRequestBody;
}(SpeakeasyBase));
export { RemoveSubgoalRequestBody };
var RemoveSubgoal200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveSubgoal200ApplicationJson, _super);
    function RemoveSubgoal200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveSubgoal200ApplicationJson.prototype, "data", void 0);
    return RemoveSubgoal200ApplicationJson;
}(SpeakeasyBase));
export { RemoveSubgoal200ApplicationJson };
var RemoveSubgoalRequest = /** @class */ (function (_super) {
    __extends(RemoveSubgoalRequest, _super);
    function RemoveSubgoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveSubgoalPathParams)
    ], RemoveSubgoalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveSubgoalQueryParams)
    ], RemoveSubgoalRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveSubgoalRequestBody)
    ], RemoveSubgoalRequest.prototype, "request", void 0);
    return RemoveSubgoalRequest;
}(SpeakeasyBase));
export { RemoveSubgoalRequest };
var RemoveSubgoalResponse = /** @class */ (function (_super) {
    __extends(RemoveSubgoalResponse, _super);
    function RemoveSubgoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveSubgoalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveSubgoalResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveSubgoalResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveSubgoal200ApplicationJson)
    ], RemoveSubgoalResponse.prototype, "removeSubgoal200ApplicationJsonObject", void 0);
    return RemoveSubgoalResponse;
}(SpeakeasyBase));
export { RemoveSubgoalResponse };

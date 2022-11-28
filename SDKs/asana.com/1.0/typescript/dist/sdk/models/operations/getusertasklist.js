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
var GetUserTaskListPathParams = /** @class */ (function (_super) {
    __extends(GetUserTaskListPathParams, _super);
    function GetUserTaskListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_task_list_gid" }),
        __metadata("design:type", String)
    ], GetUserTaskListPathParams.prototype, "userTaskListGid", void 0);
    return GetUserTaskListPathParams;
}(SpeakeasyBase));
export { GetUserTaskListPathParams };
var GetUserTaskListQueryParams = /** @class */ (function (_super) {
    __extends(GetUserTaskListQueryParams, _super);
    function GetUserTaskListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetUserTaskListQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetUserTaskListQueryParams.prototype, "optPretty", void 0);
    return GetUserTaskListQueryParams;
}(SpeakeasyBase));
export { GetUserTaskListQueryParams };
var GetUserTaskList200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserTaskList200ApplicationJson, _super);
    function GetUserTaskList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.UserTaskListResponse)
    ], GetUserTaskList200ApplicationJson.prototype, "data", void 0);
    return GetUserTaskList200ApplicationJson;
}(SpeakeasyBase));
export { GetUserTaskList200ApplicationJson };
var GetUserTaskListRequest = /** @class */ (function (_super) {
    __extends(GetUserTaskListRequest, _super);
    function GetUserTaskListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserTaskListPathParams)
    ], GetUserTaskListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserTaskListQueryParams)
    ], GetUserTaskListRequest.prototype, "queryParams", void 0);
    return GetUserTaskListRequest;
}(SpeakeasyBase));
export { GetUserTaskListRequest };
var GetUserTaskListResponse = /** @class */ (function (_super) {
    __extends(GetUserTaskListResponse, _super);
    function GetUserTaskListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserTaskListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetUserTaskListResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserTaskListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserTaskList200ApplicationJson)
    ], GetUserTaskListResponse.prototype, "getUserTaskList200ApplicationJsonObject", void 0);
    return GetUserTaskListResponse;
}(SpeakeasyBase));
export { GetUserTaskListResponse };

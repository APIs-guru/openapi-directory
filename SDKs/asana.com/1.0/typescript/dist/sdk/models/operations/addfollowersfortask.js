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
var AddFollowersForTaskPathParams = /** @class */ (function (_super) {
    __extends(AddFollowersForTaskPathParams, _super);
    function AddFollowersForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], AddFollowersForTaskPathParams.prototype, "taskGid", void 0);
    return AddFollowersForTaskPathParams;
}(SpeakeasyBase));
export { AddFollowersForTaskPathParams };
var AddFollowersForTaskQueryParams = /** @class */ (function (_super) {
    __extends(AddFollowersForTaskQueryParams, _super);
    function AddFollowersForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddFollowersForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddFollowersForTaskQueryParams.prototype, "optPretty", void 0);
    return AddFollowersForTaskQueryParams;
}(SpeakeasyBase));
export { AddFollowersForTaskQueryParams };
var AddFollowersForTaskRequestBody = /** @class */ (function (_super) {
    __extends(AddFollowersForTaskRequestBody, _super);
    function AddFollowersForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskAddFollowersRequest)
    ], AddFollowersForTaskRequestBody.prototype, "data", void 0);
    return AddFollowersForTaskRequestBody;
}(SpeakeasyBase));
export { AddFollowersForTaskRequestBody };
var AddFollowersForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddFollowersForTask200ApplicationJson, _super);
    function AddFollowersForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AddFollowersForTask200ApplicationJson.prototype, "data", void 0);
    return AddFollowersForTask200ApplicationJson;
}(SpeakeasyBase));
export { AddFollowersForTask200ApplicationJson };
var AddFollowersForTaskRequest = /** @class */ (function (_super) {
    __extends(AddFollowersForTaskRequest, _super);
    function AddFollowersForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFollowersForTaskPathParams)
    ], AddFollowersForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFollowersForTaskQueryParams)
    ], AddFollowersForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddFollowersForTaskRequestBody)
    ], AddFollowersForTaskRequest.prototype, "request", void 0);
    return AddFollowersForTaskRequest;
}(SpeakeasyBase));
export { AddFollowersForTaskRequest };
var AddFollowersForTaskResponse = /** @class */ (function (_super) {
    __extends(AddFollowersForTaskResponse, _super);
    function AddFollowersForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddFollowersForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddFollowersForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddFollowersForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFollowersForTask200ApplicationJson)
    ], AddFollowersForTaskResponse.prototype, "addFollowersForTask200ApplicationJsonObject", void 0);
    return AddFollowersForTaskResponse;
}(SpeakeasyBase));
export { AddFollowersForTaskResponse };

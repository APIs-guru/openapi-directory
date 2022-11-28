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
var DuplicateTaskPathParams = /** @class */ (function (_super) {
    __extends(DuplicateTaskPathParams, _super);
    function DuplicateTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], DuplicateTaskPathParams.prototype, "taskGid", void 0);
    return DuplicateTaskPathParams;
}(SpeakeasyBase));
export { DuplicateTaskPathParams };
var DuplicateTaskQueryParams = /** @class */ (function (_super) {
    __extends(DuplicateTaskQueryParams, _super);
    function DuplicateTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], DuplicateTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], DuplicateTaskQueryParams.prototype, "optPretty", void 0);
    return DuplicateTaskQueryParams;
}(SpeakeasyBase));
export { DuplicateTaskQueryParams };
var DuplicateTaskRequestBody = /** @class */ (function (_super) {
    __extends(DuplicateTaskRequestBody, _super);
    function DuplicateTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskDuplicateRequest)
    ], DuplicateTaskRequestBody.prototype, "data", void 0);
    return DuplicateTaskRequestBody;
}(SpeakeasyBase));
export { DuplicateTaskRequestBody };
var DuplicateTask201ApplicationJson = /** @class */ (function (_super) {
    __extends(DuplicateTask201ApplicationJson, _super);
    function DuplicateTask201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.JobResponse)
    ], DuplicateTask201ApplicationJson.prototype, "data", void 0);
    return DuplicateTask201ApplicationJson;
}(SpeakeasyBase));
export { DuplicateTask201ApplicationJson };
var DuplicateTaskRequest = /** @class */ (function (_super) {
    __extends(DuplicateTaskRequest, _super);
    function DuplicateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DuplicateTaskPathParams)
    ], DuplicateTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DuplicateTaskQueryParams)
    ], DuplicateTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DuplicateTaskRequestBody)
    ], DuplicateTaskRequest.prototype, "request", void 0);
    return DuplicateTaskRequest;
}(SpeakeasyBase));
export { DuplicateTaskRequest };
var DuplicateTaskResponse = /** @class */ (function (_super) {
    __extends(DuplicateTaskResponse, _super);
    function DuplicateTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DuplicateTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DuplicateTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DuplicateTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DuplicateTask201ApplicationJson)
    ], DuplicateTaskResponse.prototype, "duplicateTask201ApplicationJsonObject", void 0);
    return DuplicateTaskResponse;
}(SpeakeasyBase));
export { DuplicateTaskResponse };

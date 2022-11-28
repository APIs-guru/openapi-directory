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
var AddDependenciesForTaskPathParams = /** @class */ (function (_super) {
    __extends(AddDependenciesForTaskPathParams, _super);
    function AddDependenciesForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], AddDependenciesForTaskPathParams.prototype, "taskGid", void 0);
    return AddDependenciesForTaskPathParams;
}(SpeakeasyBase));
export { AddDependenciesForTaskPathParams };
var AddDependenciesForTaskQueryParams = /** @class */ (function (_super) {
    __extends(AddDependenciesForTaskQueryParams, _super);
    function AddDependenciesForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddDependenciesForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddDependenciesForTaskQueryParams.prototype, "optPretty", void 0);
    return AddDependenciesForTaskQueryParams;
}(SpeakeasyBase));
export { AddDependenciesForTaskQueryParams };
var AddDependenciesForTaskRequestBody = /** @class */ (function (_super) {
    __extends(AddDependenciesForTaskRequestBody, _super);
    function AddDependenciesForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ModifyDependenciesRequest)
    ], AddDependenciesForTaskRequestBody.prototype, "data", void 0);
    return AddDependenciesForTaskRequestBody;
}(SpeakeasyBase));
export { AddDependenciesForTaskRequestBody };
var AddDependenciesForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddDependenciesForTask200ApplicationJson, _super);
    function AddDependenciesForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AddDependenciesForTask200ApplicationJson.prototype, "data", void 0);
    return AddDependenciesForTask200ApplicationJson;
}(SpeakeasyBase));
export { AddDependenciesForTask200ApplicationJson };
var AddDependenciesForTaskRequest = /** @class */ (function (_super) {
    __extends(AddDependenciesForTaskRequest, _super);
    function AddDependenciesForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddDependenciesForTaskPathParams)
    ], AddDependenciesForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddDependenciesForTaskQueryParams)
    ], AddDependenciesForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddDependenciesForTaskRequestBody)
    ], AddDependenciesForTaskRequest.prototype, "request", void 0);
    return AddDependenciesForTaskRequest;
}(SpeakeasyBase));
export { AddDependenciesForTaskRequest };
var AddDependenciesForTaskResponse = /** @class */ (function (_super) {
    __extends(AddDependenciesForTaskResponse, _super);
    function AddDependenciesForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddDependenciesForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddDependenciesForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddDependenciesForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddDependenciesForTask200ApplicationJson)
    ], AddDependenciesForTaskResponse.prototype, "addDependenciesForTask200ApplicationJsonObject", void 0);
    return AddDependenciesForTaskResponse;
}(SpeakeasyBase));
export { AddDependenciesForTaskResponse };

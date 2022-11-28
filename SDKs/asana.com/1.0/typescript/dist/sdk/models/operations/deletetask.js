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
var DeleteTaskPathParams = /** @class */ (function (_super) {
    __extends(DeleteTaskPathParams, _super);
    function DeleteTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], DeleteTaskPathParams.prototype, "taskGid", void 0);
    return DeleteTaskPathParams;
}(SpeakeasyBase));
export { DeleteTaskPathParams };
var DeleteTaskQueryParams = /** @class */ (function (_super) {
    __extends(DeleteTaskQueryParams, _super);
    function DeleteTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], DeleteTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], DeleteTaskQueryParams.prototype, "optPretty", void 0);
    return DeleteTaskQueryParams;
}(SpeakeasyBase));
export { DeleteTaskQueryParams };
var DeleteTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTask200ApplicationJson, _super);
    function DeleteTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteTask200ApplicationJson.prototype, "data", void 0);
    return DeleteTask200ApplicationJson;
}(SpeakeasyBase));
export { DeleteTask200ApplicationJson };
var DeleteTaskRequest = /** @class */ (function (_super) {
    __extends(DeleteTaskRequest, _super);
    function DeleteTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteTaskPathParams)
    ], DeleteTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteTaskQueryParams)
    ], DeleteTaskRequest.prototype, "queryParams", void 0);
    return DeleteTaskRequest;
}(SpeakeasyBase));
export { DeleteTaskRequest };
var DeleteTaskResponse = /** @class */ (function (_super) {
    __extends(DeleteTaskResponse, _super);
    function DeleteTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DeleteTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteTask200ApplicationJson)
    ], DeleteTaskResponse.prototype, "deleteTask200ApplicationJsonObject", void 0);
    return DeleteTaskResponse;
}(SpeakeasyBase));
export { DeleteTaskResponse };

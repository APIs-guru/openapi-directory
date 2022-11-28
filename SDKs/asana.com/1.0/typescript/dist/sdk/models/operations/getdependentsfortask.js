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
var GetDependentsForTaskPathParams = /** @class */ (function (_super) {
    __extends(GetDependentsForTaskPathParams, _super);
    function GetDependentsForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], GetDependentsForTaskPathParams.prototype, "taskGid", void 0);
    return GetDependentsForTaskPathParams;
}(SpeakeasyBase));
export { GetDependentsForTaskPathParams };
var GetDependentsForTaskQueryParams = /** @class */ (function (_super) {
    __extends(GetDependentsForTaskQueryParams, _super);
    function GetDependentsForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetDependentsForTaskQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetDependentsForTaskQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetDependentsForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetDependentsForTaskQueryParams.prototype, "optPretty", void 0);
    return GetDependentsForTaskQueryParams;
}(SpeakeasyBase));
export { GetDependentsForTaskQueryParams };
var GetDependentsForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDependentsForTask200ApplicationJson, _super);
    function GetDependentsForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TaskCompact }),
        __metadata("design:type", Array)
    ], GetDependentsForTask200ApplicationJson.prototype, "data", void 0);
    return GetDependentsForTask200ApplicationJson;
}(SpeakeasyBase));
export { GetDependentsForTask200ApplicationJson };
var GetDependentsForTaskRequest = /** @class */ (function (_super) {
    __extends(GetDependentsForTaskRequest, _super);
    function GetDependentsForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDependentsForTaskPathParams)
    ], GetDependentsForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDependentsForTaskQueryParams)
    ], GetDependentsForTaskRequest.prototype, "queryParams", void 0);
    return GetDependentsForTaskRequest;
}(SpeakeasyBase));
export { GetDependentsForTaskRequest };
var GetDependentsForTaskResponse = /** @class */ (function (_super) {
    __extends(GetDependentsForTaskResponse, _super);
    function GetDependentsForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDependentsForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetDependentsForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDependentsForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDependentsForTask200ApplicationJson)
    ], GetDependentsForTaskResponse.prototype, "getDependentsForTask200ApplicationJsonObject", void 0);
    return GetDependentsForTaskResponse;
}(SpeakeasyBase));
export { GetDependentsForTaskResponse };

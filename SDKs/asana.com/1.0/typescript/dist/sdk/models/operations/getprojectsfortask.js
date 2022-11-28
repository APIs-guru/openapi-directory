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
var GetProjectsForTaskPathParams = /** @class */ (function (_super) {
    __extends(GetProjectsForTaskPathParams, _super);
    function GetProjectsForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], GetProjectsForTaskPathParams.prototype, "taskGid", void 0);
    return GetProjectsForTaskPathParams;
}(SpeakeasyBase));
export { GetProjectsForTaskPathParams };
var GetProjectsForTaskQueryParams = /** @class */ (function (_super) {
    __extends(GetProjectsForTaskQueryParams, _super);
    function GetProjectsForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetProjectsForTaskQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetProjectsForTaskQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetProjectsForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetProjectsForTaskQueryParams.prototype, "optPretty", void 0);
    return GetProjectsForTaskQueryParams;
}(SpeakeasyBase));
export { GetProjectsForTaskQueryParams };
var GetProjectsForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetProjectsForTask200ApplicationJson, _super);
    function GetProjectsForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ProjectCompact }),
        __metadata("design:type", Array)
    ], GetProjectsForTask200ApplicationJson.prototype, "data", void 0);
    return GetProjectsForTask200ApplicationJson;
}(SpeakeasyBase));
export { GetProjectsForTask200ApplicationJson };
var GetProjectsForTaskRequest = /** @class */ (function (_super) {
    __extends(GetProjectsForTaskRequest, _super);
    function GetProjectsForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectsForTaskPathParams)
    ], GetProjectsForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectsForTaskQueryParams)
    ], GetProjectsForTaskRequest.prototype, "queryParams", void 0);
    return GetProjectsForTaskRequest;
}(SpeakeasyBase));
export { GetProjectsForTaskRequest };
var GetProjectsForTaskResponse = /** @class */ (function (_super) {
    __extends(GetProjectsForTaskResponse, _super);
    function GetProjectsForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProjectsForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetProjectsForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProjectsForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectsForTask200ApplicationJson)
    ], GetProjectsForTaskResponse.prototype, "getProjectsForTask200ApplicationJsonObject", void 0);
    return GetProjectsForTaskResponse;
}(SpeakeasyBase));
export { GetProjectsForTaskResponse };

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
var GetStoriesForTaskPathParams = /** @class */ (function (_super) {
    __extends(GetStoriesForTaskPathParams, _super);
    function GetStoriesForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], GetStoriesForTaskPathParams.prototype, "taskGid", void 0);
    return GetStoriesForTaskPathParams;
}(SpeakeasyBase));
export { GetStoriesForTaskPathParams };
var GetStoriesForTaskQueryParams = /** @class */ (function (_super) {
    __extends(GetStoriesForTaskQueryParams, _super);
    function GetStoriesForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetStoriesForTaskQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetStoriesForTaskQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetStoriesForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetStoriesForTaskQueryParams.prototype, "optPretty", void 0);
    return GetStoriesForTaskQueryParams;
}(SpeakeasyBase));
export { GetStoriesForTaskQueryParams };
var GetStoriesForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStoriesForTask200ApplicationJson, _super);
    function GetStoriesForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetStoriesForTask200ApplicationJson.prototype, "data", void 0);
    return GetStoriesForTask200ApplicationJson;
}(SpeakeasyBase));
export { GetStoriesForTask200ApplicationJson };
var GetStoriesForTaskRequest = /** @class */ (function (_super) {
    __extends(GetStoriesForTaskRequest, _super);
    function GetStoriesForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStoriesForTaskPathParams)
    ], GetStoriesForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStoriesForTaskQueryParams)
    ], GetStoriesForTaskRequest.prototype, "queryParams", void 0);
    return GetStoriesForTaskRequest;
}(SpeakeasyBase));
export { GetStoriesForTaskRequest };
var GetStoriesForTaskResponse = /** @class */ (function (_super) {
    __extends(GetStoriesForTaskResponse, _super);
    function GetStoriesForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStoriesForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetStoriesForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStoriesForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStoriesForTask200ApplicationJson)
    ], GetStoriesForTaskResponse.prototype, "getStoriesForTask200ApplicationJsonObject", void 0);
    return GetStoriesForTaskResponse;
}(SpeakeasyBase));
export { GetStoriesForTaskResponse };

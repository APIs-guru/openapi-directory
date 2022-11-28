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
var GetTasksForTagPathParams = /** @class */ (function (_super) {
    __extends(GetTasksForTagPathParams, _super);
    function GetTasksForTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag_gid" }),
        __metadata("design:type", String)
    ], GetTasksForTagPathParams.prototype, "tagGid", void 0);
    return GetTasksForTagPathParams;
}(SpeakeasyBase));
export { GetTasksForTagPathParams };
var GetTasksForTagQueryParams = /** @class */ (function (_super) {
    __extends(GetTasksForTagQueryParams, _super);
    function GetTasksForTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTasksForTagQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTasksForTagQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetTasksForTagQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetTasksForTagQueryParams.prototype, "optPretty", void 0);
    return GetTasksForTagQueryParams;
}(SpeakeasyBase));
export { GetTasksForTagQueryParams };
var GetTasksForTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTasksForTag200ApplicationJson, _super);
    function GetTasksForTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TaskCompact }),
        __metadata("design:type", Array)
    ], GetTasksForTag200ApplicationJson.prototype, "data", void 0);
    return GetTasksForTag200ApplicationJson;
}(SpeakeasyBase));
export { GetTasksForTag200ApplicationJson };
var GetTasksForTagRequest = /** @class */ (function (_super) {
    __extends(GetTasksForTagRequest, _super);
    function GetTasksForTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTasksForTagPathParams)
    ], GetTasksForTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTasksForTagQueryParams)
    ], GetTasksForTagRequest.prototype, "queryParams", void 0);
    return GetTasksForTagRequest;
}(SpeakeasyBase));
export { GetTasksForTagRequest };
var GetTasksForTagResponse = /** @class */ (function (_super) {
    __extends(GetTasksForTagResponse, _super);
    function GetTasksForTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTasksForTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetTasksForTagResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTasksForTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTasksForTag200ApplicationJson)
    ], GetTasksForTagResponse.prototype, "getTasksForTag200ApplicationJsonObject", void 0);
    return GetTasksForTagResponse;
}(SpeakeasyBase));
export { GetTasksForTagResponse };

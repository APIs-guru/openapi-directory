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
var InsertSectionForProjectPathParams = /** @class */ (function (_super) {
    __extends(InsertSectionForProjectPathParams, _super);
    function InsertSectionForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], InsertSectionForProjectPathParams.prototype, "projectGid", void 0);
    return InsertSectionForProjectPathParams;
}(SpeakeasyBase));
export { InsertSectionForProjectPathParams };
var InsertSectionForProjectQueryParams = /** @class */ (function (_super) {
    __extends(InsertSectionForProjectQueryParams, _super);
    function InsertSectionForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], InsertSectionForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], InsertSectionForProjectQueryParams.prototype, "optPretty", void 0);
    return InsertSectionForProjectQueryParams;
}(SpeakeasyBase));
export { InsertSectionForProjectQueryParams };
var InsertSectionForProjectRequestBody = /** @class */ (function (_super) {
    __extends(InsertSectionForProjectRequestBody, _super);
    function InsertSectionForProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectSectionInsertRequest)
    ], InsertSectionForProjectRequestBody.prototype, "data", void 0);
    return InsertSectionForProjectRequestBody;
}(SpeakeasyBase));
export { InsertSectionForProjectRequestBody };
var InsertSectionForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(InsertSectionForProject200ApplicationJson, _super);
    function InsertSectionForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], InsertSectionForProject200ApplicationJson.prototype, "data", void 0);
    return InsertSectionForProject200ApplicationJson;
}(SpeakeasyBase));
export { InsertSectionForProject200ApplicationJson };
var InsertSectionForProjectRequest = /** @class */ (function (_super) {
    __extends(InsertSectionForProjectRequest, _super);
    function InsertSectionForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InsertSectionForProjectPathParams)
    ], InsertSectionForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InsertSectionForProjectQueryParams)
    ], InsertSectionForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", InsertSectionForProjectRequestBody)
    ], InsertSectionForProjectRequest.prototype, "request", void 0);
    return InsertSectionForProjectRequest;
}(SpeakeasyBase));
export { InsertSectionForProjectRequest };
var InsertSectionForProjectResponse = /** @class */ (function (_super) {
    __extends(InsertSectionForProjectResponse, _super);
    function InsertSectionForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InsertSectionForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], InsertSectionForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InsertSectionForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InsertSectionForProject200ApplicationJson)
    ], InsertSectionForProjectResponse.prototype, "insertSectionForProject200ApplicationJsonObject", void 0);
    return InsertSectionForProjectResponse;
}(SpeakeasyBase));
export { InsertSectionForProjectResponse };

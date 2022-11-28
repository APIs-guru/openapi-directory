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
var DuplicateProjectPathParams = /** @class */ (function (_super) {
    __extends(DuplicateProjectPathParams, _super);
    function DuplicateProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], DuplicateProjectPathParams.prototype, "projectGid", void 0);
    return DuplicateProjectPathParams;
}(SpeakeasyBase));
export { DuplicateProjectPathParams };
var DuplicateProjectQueryParams = /** @class */ (function (_super) {
    __extends(DuplicateProjectQueryParams, _super);
    function DuplicateProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], DuplicateProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], DuplicateProjectQueryParams.prototype, "optPretty", void 0);
    return DuplicateProjectQueryParams;
}(SpeakeasyBase));
export { DuplicateProjectQueryParams };
var DuplicateProjectRequestBody = /** @class */ (function (_super) {
    __extends(DuplicateProjectRequestBody, _super);
    function DuplicateProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectDuplicateRequest)
    ], DuplicateProjectRequestBody.prototype, "data", void 0);
    return DuplicateProjectRequestBody;
}(SpeakeasyBase));
export { DuplicateProjectRequestBody };
var DuplicateProject201ApplicationJson = /** @class */ (function (_super) {
    __extends(DuplicateProject201ApplicationJson, _super);
    function DuplicateProject201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.JobResponse)
    ], DuplicateProject201ApplicationJson.prototype, "data", void 0);
    return DuplicateProject201ApplicationJson;
}(SpeakeasyBase));
export { DuplicateProject201ApplicationJson };
var DuplicateProjectRequest = /** @class */ (function (_super) {
    __extends(DuplicateProjectRequest, _super);
    function DuplicateProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DuplicateProjectPathParams)
    ], DuplicateProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DuplicateProjectQueryParams)
    ], DuplicateProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DuplicateProjectRequestBody)
    ], DuplicateProjectRequest.prototype, "request", void 0);
    return DuplicateProjectRequest;
}(SpeakeasyBase));
export { DuplicateProjectRequest };
var DuplicateProjectResponse = /** @class */ (function (_super) {
    __extends(DuplicateProjectResponse, _super);
    function DuplicateProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DuplicateProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DuplicateProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DuplicateProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DuplicateProject201ApplicationJson)
    ], DuplicateProjectResponse.prototype, "duplicateProject201ApplicationJsonObject", void 0);
    return DuplicateProjectResponse;
}(SpeakeasyBase));
export { DuplicateProjectResponse };

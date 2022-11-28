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
var GetRepositoryPipelineScheduleExecutionsPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoryPipelineScheduleExecutionsPathParams, _super);
    function GetRepositoryPipelineScheduleExecutionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoryPipelineScheduleExecutionsPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule_uuid" }),
        __metadata("design:type", String)
    ], GetRepositoryPipelineScheduleExecutionsPathParams.prototype, "scheduleUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoryPipelineScheduleExecutionsPathParams.prototype, "workspace", void 0);
    return GetRepositoryPipelineScheduleExecutionsPathParams;
}(SpeakeasyBase));
export { GetRepositoryPipelineScheduleExecutionsPathParams };
var GetRepositoryPipelineScheduleExecutionsRequest = /** @class */ (function (_super) {
    __extends(GetRepositoryPipelineScheduleExecutionsRequest, _super);
    function GetRepositoryPipelineScheduleExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoryPipelineScheduleExecutionsPathParams)
    ], GetRepositoryPipelineScheduleExecutionsRequest.prototype, "pathParams", void 0);
    return GetRepositoryPipelineScheduleExecutionsRequest;
}(SpeakeasyBase));
export { GetRepositoryPipelineScheduleExecutionsRequest };
var GetRepositoryPipelineScheduleExecutionsResponse = /** @class */ (function (_super) {
    __extends(GetRepositoryPipelineScheduleExecutionsResponse, _super);
    function GetRepositoryPipelineScheduleExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoryPipelineScheduleExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoryPipelineScheduleExecutionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoryPipelineScheduleExecutionsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedPipelineScheduleExecutions)
    ], GetRepositoryPipelineScheduleExecutionsResponse.prototype, "paginatedPipelineScheduleExecutions", void 0);
    return GetRepositoryPipelineScheduleExecutionsResponse;
}(SpeakeasyBase));
export { GetRepositoryPipelineScheduleExecutionsResponse };

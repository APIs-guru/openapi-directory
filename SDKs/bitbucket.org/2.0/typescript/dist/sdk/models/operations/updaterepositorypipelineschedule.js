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
var UpdateRepositoryPipelineSchedulePathParams = /** @class */ (function (_super) {
    __extends(UpdateRepositoryPipelineSchedulePathParams, _super);
    function UpdateRepositoryPipelineSchedulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], UpdateRepositoryPipelineSchedulePathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule_uuid" }),
        __metadata("design:type", String)
    ], UpdateRepositoryPipelineSchedulePathParams.prototype, "scheduleUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], UpdateRepositoryPipelineSchedulePathParams.prototype, "workspace", void 0);
    return UpdateRepositoryPipelineSchedulePathParams;
}(SpeakeasyBase));
export { UpdateRepositoryPipelineSchedulePathParams };
var UpdateRepositoryPipelineScheduleRequest = /** @class */ (function (_super) {
    __extends(UpdateRepositoryPipelineScheduleRequest, _super);
    function UpdateRepositoryPipelineScheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRepositoryPipelineSchedulePathParams)
    ], UpdateRepositoryPipelineScheduleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], UpdateRepositoryPipelineScheduleRequest.prototype, "request", void 0);
    return UpdateRepositoryPipelineScheduleRequest;
}(SpeakeasyBase));
export { UpdateRepositoryPipelineScheduleRequest };
var UpdateRepositoryPipelineScheduleResponse = /** @class */ (function (_super) {
    __extends(UpdateRepositoryPipelineScheduleResponse, _super);
    function UpdateRepositoryPipelineScheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRepositoryPipelineScheduleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRepositoryPipelineScheduleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateRepositoryPipelineScheduleResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateRepositoryPipelineScheduleResponse.prototype, "pipelineSchedule", void 0);
    return UpdateRepositoryPipelineScheduleResponse;
}(SpeakeasyBase));
export { UpdateRepositoryPipelineScheduleResponse };

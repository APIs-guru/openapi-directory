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
var GetRepositoryPipelineSchedulesPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoryPipelineSchedulesPathParams, _super);
    function GetRepositoryPipelineSchedulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoryPipelineSchedulesPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoryPipelineSchedulesPathParams.prototype, "workspace", void 0);
    return GetRepositoryPipelineSchedulesPathParams;
}(SpeakeasyBase));
export { GetRepositoryPipelineSchedulesPathParams };
var GetRepositoryPipelineSchedulesRequest = /** @class */ (function (_super) {
    __extends(GetRepositoryPipelineSchedulesRequest, _super);
    function GetRepositoryPipelineSchedulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoryPipelineSchedulesPathParams)
    ], GetRepositoryPipelineSchedulesRequest.prototype, "pathParams", void 0);
    return GetRepositoryPipelineSchedulesRequest;
}(SpeakeasyBase));
export { GetRepositoryPipelineSchedulesRequest };
var GetRepositoryPipelineSchedulesResponse = /** @class */ (function (_super) {
    __extends(GetRepositoryPipelineSchedulesResponse, _super);
    function GetRepositoryPipelineSchedulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoryPipelineSchedulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoryPipelineSchedulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRepositoryPipelineSchedulesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedPipelineSchedules)
    ], GetRepositoryPipelineSchedulesResponse.prototype, "paginatedPipelineSchedules", void 0);
    return GetRepositoryPipelineSchedulesResponse;
}(SpeakeasyBase));
export { GetRepositoryPipelineSchedulesResponse };

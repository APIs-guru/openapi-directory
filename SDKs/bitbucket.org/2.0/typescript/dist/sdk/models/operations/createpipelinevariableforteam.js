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
var CreatePipelineVariableForTeamPathParams = /** @class */ (function (_super) {
    __extends(CreatePipelineVariableForTeamPathParams, _super);
    function CreatePipelineVariableForTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], CreatePipelineVariableForTeamPathParams.prototype, "username", void 0);
    return CreatePipelineVariableForTeamPathParams;
}(SpeakeasyBase));
export { CreatePipelineVariableForTeamPathParams };
var CreatePipelineVariableForTeamQueryParams = /** @class */ (function (_super) {
    __extends(CreatePipelineVariableForTeamQueryParams, _super);
    function CreatePipelineVariableForTeamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" }),
        __metadata("design:type", String)
    ], CreatePipelineVariableForTeamQueryParams.prototype, "workspace", void 0);
    return CreatePipelineVariableForTeamQueryParams;
}(SpeakeasyBase));
export { CreatePipelineVariableForTeamQueryParams };
var CreatePipelineVariableForTeamRequest = /** @class */ (function (_super) {
    __extends(CreatePipelineVariableForTeamRequest, _super);
    function CreatePipelineVariableForTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePipelineVariableForTeamPathParams)
    ], CreatePipelineVariableForTeamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePipelineVariableForTeamQueryParams)
    ], CreatePipelineVariableForTeamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CreatePipelineVariableForTeamRequest.prototype, "request", void 0);
    return CreatePipelineVariableForTeamRequest;
}(SpeakeasyBase));
export { CreatePipelineVariableForTeamRequest };
var CreatePipelineVariableForTeamResponse = /** @class */ (function (_super) {
    __extends(CreatePipelineVariableForTeamResponse, _super);
    function CreatePipelineVariableForTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePipelineVariableForTeamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreatePipelineVariableForTeamResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePipelineVariableForTeamResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreatePipelineVariableForTeamResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreatePipelineVariableForTeamResponse.prototype, "pipelineVariable", void 0);
    return CreatePipelineVariableForTeamResponse;
}(SpeakeasyBase));
export { CreatePipelineVariableForTeamResponse };

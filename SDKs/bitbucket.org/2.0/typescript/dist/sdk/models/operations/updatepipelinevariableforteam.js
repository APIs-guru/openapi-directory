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
var UpdatePipelineVariableForTeamPathParams = /** @class */ (function (_super) {
    __extends(UpdatePipelineVariableForTeamPathParams, _super);
    function UpdatePipelineVariableForTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], UpdatePipelineVariableForTeamPathParams.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" }),
        __metadata("design:type", String)
    ], UpdatePipelineVariableForTeamPathParams.prototype, "variableUuid", void 0);
    return UpdatePipelineVariableForTeamPathParams;
}(SpeakeasyBase));
export { UpdatePipelineVariableForTeamPathParams };
var UpdatePipelineVariableForTeamRequest = /** @class */ (function (_super) {
    __extends(UpdatePipelineVariableForTeamRequest, _super);
    function UpdatePipelineVariableForTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePipelineVariableForTeamPathParams)
    ], UpdatePipelineVariableForTeamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], UpdatePipelineVariableForTeamRequest.prototype, "request", void 0);
    return UpdatePipelineVariableForTeamRequest;
}(SpeakeasyBase));
export { UpdatePipelineVariableForTeamRequest };
var UpdatePipelineVariableForTeamResponse = /** @class */ (function (_super) {
    __extends(UpdatePipelineVariableForTeamResponse, _super);
    function UpdatePipelineVariableForTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePipelineVariableForTeamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePipelineVariableForTeamResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdatePipelineVariableForTeamResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdatePipelineVariableForTeamResponse.prototype, "pipelineVariable", void 0);
    return UpdatePipelineVariableForTeamResponse;
}(SpeakeasyBase));
export { UpdatePipelineVariableForTeamResponse };

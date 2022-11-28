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
var CreateProjectForTeamPathParams = /** @class */ (function (_super) {
    __extends(CreateProjectForTeamPathParams, _super);
    function CreateProjectForTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_gid" }),
        __metadata("design:type", String)
    ], CreateProjectForTeamPathParams.prototype, "teamGid", void 0);
    return CreateProjectForTeamPathParams;
}(SpeakeasyBase));
export { CreateProjectForTeamPathParams };
var CreateProjectForTeamQueryParams = /** @class */ (function (_super) {
    __extends(CreateProjectForTeamQueryParams, _super);
    function CreateProjectForTeamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateProjectForTeamQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateProjectForTeamQueryParams.prototype, "optPretty", void 0);
    return CreateProjectForTeamQueryParams;
}(SpeakeasyBase));
export { CreateProjectForTeamQueryParams };
var CreateProjectForTeamRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateProjectForTeamRequestBodyInput, _super);
    function CreateProjectForTeamRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectRequestInput)
    ], CreateProjectForTeamRequestBodyInput.prototype, "data", void 0);
    return CreateProjectForTeamRequestBodyInput;
}(SpeakeasyBase));
export { CreateProjectForTeamRequestBodyInput };
var CreateProjectForTeam201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateProjectForTeam201ApplicationJson, _super);
    function CreateProjectForTeam201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectResponse)
    ], CreateProjectForTeam201ApplicationJson.prototype, "data", void 0);
    return CreateProjectForTeam201ApplicationJson;
}(SpeakeasyBase));
export { CreateProjectForTeam201ApplicationJson };
var CreateProjectForTeamRequest = /** @class */ (function (_super) {
    __extends(CreateProjectForTeamRequest, _super);
    function CreateProjectForTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectForTeamPathParams)
    ], CreateProjectForTeamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectForTeamQueryParams)
    ], CreateProjectForTeamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateProjectForTeamRequestBodyInput)
    ], CreateProjectForTeamRequest.prototype, "request", void 0);
    return CreateProjectForTeamRequest;
}(SpeakeasyBase));
export { CreateProjectForTeamRequest };
var CreateProjectForTeamResponse = /** @class */ (function (_super) {
    __extends(CreateProjectForTeamResponse, _super);
    function CreateProjectForTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProjectForTeamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateProjectForTeamResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProjectForTeamResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectForTeam201ApplicationJson)
    ], CreateProjectForTeamResponse.prototype, "createProjectForTeam201ApplicationJsonObject", void 0);
    return CreateProjectForTeamResponse;
}(SpeakeasyBase));
export { CreateProjectForTeamResponse };

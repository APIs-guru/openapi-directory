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
var GetProjectsForTeamPathParams = /** @class */ (function (_super) {
    __extends(GetProjectsForTeamPathParams, _super);
    function GetProjectsForTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_gid" }),
        __metadata("design:type", String)
    ], GetProjectsForTeamPathParams.prototype, "teamGid", void 0);
    return GetProjectsForTeamPathParams;
}(SpeakeasyBase));
export { GetProjectsForTeamPathParams };
var GetProjectsForTeamQueryParams = /** @class */ (function (_super) {
    __extends(GetProjectsForTeamQueryParams, _super);
    function GetProjectsForTeamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], GetProjectsForTeamQueryParams.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetProjectsForTeamQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetProjectsForTeamQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetProjectsForTeamQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetProjectsForTeamQueryParams.prototype, "optPretty", void 0);
    return GetProjectsForTeamQueryParams;
}(SpeakeasyBase));
export { GetProjectsForTeamQueryParams };
var GetProjectsForTeam200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetProjectsForTeam200ApplicationJson, _super);
    function GetProjectsForTeam200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ProjectCompact }),
        __metadata("design:type", Array)
    ], GetProjectsForTeam200ApplicationJson.prototype, "data", void 0);
    return GetProjectsForTeam200ApplicationJson;
}(SpeakeasyBase));
export { GetProjectsForTeam200ApplicationJson };
var GetProjectsForTeamRequest = /** @class */ (function (_super) {
    __extends(GetProjectsForTeamRequest, _super);
    function GetProjectsForTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectsForTeamPathParams)
    ], GetProjectsForTeamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectsForTeamQueryParams)
    ], GetProjectsForTeamRequest.prototype, "queryParams", void 0);
    return GetProjectsForTeamRequest;
}(SpeakeasyBase));
export { GetProjectsForTeamRequest };
var GetProjectsForTeamResponse = /** @class */ (function (_super) {
    __extends(GetProjectsForTeamResponse, _super);
    function GetProjectsForTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProjectsForTeamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetProjectsForTeamResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProjectsForTeamResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectsForTeam200ApplicationJson)
    ], GetProjectsForTeamResponse.prototype, "getProjectsForTeam200ApplicationJsonObject", void 0);
    return GetProjectsForTeamResponse;
}(SpeakeasyBase));
export { GetProjectsForTeamResponse };

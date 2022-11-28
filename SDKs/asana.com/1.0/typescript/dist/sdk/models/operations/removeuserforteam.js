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
var RemoveUserForTeamPathParams = /** @class */ (function (_super) {
    __extends(RemoveUserForTeamPathParams, _super);
    function RemoveUserForTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_gid" }),
        __metadata("design:type", String)
    ], RemoveUserForTeamPathParams.prototype, "teamGid", void 0);
    return RemoveUserForTeamPathParams;
}(SpeakeasyBase));
export { RemoveUserForTeamPathParams };
var RemoveUserForTeamQueryParams = /** @class */ (function (_super) {
    __extends(RemoveUserForTeamQueryParams, _super);
    function RemoveUserForTeamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveUserForTeamQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveUserForTeamQueryParams.prototype, "optPretty", void 0);
    return RemoveUserForTeamQueryParams;
}(SpeakeasyBase));
export { RemoveUserForTeamQueryParams };
var RemoveUserForTeamRequestBody = /** @class */ (function (_super) {
    __extends(RemoveUserForTeamRequestBody, _super);
    function RemoveUserForTeamRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TeamRemoveUserRequest)
    ], RemoveUserForTeamRequestBody.prototype, "data", void 0);
    return RemoveUserForTeamRequestBody;
}(SpeakeasyBase));
export { RemoveUserForTeamRequestBody };
var RemoveUserForTeam204ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserForTeam204ApplicationJson, _super);
    function RemoveUserForTeam204ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveUserForTeam204ApplicationJson.prototype, "data", void 0);
    return RemoveUserForTeam204ApplicationJson;
}(SpeakeasyBase));
export { RemoveUserForTeam204ApplicationJson };
var RemoveUserForTeamRequest = /** @class */ (function (_super) {
    __extends(RemoveUserForTeamRequest, _super);
    function RemoveUserForTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserForTeamPathParams)
    ], RemoveUserForTeamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserForTeamQueryParams)
    ], RemoveUserForTeamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveUserForTeamRequestBody)
    ], RemoveUserForTeamRequest.prototype, "request", void 0);
    return RemoveUserForTeamRequest;
}(SpeakeasyBase));
export { RemoveUserForTeamRequest };
var RemoveUserForTeamResponse = /** @class */ (function (_super) {
    __extends(RemoveUserForTeamResponse, _super);
    function RemoveUserForTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveUserForTeamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveUserForTeamResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveUserForTeamResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserForTeam204ApplicationJson)
    ], RemoveUserForTeamResponse.prototype, "removeUserForTeam204ApplicationJsonObject", void 0);
    return RemoveUserForTeamResponse;
}(SpeakeasyBase));
export { RemoveUserForTeamResponse };

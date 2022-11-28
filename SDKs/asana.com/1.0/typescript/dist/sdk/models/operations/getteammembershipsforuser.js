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
var GetTeamMembershipsForUserPathParams = /** @class */ (function (_super) {
    __extends(GetTeamMembershipsForUserPathParams, _super);
    function GetTeamMembershipsForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_gid" }),
        __metadata("design:type", String)
    ], GetTeamMembershipsForUserPathParams.prototype, "userGid", void 0);
    return GetTeamMembershipsForUserPathParams;
}(SpeakeasyBase));
export { GetTeamMembershipsForUserPathParams };
var GetTeamMembershipsForUserQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamMembershipsForUserQueryParams, _super);
    function GetTeamMembershipsForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTeamMembershipsForUserQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTeamMembershipsForUserQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetTeamMembershipsForUserQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetTeamMembershipsForUserQueryParams.prototype, "optPretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" }),
        __metadata("design:type", String)
    ], GetTeamMembershipsForUserQueryParams.prototype, "workspace", void 0);
    return GetTeamMembershipsForUserQueryParams;
}(SpeakeasyBase));
export { GetTeamMembershipsForUserQueryParams };
var GetTeamMembershipsForUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTeamMembershipsForUser200ApplicationJson, _super);
    function GetTeamMembershipsForUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TeamMembershipCompact }),
        __metadata("design:type", Array)
    ], GetTeamMembershipsForUser200ApplicationJson.prototype, "data", void 0);
    return GetTeamMembershipsForUser200ApplicationJson;
}(SpeakeasyBase));
export { GetTeamMembershipsForUser200ApplicationJson };
var GetTeamMembershipsForUserRequest = /** @class */ (function (_super) {
    __extends(GetTeamMembershipsForUserRequest, _super);
    function GetTeamMembershipsForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMembershipsForUserPathParams)
    ], GetTeamMembershipsForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMembershipsForUserQueryParams)
    ], GetTeamMembershipsForUserRequest.prototype, "queryParams", void 0);
    return GetTeamMembershipsForUserRequest;
}(SpeakeasyBase));
export { GetTeamMembershipsForUserRequest };
var GetTeamMembershipsForUserResponse = /** @class */ (function (_super) {
    __extends(GetTeamMembershipsForUserResponse, _super);
    function GetTeamMembershipsForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamMembershipsForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetTeamMembershipsForUserResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamMembershipsForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMembershipsForUser200ApplicationJson)
    ], GetTeamMembershipsForUserResponse.prototype, "getTeamMembershipsForUser200ApplicationJsonObject", void 0);
    return GetTeamMembershipsForUserResponse;
}(SpeakeasyBase));
export { GetTeamMembershipsForUserResponse };

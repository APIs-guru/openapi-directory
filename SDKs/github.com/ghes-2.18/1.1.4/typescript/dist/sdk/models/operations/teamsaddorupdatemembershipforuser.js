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
var TeamsAddOrUpdateMembershipForUserPathParams = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateMembershipForUserPathParams, _super);
    function TeamsAddOrUpdateMembershipForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateMembershipForUserPathParams.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserPathParams.prototype, "username", void 0);
    return TeamsAddOrUpdateMembershipForUserPathParams;
}(SpeakeasyBase));
export { TeamsAddOrUpdateMembershipForUserPathParams };
export var TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum;
(function (TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum) {
    TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum["Member"] = "member";
    TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum["Maintainer"] = "maintainer";
})(TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum || (TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum = {}));
var TeamsAddOrUpdateMembershipForUserRequestBody = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateMembershipForUserRequestBody, _super);
    function TeamsAddOrUpdateMembershipForUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserRequestBody.prototype, "role", void 0);
    return TeamsAddOrUpdateMembershipForUserRequestBody;
}(SpeakeasyBase));
export { TeamsAddOrUpdateMembershipForUserRequestBody };
var TeamsAddOrUpdateMembershipForUserRequest = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateMembershipForUserRequest, _super);
    function TeamsAddOrUpdateMembershipForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddOrUpdateMembershipForUserPathParams)
    ], TeamsAddOrUpdateMembershipForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsAddOrUpdateMembershipForUserRequestBody)
    ], TeamsAddOrUpdateMembershipForUserRequest.prototype, "request", void 0);
    return TeamsAddOrUpdateMembershipForUserRequest;
}(SpeakeasyBase));
export { TeamsAddOrUpdateMembershipForUserRequest };
var TeamsAddOrUpdateMembershipForUserResponse = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateMembershipForUserResponse, _super);
    function TeamsAddOrUpdateMembershipForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateMembershipForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamMembership)
    ], TeamsAddOrUpdateMembershipForUserResponse.prototype, "teamMembership", void 0);
    return TeamsAddOrUpdateMembershipForUserResponse;
}(SpeakeasyBase));
export { TeamsAddOrUpdateMembershipForUserResponse };

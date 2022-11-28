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
var GetWorkspaceMembershipsForUserPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipsForUserPathParams, _super);
    function GetWorkspaceMembershipsForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_gid" }),
        __metadata("design:type", String)
    ], GetWorkspaceMembershipsForUserPathParams.prototype, "userGid", void 0);
    return GetWorkspaceMembershipsForUserPathParams;
}(SpeakeasyBase));
export { GetWorkspaceMembershipsForUserPathParams };
var GetWorkspaceMembershipsForUserQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipsForUserQueryParams, _super);
    function GetWorkspaceMembershipsForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetWorkspaceMembershipsForUserQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetWorkspaceMembershipsForUserQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetWorkspaceMembershipsForUserQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetWorkspaceMembershipsForUserQueryParams.prototype, "optPretty", void 0);
    return GetWorkspaceMembershipsForUserQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceMembershipsForUserQueryParams };
var GetWorkspaceMembershipsForUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipsForUser200ApplicationJson, _super);
    function GetWorkspaceMembershipsForUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.WorkspaceMembershipCompact }),
        __metadata("design:type", Array)
    ], GetWorkspaceMembershipsForUser200ApplicationJson.prototype, "data", void 0);
    return GetWorkspaceMembershipsForUser200ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspaceMembershipsForUser200ApplicationJson };
var GetWorkspaceMembershipsForUserRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipsForUserRequest, _super);
    function GetWorkspaceMembershipsForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceMembershipsForUserPathParams)
    ], GetWorkspaceMembershipsForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceMembershipsForUserQueryParams)
    ], GetWorkspaceMembershipsForUserRequest.prototype, "queryParams", void 0);
    return GetWorkspaceMembershipsForUserRequest;
}(SpeakeasyBase));
export { GetWorkspaceMembershipsForUserRequest };
var GetWorkspaceMembershipsForUserResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipsForUserResponse, _super);
    function GetWorkspaceMembershipsForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspaceMembershipsForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetWorkspaceMembershipsForUserResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceMembershipsForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceMembershipsForUser200ApplicationJson)
    ], GetWorkspaceMembershipsForUserResponse.prototype, "getWorkspaceMembershipsForUser200ApplicationJsonObject", void 0);
    return GetWorkspaceMembershipsForUserResponse;
}(SpeakeasyBase));
export { GetWorkspaceMembershipsForUserResponse };

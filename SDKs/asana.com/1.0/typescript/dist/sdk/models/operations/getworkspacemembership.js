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
var GetWorkspaceMembershipPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipPathParams, _super);
    function GetWorkspaceMembershipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_membership_gid" }),
        __metadata("design:type", String)
    ], GetWorkspaceMembershipPathParams.prototype, "workspaceMembershipGid", void 0);
    return GetWorkspaceMembershipPathParams;
}(SpeakeasyBase));
export { GetWorkspaceMembershipPathParams };
var GetWorkspaceMembershipQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipQueryParams, _super);
    function GetWorkspaceMembershipQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetWorkspaceMembershipQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetWorkspaceMembershipQueryParams.prototype, "optPretty", void 0);
    return GetWorkspaceMembershipQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceMembershipQueryParams };
var GetWorkspaceMembership200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembership200ApplicationJson, _super);
    function GetWorkspaceMembership200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.WorkspaceMembershipResponse)
    ], GetWorkspaceMembership200ApplicationJson.prototype, "data", void 0);
    return GetWorkspaceMembership200ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspaceMembership200ApplicationJson };
var GetWorkspaceMembershipRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipRequest, _super);
    function GetWorkspaceMembershipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceMembershipPathParams)
    ], GetWorkspaceMembershipRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceMembershipQueryParams)
    ], GetWorkspaceMembershipRequest.prototype, "queryParams", void 0);
    return GetWorkspaceMembershipRequest;
}(SpeakeasyBase));
export { GetWorkspaceMembershipRequest };
var GetWorkspaceMembershipResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipResponse, _super);
    function GetWorkspaceMembershipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspaceMembershipResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetWorkspaceMembershipResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceMembershipResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceMembership200ApplicationJson)
    ], GetWorkspaceMembershipResponse.prototype, "getWorkspaceMembership200ApplicationJsonObject", void 0);
    return GetWorkspaceMembershipResponse;
}(SpeakeasyBase));
export { GetWorkspaceMembershipResponse };

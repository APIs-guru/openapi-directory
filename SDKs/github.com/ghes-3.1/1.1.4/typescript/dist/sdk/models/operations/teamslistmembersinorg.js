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
var TeamsListMembersInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsListMembersInOrgPathParams, _super);
    function TeamsListMembersInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsListMembersInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsListMembersInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsListMembersInOrgPathParams;
}(SpeakeasyBase));
export { TeamsListMembersInOrgPathParams };
export var TeamsListMembersInOrgRoleEnum;
(function (TeamsListMembersInOrgRoleEnum) {
    TeamsListMembersInOrgRoleEnum["Member"] = "member";
    TeamsListMembersInOrgRoleEnum["Maintainer"] = "maintainer";
    TeamsListMembersInOrgRoleEnum["All"] = "all";
})(TeamsListMembersInOrgRoleEnum || (TeamsListMembersInOrgRoleEnum = {}));
var TeamsListMembersInOrgQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListMembersInOrgQueryParams, _super);
    function TeamsListMembersInOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListMembersInOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListMembersInOrgQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], TeamsListMembersInOrgQueryParams.prototype, "role", void 0);
    return TeamsListMembersInOrgQueryParams;
}(SpeakeasyBase));
export { TeamsListMembersInOrgQueryParams };
var TeamsListMembersInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsListMembersInOrgRequest, _super);
    function TeamsListMembersInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListMembersInOrgPathParams)
    ], TeamsListMembersInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListMembersInOrgQueryParams)
    ], TeamsListMembersInOrgRequest.prototype, "queryParams", void 0);
    return TeamsListMembersInOrgRequest;
}(SpeakeasyBase));
export { TeamsListMembersInOrgRequest };
var TeamsListMembersInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsListMembersInOrgResponse, _super);
    function TeamsListMembersInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListMembersInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListMembersInOrgResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListMembersInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SimpleUser }),
        __metadata("design:type", Array)
    ], TeamsListMembersInOrgResponse.prototype, "simpleUsers", void 0);
    return TeamsListMembersInOrgResponse;
}(SpeakeasyBase));
export { TeamsListMembersInOrgResponse };

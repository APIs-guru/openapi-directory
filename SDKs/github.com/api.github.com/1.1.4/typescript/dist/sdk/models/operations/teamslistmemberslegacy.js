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
var TeamsListMembersLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsListMembersLegacyPathParams, _super);
    function TeamsListMembersLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsListMembersLegacyPathParams.prototype, "teamId", void 0);
    return TeamsListMembersLegacyPathParams;
}(SpeakeasyBase));
export { TeamsListMembersLegacyPathParams };
export var TeamsListMembersLegacyRoleEnum;
(function (TeamsListMembersLegacyRoleEnum) {
    TeamsListMembersLegacyRoleEnum["Member"] = "member";
    TeamsListMembersLegacyRoleEnum["Maintainer"] = "maintainer";
    TeamsListMembersLegacyRoleEnum["All"] = "all";
})(TeamsListMembersLegacyRoleEnum || (TeamsListMembersLegacyRoleEnum = {}));
var TeamsListMembersLegacyQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListMembersLegacyQueryParams, _super);
    function TeamsListMembersLegacyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListMembersLegacyQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListMembersLegacyQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], TeamsListMembersLegacyQueryParams.prototype, "role", void 0);
    return TeamsListMembersLegacyQueryParams;
}(SpeakeasyBase));
export { TeamsListMembersLegacyQueryParams };
var TeamsListMembersLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsListMembersLegacyRequest, _super);
    function TeamsListMembersLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListMembersLegacyPathParams)
    ], TeamsListMembersLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListMembersLegacyQueryParams)
    ], TeamsListMembersLegacyRequest.prototype, "queryParams", void 0);
    return TeamsListMembersLegacyRequest;
}(SpeakeasyBase));
export { TeamsListMembersLegacyRequest };
var TeamsListMembersLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsListMembersLegacyResponse, _super);
    function TeamsListMembersLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListMembersLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListMembersLegacyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListMembersLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], TeamsListMembersLegacyResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SimpleUser }),
        __metadata("design:type", Array)
    ], TeamsListMembersLegacyResponse.prototype, "simpleUsers", void 0);
    return TeamsListMembersLegacyResponse;
}(SpeakeasyBase));
export { TeamsListMembersLegacyResponse };

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
var TeamsListMembersPathParams = /** @class */ (function (_super) {
    __extends(TeamsListMembersPathParams, _super);
    function TeamsListMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsListMembersPathParams.prototype, "teamId", void 0);
    return TeamsListMembersPathParams;
}(SpeakeasyBase));
export { TeamsListMembersPathParams };
export var TeamsListMembersRoleEnum;
(function (TeamsListMembersRoleEnum) {
    TeamsListMembersRoleEnum["Member"] = "member";
    TeamsListMembersRoleEnum["Maintainer"] = "maintainer";
    TeamsListMembersRoleEnum["All"] = "all";
})(TeamsListMembersRoleEnum || (TeamsListMembersRoleEnum = {}));
var TeamsListMembersQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListMembersQueryParams, _super);
    function TeamsListMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListMembersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListMembersQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], TeamsListMembersQueryParams.prototype, "role", void 0);
    return TeamsListMembersQueryParams;
}(SpeakeasyBase));
export { TeamsListMembersQueryParams };
var TeamsListMembersRequest = /** @class */ (function (_super) {
    __extends(TeamsListMembersRequest, _super);
    function TeamsListMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListMembersPathParams)
    ], TeamsListMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListMembersQueryParams)
    ], TeamsListMembersRequest.prototype, "queryParams", void 0);
    return TeamsListMembersRequest;
}(SpeakeasyBase));
export { TeamsListMembersRequest };
var TeamsListMembersResponse = /** @class */ (function (_super) {
    __extends(TeamsListMembersResponse, _super);
    function TeamsListMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListMembersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListMembersResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListMembersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SimpleUser }),
        __metadata("design:type", Array)
    ], TeamsListMembersResponse.prototype, "simpleUsers", void 0);
    return TeamsListMembersResponse;
}(SpeakeasyBase));
export { TeamsListMembersResponse };

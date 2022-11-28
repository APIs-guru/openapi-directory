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
var TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams, _super);
    function TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams;
}(SpeakeasyBase));
export { TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams };
var TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups = /** @class */ (function (_super) {
    __extends(TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups, _super);
    function TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_description" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups.prototype, "groupDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_id" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_name" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups.prototype, "groupName", void 0);
    return TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups;
}(SpeakeasyBase));
export { TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups };
var TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody = /** @class */ (function (_super) {
    __extends(TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody, _super);
    function TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups }),
        __metadata("design:type", Array)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody.prototype, "groups", void 0);
    return TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody;
}(SpeakeasyBase));
export { TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody };
var TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest, _super);
    function TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest.prototype, "request", void 0);
    return TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest;
}(SpeakeasyBase));
export { TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest };
var TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse, _super);
    function TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GroupMapping)
    ], TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse.prototype, "groupMapping", void 0);
    return TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse;
}(SpeakeasyBase));
export { TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse };

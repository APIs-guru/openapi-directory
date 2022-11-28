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
var EnterpriseAdminSyncLdapMappingForTeamPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSyncLdapMappingForTeamPathParams, _super);
    function EnterpriseAdminSyncLdapMappingForTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminSyncLdapMappingForTeamPathParams.prototype, "teamId", void 0);
    return EnterpriseAdminSyncLdapMappingForTeamPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminSyncLdapMappingForTeamPathParams };
var EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson, _super);
    function EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson.prototype, "status", void 0);
    return EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson;
}(SpeakeasyBase));
export { EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson };
var EnterpriseAdminSyncLdapMappingForTeamRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSyncLdapMappingForTeamRequest, _super);
    function EnterpriseAdminSyncLdapMappingForTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminSyncLdapMappingForTeamPathParams)
    ], EnterpriseAdminSyncLdapMappingForTeamRequest.prototype, "pathParams", void 0);
    return EnterpriseAdminSyncLdapMappingForTeamRequest;
}(SpeakeasyBase));
export { EnterpriseAdminSyncLdapMappingForTeamRequest };
var EnterpriseAdminSyncLdapMappingForTeamResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSyncLdapMappingForTeamResponse, _super);
    function EnterpriseAdminSyncLdapMappingForTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminSyncLdapMappingForTeamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminSyncLdapMappingForTeamResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson)
    ], EnterpriseAdminSyncLdapMappingForTeamResponse.prototype, "enterpriseAdminSyncLdapMappingForTeam201ApplicationJsonObject", void 0);
    return EnterpriseAdminSyncLdapMappingForTeamResponse;
}(SpeakeasyBase));
export { EnterpriseAdminSyncLdapMappingForTeamResponse };

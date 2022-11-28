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
var TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams, _super);
    function TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams.prototype, "teamId", void 0);
    return TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams;
}(SpeakeasyBase));
export { TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams };
var TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups = /** @class */ (function (_super) {
    __extends(TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups, _super);
    function TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_description" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups.prototype, "groupDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_id" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_name" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups.prototype, "name", void 0);
    return TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups;
}(SpeakeasyBase));
export { TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups };
var TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody = /** @class */ (function (_super) {
    __extends(TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody, _super);
    function TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups }),
        __metadata("design:type", Array)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=synced_at" }),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody.prototype, "syncedAt", void 0);
    return TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody;
}(SpeakeasyBase));
export { TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody };
var TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest, _super);
    function TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest.prototype, "request", void 0);
    return TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest;
}(SpeakeasyBase));
export { TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest };
var TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse, _super);
    function TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GroupMapping)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse.prototype, "groupMapping", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse.prototype, "validationError", void 0);
    return TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse;
}(SpeakeasyBase));
export { TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse };

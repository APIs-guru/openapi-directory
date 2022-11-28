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
var GetTeamsForOrganizationPathParams = /** @class */ (function (_super) {
    __extends(GetTeamsForOrganizationPathParams, _super);
    function GetTeamsForOrganizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], GetTeamsForOrganizationPathParams.prototype, "workspaceGid", void 0);
    return GetTeamsForOrganizationPathParams;
}(SpeakeasyBase));
export { GetTeamsForOrganizationPathParams };
var GetTeamsForOrganizationQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamsForOrganizationQueryParams, _super);
    function GetTeamsForOrganizationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTeamsForOrganizationQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTeamsForOrganizationQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetTeamsForOrganizationQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetTeamsForOrganizationQueryParams.prototype, "optPretty", void 0);
    return GetTeamsForOrganizationQueryParams;
}(SpeakeasyBase));
export { GetTeamsForOrganizationQueryParams };
var GetTeamsForOrganization200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTeamsForOrganization200ApplicationJson, _super);
    function GetTeamsForOrganization200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TeamCompact }),
        __metadata("design:type", Array)
    ], GetTeamsForOrganization200ApplicationJson.prototype, "data", void 0);
    return GetTeamsForOrganization200ApplicationJson;
}(SpeakeasyBase));
export { GetTeamsForOrganization200ApplicationJson };
var GetTeamsForOrganizationRequest = /** @class */ (function (_super) {
    __extends(GetTeamsForOrganizationRequest, _super);
    function GetTeamsForOrganizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsForOrganizationPathParams)
    ], GetTeamsForOrganizationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsForOrganizationQueryParams)
    ], GetTeamsForOrganizationRequest.prototype, "queryParams", void 0);
    return GetTeamsForOrganizationRequest;
}(SpeakeasyBase));
export { GetTeamsForOrganizationRequest };
var GetTeamsForOrganizationResponse = /** @class */ (function (_super) {
    __extends(GetTeamsForOrganizationResponse, _super);
    function GetTeamsForOrganizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamsForOrganizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetTeamsForOrganizationResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamsForOrganizationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsForOrganization200ApplicationJson)
    ], GetTeamsForOrganizationResponse.prototype, "getTeamsForOrganization200ApplicationJsonObject", void 0);
    return GetTeamsForOrganizationResponse;
}(SpeakeasyBase));
export { GetTeamsForOrganizationResponse };

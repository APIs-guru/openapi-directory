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
var TeamsAddMemberLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsAddMemberLegacyPathParams, _super);
    function TeamsAddMemberLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsAddMemberLegacyPathParams.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], TeamsAddMemberLegacyPathParams.prototype, "username", void 0);
    return TeamsAddMemberLegacyPathParams;
}(SpeakeasyBase));
export { TeamsAddMemberLegacyPathParams };
var TeamsAddMemberLegacy422ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(TeamsAddMemberLegacy422ApplicationJsonErrors, _super);
    function TeamsAddMemberLegacy422ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], TeamsAddMemberLegacy422ApplicationJsonErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], TeamsAddMemberLegacy422ApplicationJsonErrors.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], TeamsAddMemberLegacy422ApplicationJsonErrors.prototype, "resource", void 0);
    return TeamsAddMemberLegacy422ApplicationJsonErrors;
}(SpeakeasyBase));
export { TeamsAddMemberLegacy422ApplicationJsonErrors };
var TeamsAddMemberLegacy422ApplicationJson = /** @class */ (function (_super) {
    __extends(TeamsAddMemberLegacy422ApplicationJson, _super);
    function TeamsAddMemberLegacy422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], TeamsAddMemberLegacy422ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: TeamsAddMemberLegacy422ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], TeamsAddMemberLegacy422ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TeamsAddMemberLegacy422ApplicationJson.prototype, "message", void 0);
    return TeamsAddMemberLegacy422ApplicationJson;
}(SpeakeasyBase));
export { TeamsAddMemberLegacy422ApplicationJson };
var TeamsAddMemberLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsAddMemberLegacyRequest, _super);
    function TeamsAddMemberLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddMemberLegacyPathParams)
    ], TeamsAddMemberLegacyRequest.prototype, "pathParams", void 0);
    return TeamsAddMemberLegacyRequest;
}(SpeakeasyBase));
export { TeamsAddMemberLegacyRequest };
var TeamsAddMemberLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsAddMemberLegacyResponse, _super);
    function TeamsAddMemberLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsAddMemberLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsAddMemberLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], TeamsAddMemberLegacyResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddMemberLegacy422ApplicationJson)
    ], TeamsAddMemberLegacyResponse.prototype, "teamsAddMemberLegacy422ApplicationJsonObject", void 0);
    return TeamsAddMemberLegacyResponse;
}(SpeakeasyBase));
export { TeamsAddMemberLegacyResponse };

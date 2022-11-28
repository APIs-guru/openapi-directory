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
var TeamsUpdatePathParams = /** @class */ (function (_super) {
    __extends(TeamsUpdatePathParams, _super);
    function TeamsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], TeamsUpdatePathParams.prototype, "teamId", void 0);
    return TeamsUpdatePathParams;
}(SpeakeasyBase));
export { TeamsUpdatePathParams };
var TeamsUpdateRequestBody = /** @class */ (function (_super) {
    __extends(TeamsUpdateRequestBody, _super);
    function TeamsUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamsUpdateRequestBody.prototype, "name", void 0);
    return TeamsUpdateRequestBody;
}(SpeakeasyBase));
export { TeamsUpdateRequestBody };
var TeamsUpdateSecurity = /** @class */ (function (_super) {
    __extends(TeamsUpdateSecurity, _super);
    function TeamsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], TeamsUpdateSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], TeamsUpdateSecurity.prototype, "project", void 0);
    return TeamsUpdateSecurity;
}(SpeakeasyBase));
export { TeamsUpdateSecurity };
var TeamsUpdateRequest = /** @class */ (function (_super) {
    __extends(TeamsUpdateRequest, _super);
    function TeamsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsUpdatePathParams)
    ], TeamsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsUpdateRequestBody)
    ], TeamsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsUpdateSecurity)
    ], TeamsUpdateRequest.prototype, "security", void 0);
    return TeamsUpdateRequest;
}(SpeakeasyBase));
export { TeamsUpdateRequest };
var TeamsUpdateResponse = /** @class */ (function (_super) {
    __extends(TeamsUpdateResponse, _super);
    function TeamsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Team)
    ], TeamsUpdateResponse.prototype, "team", void 0);
    return TeamsUpdateResponse;
}(SpeakeasyBase));
export { TeamsUpdateResponse };

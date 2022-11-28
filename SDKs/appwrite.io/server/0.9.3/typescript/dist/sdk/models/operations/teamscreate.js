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
var TeamsCreateRequestBody = /** @class */ (function (_super) {
    __extends(TeamsCreateRequestBody, _super);
    function TeamsCreateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamsCreateRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles" }),
        __metadata("design:type", Array)
    ], TeamsCreateRequestBody.prototype, "roles", void 0);
    return TeamsCreateRequestBody;
}(SpeakeasyBase));
export { TeamsCreateRequestBody };
var TeamsCreateSecurity = /** @class */ (function (_super) {
    __extends(TeamsCreateSecurity, _super);
    function TeamsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], TeamsCreateSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], TeamsCreateSecurity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], TeamsCreateSecurity.prototype, "project", void 0);
    return TeamsCreateSecurity;
}(SpeakeasyBase));
export { TeamsCreateSecurity };
var TeamsCreateRequest = /** @class */ (function (_super) {
    __extends(TeamsCreateRequest, _super);
    function TeamsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsCreateRequestBody)
    ], TeamsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsCreateSecurity)
    ], TeamsCreateRequest.prototype, "security", void 0);
    return TeamsCreateRequest;
}(SpeakeasyBase));
export { TeamsCreateRequest };
var TeamsCreateResponse = /** @class */ (function (_super) {
    __extends(TeamsCreateResponse, _super);
    function TeamsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Team)
    ], TeamsCreateResponse.prototype, "team", void 0);
    return TeamsCreateResponse;
}(SpeakeasyBase));
export { TeamsCreateResponse };

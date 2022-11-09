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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var TeamsCreateMembershipPathParams = /** @class */ (function (_super) {
    __extends(TeamsCreateMembershipPathParams, _super);
    function TeamsCreateMembershipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], TeamsCreateMembershipPathParams.prototype, "teamId", void 0);
    return TeamsCreateMembershipPathParams;
}(SpeakeasyBase));
export { TeamsCreateMembershipPathParams };
var TeamsCreateMembershipRequestBody = /** @class */ (function (_super) {
    __extends(TeamsCreateMembershipRequestBody, _super);
    function TeamsCreateMembershipRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], TeamsCreateMembershipRequestBody.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamsCreateMembershipRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=roles" }),
        __metadata("design:type", Array)
    ], TeamsCreateMembershipRequestBody.prototype, "roles", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamsCreateMembershipRequestBody.prototype, "url", void 0);
    return TeamsCreateMembershipRequestBody;
}(SpeakeasyBase));
export { TeamsCreateMembershipRequestBody };
var TeamsCreateMembershipSecurity = /** @class */ (function (_super) {
    __extends(TeamsCreateMembershipSecurity, _super);
    function TeamsCreateMembershipSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], TeamsCreateMembershipSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], TeamsCreateMembershipSecurity.prototype, "project", void 0);
    return TeamsCreateMembershipSecurity;
}(SpeakeasyBase));
export { TeamsCreateMembershipSecurity };
var TeamsCreateMembershipRequest = /** @class */ (function (_super) {
    __extends(TeamsCreateMembershipRequest, _super);
    function TeamsCreateMembershipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TeamsCreateMembershipPathParams)
    ], TeamsCreateMembershipRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsCreateMembershipRequestBody)
    ], TeamsCreateMembershipRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TeamsCreateMembershipSecurity)
    ], TeamsCreateMembershipRequest.prototype, "security", void 0);
    return TeamsCreateMembershipRequest;
}(SpeakeasyBase));
export { TeamsCreateMembershipRequest };
var TeamsCreateMembershipResponse = /** @class */ (function (_super) {
    __extends(TeamsCreateMembershipResponse, _super);
    function TeamsCreateMembershipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TeamsCreateMembershipResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TeamsCreateMembershipResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Membership)
    ], TeamsCreateMembershipResponse.prototype, "membership", void 0);
    return TeamsCreateMembershipResponse;
}(SpeakeasyBase));
export { TeamsCreateMembershipResponse };

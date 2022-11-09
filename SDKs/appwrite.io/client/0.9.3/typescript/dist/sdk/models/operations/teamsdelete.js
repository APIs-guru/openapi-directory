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
var TeamsDeletePathParams = /** @class */ (function (_super) {
    __extends(TeamsDeletePathParams, _super);
    function TeamsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], TeamsDeletePathParams.prototype, "teamId", void 0);
    return TeamsDeletePathParams;
}(SpeakeasyBase));
export { TeamsDeletePathParams };
var TeamsDeleteSecurity = /** @class */ (function (_super) {
    __extends(TeamsDeleteSecurity, _super);
    function TeamsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], TeamsDeleteSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], TeamsDeleteSecurity.prototype, "project", void 0);
    return TeamsDeleteSecurity;
}(SpeakeasyBase));
export { TeamsDeleteSecurity };
var TeamsDeleteRequest = /** @class */ (function (_super) {
    __extends(TeamsDeleteRequest, _super);
    function TeamsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TeamsDeletePathParams)
    ], TeamsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TeamsDeleteSecurity)
    ], TeamsDeleteRequest.prototype, "security", void 0);
    return TeamsDeleteRequest;
}(SpeakeasyBase));
export { TeamsDeleteRequest };
var TeamsDeleteResponse = /** @class */ (function (_super) {
    __extends(TeamsDeleteResponse, _super);
    function TeamsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TeamsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TeamsDeleteResponse.prototype, "statusCode", void 0);
    return TeamsDeleteResponse;
}(SpeakeasyBase));
export { TeamsDeleteResponse };

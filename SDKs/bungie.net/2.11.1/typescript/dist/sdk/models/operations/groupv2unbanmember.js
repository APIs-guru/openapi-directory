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
var GroupV2UnbanMemberPathParams = /** @class */ (function (_super) {
    __extends(GroupV2UnbanMemberPathParams, _super);
    function GroupV2UnbanMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2UnbanMemberPathParams.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" }),
        __metadata("design:type", Number)
    ], GroupV2UnbanMemberPathParams.prototype, "membershipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], GroupV2UnbanMemberPathParams.prototype, "membershipType", void 0);
    return GroupV2UnbanMemberPathParams;
}(SpeakeasyBase));
export { GroupV2UnbanMemberPathParams };
var GroupV2UnbanMemberSecurity = /** @class */ (function (_super) {
    __extends(GroupV2UnbanMemberSecurity, _super);
    function GroupV2UnbanMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2UnbanMemberSecurity.prototype, "oauth2", void 0);
    return GroupV2UnbanMemberSecurity;
}(SpeakeasyBase));
export { GroupV2UnbanMemberSecurity };
var GroupV2UnbanMemberRequest = /** @class */ (function (_super) {
    __extends(GroupV2UnbanMemberRequest, _super);
    function GroupV2UnbanMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2UnbanMemberPathParams)
    ], GroupV2UnbanMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2UnbanMemberSecurity)
    ], GroupV2UnbanMemberRequest.prototype, "security", void 0);
    return GroupV2UnbanMemberRequest;
}(SpeakeasyBase));
export { GroupV2UnbanMemberRequest };
var GroupV2UnbanMemberResponse = /** @class */ (function (_super) {
    __extends(GroupV2UnbanMemberResponse, _super);
    function GroupV2UnbanMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2UnbanMemberResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GroupV2UnbanMemberResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GroupV2UnbanMemberResponse.prototype, "statusCode", void 0);
    return GroupV2UnbanMemberResponse;
}(SpeakeasyBase));
export { GroupV2UnbanMemberResponse };

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
var UserGetMembershipDataByIdPathParams = /** @class */ (function (_super) {
    __extends(UserGetMembershipDataByIdPathParams, _super);
    function UserGetMembershipDataByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" }),
        __metadata("design:type", Number)
    ], UserGetMembershipDataByIdPathParams.prototype, "membershipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], UserGetMembershipDataByIdPathParams.prototype, "membershipType", void 0);
    return UserGetMembershipDataByIdPathParams;
}(SpeakeasyBase));
export { UserGetMembershipDataByIdPathParams };
var UserGetMembershipDataByIdRequest = /** @class */ (function (_super) {
    __extends(UserGetMembershipDataByIdRequest, _super);
    function UserGetMembershipDataByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UserGetMembershipDataByIdPathParams)
    ], UserGetMembershipDataByIdRequest.prototype, "pathParams", void 0);
    return UserGetMembershipDataByIdRequest;
}(SpeakeasyBase));
export { UserGetMembershipDataByIdRequest };
var UserGetMembershipDataByIdResponse = /** @class */ (function (_super) {
    __extends(UserGetMembershipDataByIdResponse, _super);
    function UserGetMembershipDataByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], UserGetMembershipDataByIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UserGetMembershipDataByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UserGetMembershipDataByIdResponse.prototype, "statusCode", void 0);
    return UserGetMembershipDataByIdResponse;
}(SpeakeasyBase));
export { UserGetMembershipDataByIdResponse };

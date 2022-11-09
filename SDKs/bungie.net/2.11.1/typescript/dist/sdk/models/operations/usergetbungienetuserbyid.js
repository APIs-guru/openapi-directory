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
var UserGetBungieNetUserByIdPathParams = /** @class */ (function (_super) {
    __extends(UserGetBungieNetUserByIdPathParams, _super);
    function UserGetBungieNetUserByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserGetBungieNetUserByIdPathParams.prototype, "id", void 0);
    return UserGetBungieNetUserByIdPathParams;
}(SpeakeasyBase));
export { UserGetBungieNetUserByIdPathParams };
var UserGetBungieNetUserByIdRequest = /** @class */ (function (_super) {
    __extends(UserGetBungieNetUserByIdRequest, _super);
    function UserGetBungieNetUserByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UserGetBungieNetUserByIdPathParams)
    ], UserGetBungieNetUserByIdRequest.prototype, "pathParams", void 0);
    return UserGetBungieNetUserByIdRequest;
}(SpeakeasyBase));
export { UserGetBungieNetUserByIdRequest };
var UserGetBungieNetUserByIdResponse = /** @class */ (function (_super) {
    __extends(UserGetBungieNetUserByIdResponse, _super);
    function UserGetBungieNetUserByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], UserGetBungieNetUserByIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UserGetBungieNetUserByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UserGetBungieNetUserByIdResponse.prototype, "statusCode", void 0);
    return UserGetBungieNetUserByIdResponse;
}(SpeakeasyBase));
export { UserGetBungieNetUserByIdResponse };

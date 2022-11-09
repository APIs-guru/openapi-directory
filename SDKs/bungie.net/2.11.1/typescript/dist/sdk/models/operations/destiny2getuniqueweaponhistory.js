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
var Destiny2GetUniqueWeaponHistoryPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetUniqueWeaponHistoryPathParams, _super);
    function Destiny2GetUniqueWeaponHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" }),
        __metadata("design:type", Number)
    ], Destiny2GetUniqueWeaponHistoryPathParams.prototype, "characterId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetUniqueWeaponHistoryPathParams.prototype, "destinyMembershipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetUniqueWeaponHistoryPathParams.prototype, "membershipType", void 0);
    return Destiny2GetUniqueWeaponHistoryPathParams;
}(SpeakeasyBase));
export { Destiny2GetUniqueWeaponHistoryPathParams };
var Destiny2GetUniqueWeaponHistoryRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetUniqueWeaponHistoryRequest, _super);
    function Destiny2GetUniqueWeaponHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Destiny2GetUniqueWeaponHistoryPathParams)
    ], Destiny2GetUniqueWeaponHistoryRequest.prototype, "pathParams", void 0);
    return Destiny2GetUniqueWeaponHistoryRequest;
}(SpeakeasyBase));
export { Destiny2GetUniqueWeaponHistoryRequest };
var Destiny2GetUniqueWeaponHistoryResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetUniqueWeaponHistoryResponse, _super);
    function Destiny2GetUniqueWeaponHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetUniqueWeaponHistoryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Destiny2GetUniqueWeaponHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Destiny2GetUniqueWeaponHistoryResponse.prototype, "statusCode", void 0);
    return Destiny2GetUniqueWeaponHistoryResponse;
}(SpeakeasyBase));
export { Destiny2GetUniqueWeaponHistoryResponse };

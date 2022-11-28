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
var Destiny2GetProfilePathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetProfilePathParams, _super);
    function Destiny2GetProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetProfilePathParams.prototype, "destinyMembershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetProfilePathParams.prototype, "membershipType", void 0);
    return Destiny2GetProfilePathParams;
}(SpeakeasyBase));
export { Destiny2GetProfilePathParams };
var Destiny2GetProfileQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetProfileQueryParams, _super);
    function Destiny2GetProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=components" }),
        __metadata("design:type", Array)
    ], Destiny2GetProfileQueryParams.prototype, "components", void 0);
    return Destiny2GetProfileQueryParams;
}(SpeakeasyBase));
export { Destiny2GetProfileQueryParams };
var Destiny2GetProfileRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetProfileRequest, _super);
    function Destiny2GetProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetProfilePathParams)
    ], Destiny2GetProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetProfileQueryParams)
    ], Destiny2GetProfileRequest.prototype, "queryParams", void 0);
    return Destiny2GetProfileRequest;
}(SpeakeasyBase));
export { Destiny2GetProfileRequest };
var Destiny2GetProfileResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetProfileResponse, _super);
    function Destiny2GetProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetProfileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetProfileResponse.prototype, "statusCode", void 0);
    return Destiny2GetProfileResponse;
}(SpeakeasyBase));
export { Destiny2GetProfileResponse };

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
var Destiny2GetVendorsPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetVendorsPathParams, _super);
    function Destiny2GetVendorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" }),
        __metadata("design:type", Number)
    ], Destiny2GetVendorsPathParams.prototype, "characterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetVendorsPathParams.prototype, "destinyMembershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetVendorsPathParams.prototype, "membershipType", void 0);
    return Destiny2GetVendorsPathParams;
}(SpeakeasyBase));
export { Destiny2GetVendorsPathParams };
var Destiny2GetVendorsQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetVendorsQueryParams, _super);
    function Destiny2GetVendorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=components" }),
        __metadata("design:type", Array)
    ], Destiny2GetVendorsQueryParams.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Number)
    ], Destiny2GetVendorsQueryParams.prototype, "filter", void 0);
    return Destiny2GetVendorsQueryParams;
}(SpeakeasyBase));
export { Destiny2GetVendorsQueryParams };
var Destiny2GetVendorsRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetVendorsRequest, _super);
    function Destiny2GetVendorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetVendorsPathParams)
    ], Destiny2GetVendorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetVendorsQueryParams)
    ], Destiny2GetVendorsRequest.prototype, "queryParams", void 0);
    return Destiny2GetVendorsRequest;
}(SpeakeasyBase));
export { Destiny2GetVendorsRequest };
var Destiny2GetVendorsResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetVendorsResponse, _super);
    function Destiny2GetVendorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetVendorsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetVendorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetVendorsResponse.prototype, "statusCode", void 0);
    return Destiny2GetVendorsResponse;
}(SpeakeasyBase));
export { Destiny2GetVendorsResponse };

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
var Destiny2GetCollectibleNodeDetailsPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetCollectibleNodeDetailsPathParams, _super);
    function Destiny2GetCollectibleNodeDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" }),
        __metadata("design:type", Number)
    ], Destiny2GetCollectibleNodeDetailsPathParams.prototype, "characterId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=collectiblePresentationNodeHash" }),
        __metadata("design:type", Number)
    ], Destiny2GetCollectibleNodeDetailsPathParams.prototype, "collectiblePresentationNodeHash", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetCollectibleNodeDetailsPathParams.prototype, "destinyMembershipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetCollectibleNodeDetailsPathParams.prototype, "membershipType", void 0);
    return Destiny2GetCollectibleNodeDetailsPathParams;
}(SpeakeasyBase));
export { Destiny2GetCollectibleNodeDetailsPathParams };
var Destiny2GetCollectibleNodeDetailsQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetCollectibleNodeDetailsQueryParams, _super);
    function Destiny2GetCollectibleNodeDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=components" }),
        __metadata("design:type", Array)
    ], Destiny2GetCollectibleNodeDetailsQueryParams.prototype, "components", void 0);
    return Destiny2GetCollectibleNodeDetailsQueryParams;
}(SpeakeasyBase));
export { Destiny2GetCollectibleNodeDetailsQueryParams };
var Destiny2GetCollectibleNodeDetailsRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetCollectibleNodeDetailsRequest, _super);
    function Destiny2GetCollectibleNodeDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Destiny2GetCollectibleNodeDetailsPathParams)
    ], Destiny2GetCollectibleNodeDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Destiny2GetCollectibleNodeDetailsQueryParams)
    ], Destiny2GetCollectibleNodeDetailsRequest.prototype, "queryParams", void 0);
    return Destiny2GetCollectibleNodeDetailsRequest;
}(SpeakeasyBase));
export { Destiny2GetCollectibleNodeDetailsRequest };
var Destiny2GetCollectibleNodeDetailsResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetCollectibleNodeDetailsResponse, _super);
    function Destiny2GetCollectibleNodeDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetCollectibleNodeDetailsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Destiny2GetCollectibleNodeDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Destiny2GetCollectibleNodeDetailsResponse.prototype, "statusCode", void 0);
    return Destiny2GetCollectibleNodeDetailsResponse;
}(SpeakeasyBase));
export { Destiny2GetCollectibleNodeDetailsResponse };

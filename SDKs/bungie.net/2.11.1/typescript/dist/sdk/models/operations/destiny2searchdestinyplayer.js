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
var Destiny2SearchDestinyPlayerPathParams = /** @class */ (function (_super) {
    __extends(Destiny2SearchDestinyPlayerPathParams, _super);
    function Destiny2SearchDestinyPlayerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=displayName" }),
        __metadata("design:type", String)
    ], Destiny2SearchDestinyPlayerPathParams.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2SearchDestinyPlayerPathParams.prototype, "membershipType", void 0);
    return Destiny2SearchDestinyPlayerPathParams;
}(SpeakeasyBase));
export { Destiny2SearchDestinyPlayerPathParams };
var Destiny2SearchDestinyPlayerQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2SearchDestinyPlayerQueryParams, _super);
    function Destiny2SearchDestinyPlayerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnOriginalProfile" }),
        __metadata("design:type", Boolean)
    ], Destiny2SearchDestinyPlayerQueryParams.prototype, "returnOriginalProfile", void 0);
    return Destiny2SearchDestinyPlayerQueryParams;
}(SpeakeasyBase));
export { Destiny2SearchDestinyPlayerQueryParams };
var Destiny2SearchDestinyPlayerRequest = /** @class */ (function (_super) {
    __extends(Destiny2SearchDestinyPlayerRequest, _super);
    function Destiny2SearchDestinyPlayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2SearchDestinyPlayerPathParams)
    ], Destiny2SearchDestinyPlayerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2SearchDestinyPlayerQueryParams)
    ], Destiny2SearchDestinyPlayerRequest.prototype, "queryParams", void 0);
    return Destiny2SearchDestinyPlayerRequest;
}(SpeakeasyBase));
export { Destiny2SearchDestinyPlayerRequest };
var Destiny2SearchDestinyPlayerResponse = /** @class */ (function (_super) {
    __extends(Destiny2SearchDestinyPlayerResponse, _super);
    function Destiny2SearchDestinyPlayerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2SearchDestinyPlayerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2SearchDestinyPlayerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2SearchDestinyPlayerResponse.prototype, "statusCode", void 0);
    return Destiny2SearchDestinyPlayerResponse;
}(SpeakeasyBase));
export { Destiny2SearchDestinyPlayerResponse };

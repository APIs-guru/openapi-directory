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
var Destiny2GetItemPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetItemPathParams, _super);
    function Destiny2GetItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetItemPathParams.prototype, "destinyMembershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemInstanceId" }),
        __metadata("design:type", Number)
    ], Destiny2GetItemPathParams.prototype, "itemInstanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetItemPathParams.prototype, "membershipType", void 0);
    return Destiny2GetItemPathParams;
}(SpeakeasyBase));
export { Destiny2GetItemPathParams };
var Destiny2GetItemQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetItemQueryParams, _super);
    function Destiny2GetItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=components" }),
        __metadata("design:type", Array)
    ], Destiny2GetItemQueryParams.prototype, "components", void 0);
    return Destiny2GetItemQueryParams;
}(SpeakeasyBase));
export { Destiny2GetItemQueryParams };
var Destiny2GetItemRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetItemRequest, _super);
    function Destiny2GetItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetItemPathParams)
    ], Destiny2GetItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetItemQueryParams)
    ], Destiny2GetItemRequest.prototype, "queryParams", void 0);
    return Destiny2GetItemRequest;
}(SpeakeasyBase));
export { Destiny2GetItemRequest };
var Destiny2GetItemResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetItemResponse, _super);
    function Destiny2GetItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetItemResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetItemResponse.prototype, "statusCode", void 0);
    return Destiny2GetItemResponse;
}(SpeakeasyBase));
export { Destiny2GetItemResponse };

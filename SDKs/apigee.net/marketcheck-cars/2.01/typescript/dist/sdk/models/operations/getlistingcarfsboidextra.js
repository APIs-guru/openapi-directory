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
import * as shared from "../shared";
var GetListingCarFsboIdExtraPathParams = /** @class */ (function (_super) {
    __extends(GetListingCarFsboIdExtraPathParams, _super);
    function GetListingCarFsboIdExtraPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetListingCarFsboIdExtraPathParams.prototype, "id", void 0);
    return GetListingCarFsboIdExtraPathParams;
}(SpeakeasyBase));
export { GetListingCarFsboIdExtraPathParams };
var GetListingCarFsboIdExtraQueryParams = /** @class */ (function (_super) {
    __extends(GetListingCarFsboIdExtraQueryParams, _super);
    function GetListingCarFsboIdExtraQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetListingCarFsboIdExtraQueryParams.prototype, "apiKey", void 0);
    return GetListingCarFsboIdExtraQueryParams;
}(SpeakeasyBase));
export { GetListingCarFsboIdExtraQueryParams };
var GetListingCarFsboIdExtraRequest = /** @class */ (function (_super) {
    __extends(GetListingCarFsboIdExtraRequest, _super);
    function GetListingCarFsboIdExtraRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingCarFsboIdExtraPathParams)
    ], GetListingCarFsboIdExtraRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingCarFsboIdExtraQueryParams)
    ], GetListingCarFsboIdExtraRequest.prototype, "queryParams", void 0);
    return GetListingCarFsboIdExtraRequest;
}(SpeakeasyBase));
export { GetListingCarFsboIdExtraRequest };
var GetListingCarFsboIdExtraResponse = /** @class */ (function (_super) {
    __extends(GetListingCarFsboIdExtraResponse, _super);
    function GetListingCarFsboIdExtraResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListingCarFsboIdExtraResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetListingCarFsboIdExtraResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListingExtraAttributes)
    ], GetListingCarFsboIdExtraResponse.prototype, "listingExtraAttributes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListingCarFsboIdExtraResponse.prototype, "statusCode", void 0);
    return GetListingCarFsboIdExtraResponse;
}(SpeakeasyBase));
export { GetListingCarFsboIdExtraResponse };

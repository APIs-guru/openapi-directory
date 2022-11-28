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
var GetListingMotorcycleIdPathParams = /** @class */ (function (_super) {
    __extends(GetListingMotorcycleIdPathParams, _super);
    function GetListingMotorcycleIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetListingMotorcycleIdPathParams.prototype, "id", void 0);
    return GetListingMotorcycleIdPathParams;
}(SpeakeasyBase));
export { GetListingMotorcycleIdPathParams };
var GetListingMotorcycleIdQueryParams = /** @class */ (function (_super) {
    __extends(GetListingMotorcycleIdQueryParams, _super);
    function GetListingMotorcycleIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetListingMotorcycleIdQueryParams.prototype, "apiKey", void 0);
    return GetListingMotorcycleIdQueryParams;
}(SpeakeasyBase));
export { GetListingMotorcycleIdQueryParams };
var GetListingMotorcycleIdRequest = /** @class */ (function (_super) {
    __extends(GetListingMotorcycleIdRequest, _super);
    function GetListingMotorcycleIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingMotorcycleIdPathParams)
    ], GetListingMotorcycleIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingMotorcycleIdQueryParams)
    ], GetListingMotorcycleIdRequest.prototype, "queryParams", void 0);
    return GetListingMotorcycleIdRequest;
}(SpeakeasyBase));
export { GetListingMotorcycleIdRequest };
var GetListingMotorcycleIdResponse = /** @class */ (function (_super) {
    __extends(GetListingMotorcycleIdResponse, _super);
    function GetListingMotorcycleIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListingMotorcycleIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetListingMotorcycleIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MotorcycleListing)
    ], GetListingMotorcycleIdResponse.prototype, "motorcycleListing", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListingMotorcycleIdResponse.prototype, "statusCode", void 0);
    return GetListingMotorcycleIdResponse;
}(SpeakeasyBase));
export { GetListingMotorcycleIdResponse };

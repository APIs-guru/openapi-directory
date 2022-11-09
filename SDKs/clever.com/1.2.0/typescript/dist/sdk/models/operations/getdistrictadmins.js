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
import * as shared from "../shared";
var GetDistrictAdminsQueryParams = /** @class */ (function (_super) {
    __extends(GetDistrictAdminsQueryParams, _super);
    function GetDistrictAdminsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" }),
        __metadata("design:type", String)
    ], GetDistrictAdminsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=show_links" }),
        __metadata("design:type", String)
    ], GetDistrictAdminsQueryParams.prototype, "showLinks", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" }),
        __metadata("design:type", String)
    ], GetDistrictAdminsQueryParams.prototype, "startingAfter", void 0);
    return GetDistrictAdminsQueryParams;
}(SpeakeasyBase));
export { GetDistrictAdminsQueryParams };
var GetDistrictAdminsRequest = /** @class */ (function (_super) {
    __extends(GetDistrictAdminsRequest, _super);
    function GetDistrictAdminsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDistrictAdminsQueryParams)
    ], GetDistrictAdminsRequest.prototype, "queryParams", void 0);
    return GetDistrictAdminsRequest;
}(SpeakeasyBase));
export { GetDistrictAdminsRequest };
var GetDistrictAdminsResponse = /** @class */ (function (_super) {
    __extends(GetDistrictAdminsResponse, _super);
    function GetDistrictAdminsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDistrictAdminsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DistrictAdminsResponse)
    ], GetDistrictAdminsResponse.prototype, "districtAdminsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDistrictAdminsResponse.prototype, "statusCode", void 0);
    return GetDistrictAdminsResponse;
}(SpeakeasyBase));
export { GetDistrictAdminsResponse };

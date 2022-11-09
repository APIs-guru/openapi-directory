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
var GetDistrictAdminPathParams = /** @class */ (function (_super) {
    __extends(GetDistrictAdminPathParams, _super);
    function GetDistrictAdminPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetDistrictAdminPathParams.prototype, "id", void 0);
    return GetDistrictAdminPathParams;
}(SpeakeasyBase));
export { GetDistrictAdminPathParams };
var GetDistrictAdminRequest = /** @class */ (function (_super) {
    __extends(GetDistrictAdminRequest, _super);
    function GetDistrictAdminRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDistrictAdminPathParams)
    ], GetDistrictAdminRequest.prototype, "pathParams", void 0);
    return GetDistrictAdminRequest;
}(SpeakeasyBase));
export { GetDistrictAdminRequest };
var GetDistrictAdminResponse = /** @class */ (function (_super) {
    __extends(GetDistrictAdminResponse, _super);
    function GetDistrictAdminResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDistrictAdminResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DistrictAdminResponse)
    ], GetDistrictAdminResponse.prototype, "districtAdminResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFound)
    ], GetDistrictAdminResponse.prototype, "notFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDistrictAdminResponse.prototype, "statusCode", void 0);
    return GetDistrictAdminResponse;
}(SpeakeasyBase));
export { GetDistrictAdminResponse };

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
var GetDistrictForStudentContactPathParams = /** @class */ (function (_super) {
    __extends(GetDistrictForStudentContactPathParams, _super);
    function GetDistrictForStudentContactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetDistrictForStudentContactPathParams.prototype, "id", void 0);
    return GetDistrictForStudentContactPathParams;
}(SpeakeasyBase));
export { GetDistrictForStudentContactPathParams };
var GetDistrictForStudentContactRequest = /** @class */ (function (_super) {
    __extends(GetDistrictForStudentContactRequest, _super);
    function GetDistrictForStudentContactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDistrictForStudentContactPathParams)
    ], GetDistrictForStudentContactRequest.prototype, "pathParams", void 0);
    return GetDistrictForStudentContactRequest;
}(SpeakeasyBase));
export { GetDistrictForStudentContactRequest };
var GetDistrictForStudentContactResponse = /** @class */ (function (_super) {
    __extends(GetDistrictForStudentContactResponse, _super);
    function GetDistrictForStudentContactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDistrictForStudentContactResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DistrictResponse)
    ], GetDistrictForStudentContactResponse.prototype, "districtResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFound)
    ], GetDistrictForStudentContactResponse.prototype, "notFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDistrictForStudentContactResponse.prototype, "statusCode", void 0);
    return GetDistrictForStudentContactResponse;
}(SpeakeasyBase));
export { GetDistrictForStudentContactResponse };

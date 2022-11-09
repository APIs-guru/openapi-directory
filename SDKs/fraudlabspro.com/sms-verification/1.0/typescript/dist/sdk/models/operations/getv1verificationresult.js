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
export var GetV1VerificationResultFormatEnum;
(function (GetV1VerificationResultFormatEnum) {
    GetV1VerificationResultFormatEnum["Json"] = "json";
    GetV1VerificationResultFormatEnum["Xml"] = "xml";
})(GetV1VerificationResultFormatEnum || (GetV1VerificationResultFormatEnum = {}));
var GetV1VerificationResultQueryParams = /** @class */ (function (_super) {
    __extends(GetV1VerificationResultQueryParams, _super);
    function GetV1VerificationResultQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetV1VerificationResultQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GetV1VerificationResultQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=otp" }),
        __metadata("design:type", String)
    ], GetV1VerificationResultQueryParams.prototype, "otp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tran_id" }),
        __metadata("design:type", String)
    ], GetV1VerificationResultQueryParams.prototype, "tranId", void 0);
    return GetV1VerificationResultQueryParams;
}(SpeakeasyBase));
export { GetV1VerificationResultQueryParams };
var GetV1VerificationResultRequest = /** @class */ (function (_super) {
    __extends(GetV1VerificationResultRequest, _super);
    function GetV1VerificationResultRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV1VerificationResultQueryParams)
    ], GetV1VerificationResultRequest.prototype, "queryParams", void 0);
    return GetV1VerificationResultRequest;
}(SpeakeasyBase));
export { GetV1VerificationResultRequest };
var GetV1VerificationResultResponse = /** @class */ (function (_super) {
    __extends(GetV1VerificationResultResponse, _super);
    function GetV1VerificationResultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV1VerificationResultResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV1VerificationResultResponse.prototype, "getV1VerificationResult200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV1VerificationResultResponse.prototype, "statusCode", void 0);
    return GetV1VerificationResultResponse;
}(SpeakeasyBase));
export { GetV1VerificationResultResponse };

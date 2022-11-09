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
var NifBasicPathParams = /** @class */ (function (_super) {
    __extends(NifBasicPathParams, _super);
    function NifBasicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], NifBasicPathParams.prototype, "country", void 0);
    return NifBasicPathParams;
}(SpeakeasyBase));
export { NifBasicPathParams };
var NifBasicRequestBody = /** @class */ (function (_super) {
    __extends(NifBasicRequestBody, _super);
    function NifBasicRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=companyAddress;" }),
        __metadata("design:type", String)
    ], NifBasicRequestBody.prototype, "companyAddress", void 0);
    __decorate([
        Metadata({ data: "form, name=companyName;" }),
        __metadata("design:type", String)
    ], NifBasicRequestBody.prototype, "companyName", void 0);
    __decorate([
        Metadata({ data: "form, name=nifNumber;" }),
        __metadata("design:type", String)
    ], NifBasicRequestBody.prototype, "nifNumber", void 0);
    return NifBasicRequestBody;
}(SpeakeasyBase));
export { NifBasicRequestBody };
var NifBasicSecurity = /** @class */ (function (_super) {
    __extends(NifBasicSecurity, _super);
    function NifBasicSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], NifBasicSecurity.prototype, "userKey", void 0);
    return NifBasicSecurity;
}(SpeakeasyBase));
export { NifBasicSecurity };
var NifBasicRequest = /** @class */ (function (_super) {
    __extends(NifBasicRequest, _super);
    function NifBasicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NifBasicPathParams)
    ], NifBasicRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", NifBasicRequestBody)
    ], NifBasicRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NifBasicSecurity)
    ], NifBasicRequest.prototype, "security", void 0);
    return NifBasicRequest;
}(SpeakeasyBase));
export { NifBasicRequest };
var NifBasicResponse = /** @class */ (function (_super) {
    __extends(NifBasicResponse, _super);
    function NifBasicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NifBasicResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], NifBasicResponse.prototype, "nifBasic200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], NifBasicResponse.prototype, "nifBasicDefaultApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NifBasicResponse.prototype, "statusCode", void 0);
    return NifBasicResponse;
}(SpeakeasyBase));
export { NifBasicResponse };

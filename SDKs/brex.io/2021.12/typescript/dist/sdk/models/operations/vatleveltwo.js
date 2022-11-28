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
var VatLevelTwoPathParams = /** @class */ (function (_super) {
    __extends(VatLevelTwoPathParams, _super);
    function VatLevelTwoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], VatLevelTwoPathParams.prototype, "country", void 0);
    return VatLevelTwoPathParams;
}(SpeakeasyBase));
export { VatLevelTwoPathParams };
var VatLevelTwoRequestBody = /** @class */ (function (_super) {
    __extends(VatLevelTwoRequestBody, _super);
    function VatLevelTwoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=confirmation;" }),
        __metadata("design:type", Boolean)
    ], VatLevelTwoRequestBody.prototype, "confirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=vatNumber;" }),
        __metadata("design:type", String)
    ], VatLevelTwoRequestBody.prototype, "vatNumber", void 0);
    return VatLevelTwoRequestBody;
}(SpeakeasyBase));
export { VatLevelTwoRequestBody };
var VatLevelTwoSecurity = /** @class */ (function (_super) {
    __extends(VatLevelTwoSecurity, _super);
    function VatLevelTwoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], VatLevelTwoSecurity.prototype, "userKey", void 0);
    return VatLevelTwoSecurity;
}(SpeakeasyBase));
export { VatLevelTwoSecurity };
var VatLevelTwoRequest = /** @class */ (function (_super) {
    __extends(VatLevelTwoRequest, _super);
    function VatLevelTwoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VatLevelTwoPathParams)
    ], VatLevelTwoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", VatLevelTwoRequestBody)
    ], VatLevelTwoRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VatLevelTwoSecurity)
    ], VatLevelTwoRequest.prototype, "security", void 0);
    return VatLevelTwoRequest;
}(SpeakeasyBase));
export { VatLevelTwoRequest };
var VatLevelTwoResponse = /** @class */ (function (_super) {
    __extends(VatLevelTwoResponse, _super);
    function VatLevelTwoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VatLevelTwoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VatLevelTwoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], VatLevelTwoResponse.prototype, "vatLevelTwo200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], VatLevelTwoResponse.prototype, "vatLevelTwoDefaultApplicationJsonAny", void 0);
    return VatLevelTwoResponse;
}(SpeakeasyBase));
export { VatLevelTwoResponse };

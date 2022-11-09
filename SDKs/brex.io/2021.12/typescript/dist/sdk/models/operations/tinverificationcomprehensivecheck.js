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
var TinVerificationComprehensiveCheckQueryParams = /** @class */ (function (_super) {
    __extends(TinVerificationComprehensiveCheckQueryParams, _super);
    function TinVerificationComprehensiveCheckQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], TinVerificationComprehensiveCheckQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=threshold" }),
        __metadata("design:type", Number)
    ], TinVerificationComprehensiveCheckQueryParams.prototype, "threshold", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tin" }),
        __metadata("design:type", String)
    ], TinVerificationComprehensiveCheckQueryParams.prototype, "tin", void 0);
    return TinVerificationComprehensiveCheckQueryParams;
}(SpeakeasyBase));
export { TinVerificationComprehensiveCheckQueryParams };
var TinVerificationComprehensiveCheckSecurity = /** @class */ (function (_super) {
    __extends(TinVerificationComprehensiveCheckSecurity, _super);
    function TinVerificationComprehensiveCheckSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], TinVerificationComprehensiveCheckSecurity.prototype, "userKey", void 0);
    return TinVerificationComprehensiveCheckSecurity;
}(SpeakeasyBase));
export { TinVerificationComprehensiveCheckSecurity };
var TinVerificationComprehensiveCheckRequest = /** @class */ (function (_super) {
    __extends(TinVerificationComprehensiveCheckRequest, _super);
    function TinVerificationComprehensiveCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TinVerificationComprehensiveCheckQueryParams)
    ], TinVerificationComprehensiveCheckRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TinVerificationComprehensiveCheckSecurity)
    ], TinVerificationComprehensiveCheckRequest.prototype, "security", void 0);
    return TinVerificationComprehensiveCheckRequest;
}(SpeakeasyBase));
export { TinVerificationComprehensiveCheckRequest };
var TinVerificationComprehensiveCheckResponse = /** @class */ (function (_super) {
    __extends(TinVerificationComprehensiveCheckResponse, _super);
    function TinVerificationComprehensiveCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TinVerificationComprehensiveCheckResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TinVerificationComprehensiveCheckResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TinVerificationComprehensiveCheckResponse.prototype, "tinVerificationComprehensiveCheck200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TinVerificationComprehensiveCheckResponse.prototype, "tinVerificationComprehensiveCheckDefaultApplicationJsonAny", void 0);
    return TinVerificationComprehensiveCheckResponse;
}(SpeakeasyBase));
export { TinVerificationComprehensiveCheckResponse };

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
var EinVerificationComprehensiveQueryParams = /** @class */ (function (_super) {
    __extends(EinVerificationComprehensiveQueryParams, _super);
    function EinVerificationComprehensiveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ein" }),
        __metadata("design:type", String)
    ], EinVerificationComprehensiveQueryParams.prototype, "ein", void 0);
    return EinVerificationComprehensiveQueryParams;
}(SpeakeasyBase));
export { EinVerificationComprehensiveQueryParams };
var EinVerificationComprehensiveSecurity = /** @class */ (function (_super) {
    __extends(EinVerificationComprehensiveSecurity, _super);
    function EinVerificationComprehensiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], EinVerificationComprehensiveSecurity.prototype, "userKey", void 0);
    return EinVerificationComprehensiveSecurity;
}(SpeakeasyBase));
export { EinVerificationComprehensiveSecurity };
var EinVerificationComprehensiveRequest = /** @class */ (function (_super) {
    __extends(EinVerificationComprehensiveRequest, _super);
    function EinVerificationComprehensiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EinVerificationComprehensiveQueryParams)
    ], EinVerificationComprehensiveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EinVerificationComprehensiveSecurity)
    ], EinVerificationComprehensiveRequest.prototype, "security", void 0);
    return EinVerificationComprehensiveRequest;
}(SpeakeasyBase));
export { EinVerificationComprehensiveRequest };
var EinVerificationComprehensiveResponse = /** @class */ (function (_super) {
    __extends(EinVerificationComprehensiveResponse, _super);
    function EinVerificationComprehensiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EinVerificationComprehensiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], EinVerificationComprehensiveResponse.prototype, "einVerificationComprehensive200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], EinVerificationComprehensiveResponse.prototype, "einVerificationComprehensiveDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EinVerificationComprehensiveResponse.prototype, "statusCode", void 0);
    return EinVerificationComprehensiveResponse;
}(SpeakeasyBase));
export { EinVerificationComprehensiveResponse };

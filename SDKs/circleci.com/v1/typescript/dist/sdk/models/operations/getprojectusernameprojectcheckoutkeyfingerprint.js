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
var GetProjectUsernameProjectCheckoutKeyFingerprintPathParams = /** @class */ (function (_super) {
    __extends(GetProjectUsernameProjectCheckoutKeyFingerprintPathParams, _super);
    function GetProjectUsernameProjectCheckoutKeyFingerprintPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" }),
        __metadata("design:type", String)
    ], GetProjectUsernameProjectCheckoutKeyFingerprintPathParams.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], GetProjectUsernameProjectCheckoutKeyFingerprintPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetProjectUsernameProjectCheckoutKeyFingerprintPathParams.prototype, "username", void 0);
    return GetProjectUsernameProjectCheckoutKeyFingerprintPathParams;
}(SpeakeasyBase));
export { GetProjectUsernameProjectCheckoutKeyFingerprintPathParams };
var GetProjectUsernameProjectCheckoutKeyFingerprintRequest = /** @class */ (function (_super) {
    __extends(GetProjectUsernameProjectCheckoutKeyFingerprintRequest, _super);
    function GetProjectUsernameProjectCheckoutKeyFingerprintRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectUsernameProjectCheckoutKeyFingerprintPathParams)
    ], GetProjectUsernameProjectCheckoutKeyFingerprintRequest.prototype, "pathParams", void 0);
    return GetProjectUsernameProjectCheckoutKeyFingerprintRequest;
}(SpeakeasyBase));
export { GetProjectUsernameProjectCheckoutKeyFingerprintRequest };
var GetProjectUsernameProjectCheckoutKeyFingerprintResponse = /** @class */ (function (_super) {
    __extends(GetProjectUsernameProjectCheckoutKeyFingerprintResponse, _super);
    function GetProjectUsernameProjectCheckoutKeyFingerprintResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProjectUsernameProjectCheckoutKeyFingerprintResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Key)
    ], GetProjectUsernameProjectCheckoutKeyFingerprintResponse.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProjectUsernameProjectCheckoutKeyFingerprintResponse.prototype, "statusCode", void 0);
    return GetProjectUsernameProjectCheckoutKeyFingerprintResponse;
}(SpeakeasyBase));
export { GetProjectUsernameProjectCheckoutKeyFingerprintResponse };

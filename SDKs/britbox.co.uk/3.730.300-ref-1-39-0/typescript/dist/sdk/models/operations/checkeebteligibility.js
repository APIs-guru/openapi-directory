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
var CheckEeBtEligibilityQueryParams = /** @class */ (function (_super) {
    __extends(CheckEeBtEligibilityQueryParams, _super);
    function CheckEeBtEligibilityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], CheckEeBtEligibilityQueryParams.prototype, "lang", void 0);
    return CheckEeBtEligibilityQueryParams;
}(SpeakeasyBase));
export { CheckEeBtEligibilityQueryParams };
var CheckEeBtEligibilitySecurity = /** @class */ (function (_super) {
    __extends(CheckEeBtEligibilitySecurity, _super);
    function CheckEeBtEligibilitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], CheckEeBtEligibilitySecurity.prototype, "accountAuth", void 0);
    return CheckEeBtEligibilitySecurity;
}(SpeakeasyBase));
export { CheckEeBtEligibilitySecurity };
var CheckEeBtEligibilityRequest = /** @class */ (function (_super) {
    __extends(CheckEeBtEligibilityRequest, _super);
    function CheckEeBtEligibilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckEeBtEligibilityQueryParams)
    ], CheckEeBtEligibilityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckEeBtEligibilitySecurity)
    ], CheckEeBtEligibilityRequest.prototype, "security", void 0);
    return CheckEeBtEligibilityRequest;
}(SpeakeasyBase));
export { CheckEeBtEligibilityRequest };
var CheckEeBtEligibilityResponse = /** @class */ (function (_super) {
    __extends(CheckEeBtEligibilityResponse, _super);
    function CheckEeBtEligibilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CheckEeBtEligibilityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EeBtEligibility)
    ], CheckEeBtEligibilityResponse.prototype, "eeBtEligibility", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CheckEeBtEligibilityResponse.prototype, "statusCode", void 0);
    return CheckEeBtEligibilityResponse;
}(SpeakeasyBase));
export { CheckEeBtEligibilityResponse };

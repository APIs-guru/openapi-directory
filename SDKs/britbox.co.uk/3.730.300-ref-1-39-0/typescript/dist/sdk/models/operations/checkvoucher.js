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
var CheckVoucherPathParams = /** @class */ (function (_super) {
    __extends(CheckVoucherPathParams, _super);
    function CheckVoucherPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], CheckVoucherPathParams.prototype, "platform", void 0);
    return CheckVoucherPathParams;
}(SpeakeasyBase));
export { CheckVoucherPathParams };
var CheckVoucherQueryParams = /** @class */ (function (_super) {
    __extends(CheckVoucherQueryParams, _super);
    function CheckVoucherQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], CheckVoucherQueryParams.prototype, "lang", void 0);
    return CheckVoucherQueryParams;
}(SpeakeasyBase));
export { CheckVoucherQueryParams };
var CheckVoucherSecurity = /** @class */ (function (_super) {
    __extends(CheckVoucherSecurity, _super);
    function CheckVoucherSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], CheckVoucherSecurity.prototype, "accountAuth", void 0);
    return CheckVoucherSecurity;
}(SpeakeasyBase));
export { CheckVoucherSecurity };
var CheckVoucherRequest = /** @class */ (function (_super) {
    __extends(CheckVoucherRequest, _super);
    function CheckVoucherRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckVoucherPathParams)
    ], CheckVoucherRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckVoucherQueryParams)
    ], CheckVoucherRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvVoucherRequest)
    ], CheckVoucherRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckVoucherSecurity)
    ], CheckVoucherRequest.prototype, "security", void 0);
    return CheckVoucherRequest;
}(SpeakeasyBase));
export { CheckVoucherRequest };
var CheckVoucherResponse = /** @class */ (function (_super) {
    __extends(CheckVoucherResponse, _super);
    function CheckVoucherResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CheckVoucherResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvVoucher)
    ], CheckVoucherResponse.prototype, "itvVoucher", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], CheckVoucherResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CheckVoucherResponse.prototype, "statusCode", void 0);
    return CheckVoucherResponse;
}(SpeakeasyBase));
export { CheckVoucherResponse };

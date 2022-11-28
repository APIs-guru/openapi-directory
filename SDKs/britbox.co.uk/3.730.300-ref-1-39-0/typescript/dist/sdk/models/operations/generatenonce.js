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
var GenerateNonceQueryParams = /** @class */ (function (_super) {
    __extends(GenerateNonceQueryParams, _super);
    function GenerateNonceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GenerateNonceQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GenerateNonceQueryParams.prototype, "lang", void 0);
    return GenerateNonceQueryParams;
}(SpeakeasyBase));
export { GenerateNonceQueryParams };
var GenerateNonceSecurity = /** @class */ (function (_super) {
    __extends(GenerateNonceSecurity, _super);
    function GenerateNonceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GenerateNonceSecurity.prototype, "accountAuth", void 0);
    return GenerateNonceSecurity;
}(SpeakeasyBase));
export { GenerateNonceSecurity };
var GenerateNonceRequest = /** @class */ (function (_super) {
    __extends(GenerateNonceRequest, _super);
    function GenerateNonceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenerateNonceQueryParams)
    ], GenerateNonceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenerateNonceSecurity)
    ], GenerateNonceRequest.prototype, "security", void 0);
    return GenerateNonceRequest;
}(SpeakeasyBase));
export { GenerateNonceRequest };
var GenerateNonceResponse = /** @class */ (function (_super) {
    __extends(GenerateNonceResponse, _super);
    function GenerateNonceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountNonce)
    ], GenerateNonceResponse.prototype, "accountNonce", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenerateNonceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GenerateNonceResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenerateNonceResponse.prototype, "statusCode", void 0);
    return GenerateNonceResponse;
}(SpeakeasyBase));
export { GenerateNonceResponse };

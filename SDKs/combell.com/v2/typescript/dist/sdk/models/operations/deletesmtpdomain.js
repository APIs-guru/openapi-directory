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
var DeleteSmtpDomainPathParams = /** @class */ (function (_super) {
    __extends(DeleteSmtpDomainPathParams, _super);
    function DeleteSmtpDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], DeleteSmtpDomainPathParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hostname" }),
        __metadata("design:type", String)
    ], DeleteSmtpDomainPathParams.prototype, "hostname", void 0);
    return DeleteSmtpDomainPathParams;
}(SpeakeasyBase));
export { DeleteSmtpDomainPathParams };
var DeleteSmtpDomainQueryParams = /** @class */ (function (_super) {
    __extends(DeleteSmtpDomainQueryParams, _super);
    function DeleteSmtpDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], DeleteSmtpDomainQueryParams.prototype, "domainName", void 0);
    return DeleteSmtpDomainQueryParams;
}(SpeakeasyBase));
export { DeleteSmtpDomainQueryParams };
var DeleteSmtpDomainRequest = /** @class */ (function (_super) {
    __extends(DeleteSmtpDomainRequest, _super);
    function DeleteSmtpDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSmtpDomainPathParams)
    ], DeleteSmtpDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSmtpDomainQueryParams)
    ], DeleteSmtpDomainRequest.prototype, "queryParams", void 0);
    return DeleteSmtpDomainRequest;
}(SpeakeasyBase));
export { DeleteSmtpDomainRequest };
var DeleteSmtpDomainResponse = /** @class */ (function (_super) {
    __extends(DeleteSmtpDomainResponse, _super);
    function DeleteSmtpDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSmtpDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSmtpDomainResponse.prototype, "statusCode", void 0);
    return DeleteSmtpDomainResponse;
}(SpeakeasyBase));
export { DeleteSmtpDomainResponse };

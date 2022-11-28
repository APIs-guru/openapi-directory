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
var DeleteAliasPathParams = /** @class */ (function (_super) {
    __extends(DeleteAliasPathParams, _super);
    function DeleteAliasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], DeleteAliasPathParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" }),
        __metadata("design:type", String)
    ], DeleteAliasPathParams.prototype, "emailAddress", void 0);
    return DeleteAliasPathParams;
}(SpeakeasyBase));
export { DeleteAliasPathParams };
var DeleteAliasQueryParams = /** @class */ (function (_super) {
    __extends(DeleteAliasQueryParams, _super);
    function DeleteAliasQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], DeleteAliasQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email_address" }),
        __metadata("design:type", String)
    ], DeleteAliasQueryParams.prototype, "emailAddress", void 0);
    return DeleteAliasQueryParams;
}(SpeakeasyBase));
export { DeleteAliasQueryParams };
var DeleteAliasRequest = /** @class */ (function (_super) {
    __extends(DeleteAliasRequest, _super);
    function DeleteAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAliasPathParams)
    ], DeleteAliasRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAliasQueryParams)
    ], DeleteAliasRequest.prototype, "queryParams", void 0);
    return DeleteAliasRequest;
}(SpeakeasyBase));
export { DeleteAliasRequest };
var DeleteAliasResponse = /** @class */ (function (_super) {
    __extends(DeleteAliasResponse, _super);
    function DeleteAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAliasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAliasResponse.prototype, "statusCode", void 0);
    return DeleteAliasResponse;
}(SpeakeasyBase));
export { DeleteAliasResponse };

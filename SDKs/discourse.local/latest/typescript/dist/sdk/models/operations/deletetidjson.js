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
var DeleteTIdJsonPathParams = /** @class */ (function (_super) {
    __extends(DeleteTIdJsonPathParams, _super);
    function DeleteTIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteTIdJsonPathParams.prototype, "id", void 0);
    return DeleteTIdJsonPathParams;
}(SpeakeasyBase));
export { DeleteTIdJsonPathParams };
var DeleteTIdJsonHeaders = /** @class */ (function (_super) {
    __extends(DeleteTIdJsonHeaders, _super);
    function DeleteTIdJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], DeleteTIdJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], DeleteTIdJsonHeaders.prototype, "apiUsername", void 0);
    return DeleteTIdJsonHeaders;
}(SpeakeasyBase));
export { DeleteTIdJsonHeaders };
var DeleteTIdJsonRequest = /** @class */ (function (_super) {
    __extends(DeleteTIdJsonRequest, _super);
    function DeleteTIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteTIdJsonPathParams)
    ], DeleteTIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteTIdJsonHeaders)
    ], DeleteTIdJsonRequest.prototype, "headers", void 0);
    return DeleteTIdJsonRequest;
}(SpeakeasyBase));
export { DeleteTIdJsonRequest };
var DeleteTIdJsonResponse = /** @class */ (function (_super) {
    __extends(DeleteTIdJsonResponse, _super);
    function DeleteTIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteTIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteTIdJsonResponse.prototype, "statusCode", void 0);
    return DeleteTIdJsonResponse;
}(SpeakeasyBase));
export { DeleteTIdJsonResponse };

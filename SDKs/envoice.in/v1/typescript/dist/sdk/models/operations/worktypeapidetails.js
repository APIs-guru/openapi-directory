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
var WorkTypeApiDetailsQueryParams = /** @class */ (function (_super) {
    __extends(WorkTypeApiDetailsQueryParams, _super);
    function WorkTypeApiDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workTypeId" }),
        __metadata("design:type", Number)
    ], WorkTypeApiDetailsQueryParams.prototype, "workTypeId", void 0);
    return WorkTypeApiDetailsQueryParams;
}(SpeakeasyBase));
export { WorkTypeApiDetailsQueryParams };
var WorkTypeApiDetailsHeaders = /** @class */ (function (_super) {
    __extends(WorkTypeApiDetailsHeaders, _super);
    function WorkTypeApiDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], WorkTypeApiDetailsHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], WorkTypeApiDetailsHeaders.prototype, "xAuthSecret", void 0);
    return WorkTypeApiDetailsHeaders;
}(SpeakeasyBase));
export { WorkTypeApiDetailsHeaders };
var WorkTypeApiDetailsRequest = /** @class */ (function (_super) {
    __extends(WorkTypeApiDetailsRequest, _super);
    function WorkTypeApiDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkTypeApiDetailsQueryParams)
    ], WorkTypeApiDetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkTypeApiDetailsHeaders)
    ], WorkTypeApiDetailsRequest.prototype, "headers", void 0);
    return WorkTypeApiDetailsRequest;
}(SpeakeasyBase));
export { WorkTypeApiDetailsRequest };
var WorkTypeApiDetailsResponse = /** @class */ (function (_super) {
    __extends(WorkTypeApiDetailsResponse, _super);
    function WorkTypeApiDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], WorkTypeApiDetailsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WorkTypeApiDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WorkTypeApiDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WorkTypeDetailsApiModel)
    ], WorkTypeApiDetailsResponse.prototype, "workTypeDetailsApiModel", void 0);
    return WorkTypeApiDetailsResponse;
}(SpeakeasyBase));
export { WorkTypeApiDetailsResponse };

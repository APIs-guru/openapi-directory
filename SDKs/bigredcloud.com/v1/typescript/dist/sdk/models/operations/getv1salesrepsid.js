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
var GetV1SalesRepsIdPathParams = /** @class */ (function (_super) {
    __extends(GetV1SalesRepsIdPathParams, _super);
    function GetV1SalesRepsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetV1SalesRepsIdPathParams.prototype, "id", void 0);
    return GetV1SalesRepsIdPathParams;
}(SpeakeasyBase));
export { GetV1SalesRepsIdPathParams };
var GetV1SalesRepsIdRequest = /** @class */ (function (_super) {
    __extends(GetV1SalesRepsIdRequest, _super);
    function GetV1SalesRepsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1SalesRepsIdPathParams)
    ], GetV1SalesRepsIdRequest.prototype, "pathParams", void 0);
    return GetV1SalesRepsIdRequest;
}(SpeakeasyBase));
export { GetV1SalesRepsIdRequest };
var GetV1SalesRepsIdResponse = /** @class */ (function (_super) {
    __extends(GetV1SalesRepsIdResponse, _super);
    function GetV1SalesRepsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV1SalesRepsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SaleRepsDto)
    ], GetV1SalesRepsIdResponse.prototype, "saleRepsDto", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV1SalesRepsIdResponse.prototype, "statusCode", void 0);
    return GetV1SalesRepsIdResponse;
}(SpeakeasyBase));
export { GetV1SalesRepsIdResponse };

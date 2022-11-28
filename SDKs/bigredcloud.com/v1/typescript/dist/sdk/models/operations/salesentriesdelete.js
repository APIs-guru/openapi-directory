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
var SalesEntriesDeletePathParams = /** @class */ (function (_super) {
    __extends(SalesEntriesDeletePathParams, _super);
    function SalesEntriesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], SalesEntriesDeletePathParams.prototype, "id", void 0);
    return SalesEntriesDeletePathParams;
}(SpeakeasyBase));
export { SalesEntriesDeletePathParams };
var SalesEntriesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(SalesEntriesDeleteQueryParams, _super);
    function SalesEntriesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", String)
    ], SalesEntriesDeleteQueryParams.prototype, "timestamp", void 0);
    return SalesEntriesDeleteQueryParams;
}(SpeakeasyBase));
export { SalesEntriesDeleteQueryParams };
var SalesEntriesDeleteRequest = /** @class */ (function (_super) {
    __extends(SalesEntriesDeleteRequest, _super);
    function SalesEntriesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SalesEntriesDeletePathParams)
    ], SalesEntriesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SalesEntriesDeleteQueryParams)
    ], SalesEntriesDeleteRequest.prototype, "queryParams", void 0);
    return SalesEntriesDeleteRequest;
}(SpeakeasyBase));
export { SalesEntriesDeleteRequest };
var SalesEntriesDeleteResponse = /** @class */ (function (_super) {
    __extends(SalesEntriesDeleteResponse, _super);
    function SalesEntriesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SalesEntriesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SalesEntriesDeleteResponse.prototype, "salesEntriesDelete200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SalesEntriesDeleteResponse.prototype, "statusCode", void 0);
    return SalesEntriesDeleteResponse;
}(SpeakeasyBase));
export { SalesEntriesDeleteResponse };

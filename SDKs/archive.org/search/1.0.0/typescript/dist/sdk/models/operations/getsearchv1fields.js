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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var GetSearchV1FieldsQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchV1FieldsQueryParams, _super);
    function GetSearchV1FieldsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetSearchV1FieldsQueryParams.prototype, "callback", void 0);
    return GetSearchV1FieldsQueryParams;
}(SpeakeasyBase));
export { GetSearchV1FieldsQueryParams };
var GetSearchV1FieldsRequest = /** @class */ (function (_super) {
    __extends(GetSearchV1FieldsRequest, _super);
    function GetSearchV1FieldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSearchV1FieldsQueryParams)
    ], GetSearchV1FieldsRequest.prototype, "queryParams", void 0);
    return GetSearchV1FieldsRequest;
}(SpeakeasyBase));
export { GetSearchV1FieldsRequest };
var GetSearchV1FieldsResponse = /** @class */ (function (_super) {
    __extends(GetSearchV1FieldsResponse, _super);
    function GetSearchV1FieldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetSearchV1FieldsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSearchV1FieldsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], GetSearchV1FieldsResponse.prototype, "fields", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSearchV1FieldsResponse.prototype, "statusCode", void 0);
    return GetSearchV1FieldsResponse;
}(SpeakeasyBase));
export { GetSearchV1FieldsResponse };

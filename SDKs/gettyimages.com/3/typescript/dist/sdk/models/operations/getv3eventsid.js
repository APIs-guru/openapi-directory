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
var GetV3EventsIdPathParams = /** @class */ (function (_super) {
    __extends(GetV3EventsIdPathParams, _super);
    function GetV3EventsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetV3EventsIdPathParams.prototype, "id", void 0);
    return GetV3EventsIdPathParams;
}(SpeakeasyBase));
export { GetV3EventsIdPathParams };
var GetV3EventsIdQueryParams = /** @class */ (function (_super) {
    __extends(GetV3EventsIdQueryParams, _super);
    function GetV3EventsIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3EventsIdQueryParams.prototype, "fields", void 0);
    return GetV3EventsIdQueryParams;
}(SpeakeasyBase));
export { GetV3EventsIdQueryParams };
var GetV3EventsIdHeaders = /** @class */ (function (_super) {
    __extends(GetV3EventsIdHeaders, _super);
    function GetV3EventsIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3EventsIdHeaders.prototype, "acceptLanguage", void 0);
    return GetV3EventsIdHeaders;
}(SpeakeasyBase));
export { GetV3EventsIdHeaders };
var GetV3EventsIdRequest = /** @class */ (function (_super) {
    __extends(GetV3EventsIdRequest, _super);
    function GetV3EventsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3EventsIdPathParams)
    ], GetV3EventsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3EventsIdQueryParams)
    ], GetV3EventsIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3EventsIdHeaders)
    ], GetV3EventsIdRequest.prototype, "headers", void 0);
    return GetV3EventsIdRequest;
}(SpeakeasyBase));
export { GetV3EventsIdRequest };
var GetV3EventsIdResponse = /** @class */ (function (_super) {
    __extends(GetV3EventsIdResponse, _super);
    function GetV3EventsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3EventsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3EventsIdResponse.prototype, "statusCode", void 0);
    return GetV3EventsIdResponse;
}(SpeakeasyBase));
export { GetV3EventsIdResponse };

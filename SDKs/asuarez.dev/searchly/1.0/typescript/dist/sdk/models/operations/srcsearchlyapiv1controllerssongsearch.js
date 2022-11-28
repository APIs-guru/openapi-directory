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
var SrcSearchlyApiV1ControllersSongSearchQueryParams = /** @class */ (function (_super) {
    __extends(SrcSearchlyApiV1ControllersSongSearchQueryParams, _super);
    function SrcSearchlyApiV1ControllersSongSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SrcSearchlyApiV1ControllersSongSearchQueryParams.prototype, "query", void 0);
    return SrcSearchlyApiV1ControllersSongSearchQueryParams;
}(SpeakeasyBase));
export { SrcSearchlyApiV1ControllersSongSearchQueryParams };
var SrcSearchlyApiV1ControllersSongSearchRequest = /** @class */ (function (_super) {
    __extends(SrcSearchlyApiV1ControllersSongSearchRequest, _super);
    function SrcSearchlyApiV1ControllersSongSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SrcSearchlyApiV1ControllersSongSearchQueryParams)
    ], SrcSearchlyApiV1ControllersSongSearchRequest.prototype, "queryParams", void 0);
    return SrcSearchlyApiV1ControllersSongSearchRequest;
}(SpeakeasyBase));
export { SrcSearchlyApiV1ControllersSongSearchRequest };
var SrcSearchlyApiV1ControllersSongSearchResponse = /** @class */ (function (_super) {
    __extends(SrcSearchlyApiV1ControllersSongSearchResponse, _super);
    function SrcSearchlyApiV1ControllersSongSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiResponseSong)
    ], SrcSearchlyApiV1ControllersSongSearchResponse.prototype, "apiResponseSong", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SrcSearchlyApiV1ControllersSongSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SrcSearchlyApiV1ControllersSongSearchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SrcSearchlyApiV1ControllersSongSearchResponse.prototype, "srcSearchlyApiV1ControllersSongSearchDefaultApplicationTextString", void 0);
    return SrcSearchlyApiV1ControllersSongSearchResponse;
}(SpeakeasyBase));
export { SrcSearchlyApiV1ControllersSongSearchResponse };

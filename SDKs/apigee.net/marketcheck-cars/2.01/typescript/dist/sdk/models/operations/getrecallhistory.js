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
var GetRecallHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetRecallHistoryPathParams, _super);
    function GetRecallHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vin" }),
        __metadata("design:type", String)
    ], GetRecallHistoryPathParams.prototype, "vin", void 0);
    return GetRecallHistoryPathParams;
}(SpeakeasyBase));
export { GetRecallHistoryPathParams };
var GetRecallHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetRecallHistoryQueryParams, _super);
    function GetRecallHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetRecallHistoryQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetRecallHistoryQueryParams.prototype, "page", void 0);
    return GetRecallHistoryQueryParams;
}(SpeakeasyBase));
export { GetRecallHistoryQueryParams };
var GetRecallHistoryRequest = /** @class */ (function (_super) {
    __extends(GetRecallHistoryRequest, _super);
    function GetRecallHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecallHistoryPathParams)
    ], GetRecallHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecallHistoryQueryParams)
    ], GetRecallHistoryRequest.prototype, "queryParams", void 0);
    return GetRecallHistoryRequest;
}(SpeakeasyBase));
export { GetRecallHistoryRequest };
var GetRecallHistoryResponse = /** @class */ (function (_super) {
    __extends(GetRecallHistoryResponse, _super);
    function GetRecallHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRecallHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetRecallHistoryResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResponse)
    ], GetRecallHistoryResponse.prototype, "searchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRecallHistoryResponse.prototype, "statusCode", void 0);
    return GetRecallHistoryResponse;
}(SpeakeasyBase));
export { GetRecallHistoryResponse };

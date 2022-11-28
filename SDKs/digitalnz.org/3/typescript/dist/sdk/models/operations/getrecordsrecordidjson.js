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
var GetRecordsRecordIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetRecordsRecordIdJsonPathParams, _super);
    function GetRecordsRecordIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=record_id" }),
        __metadata("design:type", Number)
    ], GetRecordsRecordIdJsonPathParams.prototype, "recordId", void 0);
    return GetRecordsRecordIdJsonPathParams;
}(SpeakeasyBase));
export { GetRecordsRecordIdJsonPathParams };
export var GetRecordsRecordIdJsonFormatEnum;
(function (GetRecordsRecordIdJsonFormatEnum) {
    GetRecordsRecordIdJsonFormatEnum["Json"] = "json";
    GetRecordsRecordIdJsonFormatEnum["Xml"] = "xml";
})(GetRecordsRecordIdJsonFormatEnum || (GetRecordsRecordIdJsonFormatEnum = {}));
var GetRecordsRecordIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetRecordsRecordIdJsonQueryParams, _super);
    function GetRecordsRecordIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetRecordsRecordIdJsonQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", String)
    ], GetRecordsRecordIdJsonQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetRecordsRecordIdJsonQueryParams.prototype, "format", void 0);
    return GetRecordsRecordIdJsonQueryParams;
}(SpeakeasyBase));
export { GetRecordsRecordIdJsonQueryParams };
var GetRecordsRecordIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetRecordsRecordIdJsonRequest, _super);
    function GetRecordsRecordIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordsRecordIdJsonPathParams)
    ], GetRecordsRecordIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordsRecordIdJsonQueryParams)
    ], GetRecordsRecordIdJsonRequest.prototype, "queryParams", void 0);
    return GetRecordsRecordIdJsonRequest;
}(SpeakeasyBase));
export { GetRecordsRecordIdJsonRequest };
var GetRecordsRecordIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetRecordsRecordIdJsonResponse, _super);
    function GetRecordsRecordIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRecordsRecordIdJsonResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRecordsRecordIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRecordsRecordIdJsonResponse.prototype, "getRecordsRecordIdJson403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRecordsRecordIdJsonResponse.prototype, "getRecordsRecordIdJson404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRecordsRecordIdJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Record)
    ], GetRecordsRecordIdJsonResponse.prototype, "record", void 0);
    return GetRecordsRecordIdJsonResponse;
}(SpeakeasyBase));
export { GetRecordsRecordIdJsonResponse };

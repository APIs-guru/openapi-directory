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
import * as shared from "../shared";
var GetWaybackV1AvailableQueryParams = /** @class */ (function (_super) {
    __extends(GetWaybackV1AvailableQueryParams, _super);
    function GetWaybackV1AvailableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetWaybackV1AvailableQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=closest" }),
        __metadata("design:type", String)
    ], GetWaybackV1AvailableQueryParams.prototype, "closest", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=status_code" }),
        __metadata("design:type", Number)
    ], GetWaybackV1AvailableQueryParams.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], GetWaybackV1AvailableQueryParams.prototype, "tag", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], GetWaybackV1AvailableQueryParams.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", String)
    ], GetWaybackV1AvailableQueryParams.prototype, "timestamp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], GetWaybackV1AvailableQueryParams.prototype, "url", void 0);
    return GetWaybackV1AvailableQueryParams;
}(SpeakeasyBase));
export { GetWaybackV1AvailableQueryParams };
var GetWaybackV1AvailableRequest = /** @class */ (function (_super) {
    __extends(GetWaybackV1AvailableRequest, _super);
    function GetWaybackV1AvailableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWaybackV1AvailableQueryParams)
    ], GetWaybackV1AvailableRequest.prototype, "queryParams", void 0);
    return GetWaybackV1AvailableRequest;
}(SpeakeasyBase));
export { GetWaybackV1AvailableRequest };
var GetWaybackV1AvailableResponse = /** @class */ (function (_super) {
    __extends(GetWaybackV1AvailableResponse, _super);
    function GetWaybackV1AvailableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AvailabilityResults)
    ], GetWaybackV1AvailableResponse.prototype, "availabilityResults", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetWaybackV1AvailableResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWaybackV1AvailableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetWaybackV1AvailableResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWaybackV1AvailableResponse.prototype, "statusCode", void 0);
    return GetWaybackV1AvailableResponse;
}(SpeakeasyBase));
export { GetWaybackV1AvailableResponse };

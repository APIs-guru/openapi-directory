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
var GetListingCarFsboIdPathParams = /** @class */ (function (_super) {
    __extends(GetListingCarFsboIdPathParams, _super);
    function GetListingCarFsboIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetListingCarFsboIdPathParams.prototype, "id", void 0);
    return GetListingCarFsboIdPathParams;
}(SpeakeasyBase));
export { GetListingCarFsboIdPathParams };
var GetListingCarFsboIdQueryParams = /** @class */ (function (_super) {
    __extends(GetListingCarFsboIdQueryParams, _super);
    function GetListingCarFsboIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetListingCarFsboIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" }),
        __metadata("design:type", Boolean)
    ], GetListingCarFsboIdQueryParams.prototype, "appendApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_relevant_links" }),
        __metadata("design:type", Boolean)
    ], GetListingCarFsboIdQueryParams.prototype, "includeRelevantLinks", void 0);
    return GetListingCarFsboIdQueryParams;
}(SpeakeasyBase));
export { GetListingCarFsboIdQueryParams };
var GetListingCarFsboIdRequest = /** @class */ (function (_super) {
    __extends(GetListingCarFsboIdRequest, _super);
    function GetListingCarFsboIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingCarFsboIdPathParams)
    ], GetListingCarFsboIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingCarFsboIdQueryParams)
    ], GetListingCarFsboIdRequest.prototype, "queryParams", void 0);
    return GetListingCarFsboIdRequest;
}(SpeakeasyBase));
export { GetListingCarFsboIdRequest };
var GetListingCarFsboIdResponse = /** @class */ (function (_super) {
    __extends(GetListingCarFsboIdResponse, _super);
    function GetListingCarFsboIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListingCarFsboIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetListingCarFsboIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Listing)
    ], GetListingCarFsboIdResponse.prototype, "listing", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListingCarFsboIdResponse.prototype, "statusCode", void 0);
    return GetListingCarFsboIdResponse;
}(SpeakeasyBase));
export { GetListingCarFsboIdResponse };

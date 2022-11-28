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
var ConversionsGetDatapointsCountPathParams = /** @class */ (function (_super) {
    __extends(ConversionsGetDatapointsCountPathParams, _super);
    function ConversionsGetDatapointsCountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" }),
        __metadata("design:type", Number)
    ], ConversionsGetDatapointsCountPathParams.prototype, "conversionId", void 0);
    return ConversionsGetDatapointsCountPathParams;
}(SpeakeasyBase));
export { ConversionsGetDatapointsCountPathParams };
var ConversionsGetDatapointsCountQueryParams = /** @class */ (function (_super) {
    __extends(ConversionsGetDatapointsCountQueryParams, _super);
    function ConversionsGetDatapointsCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsCountQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsCountQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsCountQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsCountQueryParams.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsCountQueryParams.prototype, "textSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsCountQueryParams.prototype, "type", void 0);
    return ConversionsGetDatapointsCountQueryParams;
}(SpeakeasyBase));
export { ConversionsGetDatapointsCountQueryParams };
var ConversionsGetDatapointsCountRequest = /** @class */ (function (_super) {
    __extends(ConversionsGetDatapointsCountRequest, _super);
    function ConversionsGetDatapointsCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetDatapointsCountPathParams)
    ], ConversionsGetDatapointsCountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetDatapointsCountQueryParams)
    ], ConversionsGetDatapointsCountRequest.prototype, "queryParams", void 0);
    return ConversionsGetDatapointsCountRequest;
}(SpeakeasyBase));
export { ConversionsGetDatapointsCountRequest };
var ConversionsGetDatapointsCountResponse = /** @class */ (function (_super) {
    __extends(ConversionsGetDatapointsCountResponse, _super);
    function ConversionsGetDatapointsCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesCountResponce)
    ], ConversionsGetDatapointsCountResponse.prototype, "apiCoreResponsesCountResponce", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ConversionsGetDatapointsCountResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsCountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConversionsGetDatapointsCountResponse.prototype, "statusCode", void 0);
    return ConversionsGetDatapointsCountResponse;
}(SpeakeasyBase));
export { ConversionsGetDatapointsCountResponse };

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
var ConversionsGetDatapointsPathParams = /** @class */ (function (_super) {
    __extends(ConversionsGetDatapointsPathParams, _super);
    function ConversionsGetDatapointsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" }),
        __metadata("design:type", Number)
    ], ConversionsGetDatapointsPathParams.prototype, "conversionId", void 0);
    return ConversionsGetDatapointsPathParams;
}(SpeakeasyBase));
export { ConversionsGetDatapointsPathParams };
export var ConversionsGetDatapointsStatusEnum;
(function (ConversionsGetDatapointsStatusEnum) {
    ConversionsGetDatapointsStatusEnum["Deleted"] = "deleted";
    ConversionsGetDatapointsStatusEnum["Active"] = "active";
    ConversionsGetDatapointsStatusEnum["Paused"] = "paused";
    ConversionsGetDatapointsStatusEnum["Spam"] = "spam";
})(ConversionsGetDatapointsStatusEnum || (ConversionsGetDatapointsStatusEnum = {}));
export var ConversionsGetDatapointsTypeEnum;
(function (ConversionsGetDatapointsTypeEnum) {
    ConversionsGetDatapointsTypeEnum["Tp"] = "tp";
    ConversionsGetDatapointsTypeEnum["Tl"] = "tl";
})(ConversionsGetDatapointsTypeEnum || (ConversionsGetDatapointsTypeEnum = {}));
var ConversionsGetDatapointsQueryParams = /** @class */ (function (_super) {
    __extends(ConversionsGetDatapointsQueryParams, _super);
    function ConversionsGetDatapointsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ConversionsGetDatapointsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ConversionsGetDatapointsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsQueryParams.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsQueryParams.prototype, "textSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsQueryParams.prototype, "type", void 0);
    return ConversionsGetDatapointsQueryParams;
}(SpeakeasyBase));
export { ConversionsGetDatapointsQueryParams };
var ConversionsGetDatapointsRequest = /** @class */ (function (_super) {
    __extends(ConversionsGetDatapointsRequest, _super);
    function ConversionsGetDatapointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetDatapointsPathParams)
    ], ConversionsGetDatapointsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetDatapointsQueryParams)
    ], ConversionsGetDatapointsRequest.prototype, "queryParams", void 0);
    return ConversionsGetDatapointsRequest;
}(SpeakeasyBase));
export { ConversionsGetDatapointsRequest };
var ConversionsGetDatapointsResponse = /** @class */ (function (_super) {
    __extends(ConversionsGetDatapointsResponse, _super);
    function ConversionsGetDatapointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64)
    ], ConversionsGetDatapointsResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConversionsGetDatapointsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConversionsGetDatapointsResponse.prototype, "statusCode", void 0);
    return ConversionsGetDatapointsResponse;
}(SpeakeasyBase));
export { ConversionsGetDatapointsResponse };

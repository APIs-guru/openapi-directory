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
var TagsGetDatapointsPathParams = /** @class */ (function (_super) {
    __extends(TagsGetDatapointsPathParams, _super);
    function TagsGetDatapointsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", Number)
    ], TagsGetDatapointsPathParams.prototype, "tagId", void 0);
    return TagsGetDatapointsPathParams;
}(SpeakeasyBase));
export { TagsGetDatapointsPathParams };
export var TagsGetDatapointsStatusEnum;
(function (TagsGetDatapointsStatusEnum) {
    TagsGetDatapointsStatusEnum["Deleted"] = "deleted";
    TagsGetDatapointsStatusEnum["Active"] = "active";
    TagsGetDatapointsStatusEnum["Paused"] = "paused";
    TagsGetDatapointsStatusEnum["Spam"] = "spam";
})(TagsGetDatapointsStatusEnum || (TagsGetDatapointsStatusEnum = {}));
export var TagsGetDatapointsTypeEnum;
(function (TagsGetDatapointsTypeEnum) {
    TagsGetDatapointsTypeEnum["Tp"] = "tp";
    TagsGetDatapointsTypeEnum["Tl"] = "tl";
})(TagsGetDatapointsTypeEnum || (TagsGetDatapointsTypeEnum = {}));
var TagsGetDatapointsQueryParams = /** @class */ (function (_super) {
    __extends(TagsGetDatapointsQueryParams, _super);
    function TagsGetDatapointsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", String)
    ], TagsGetDatapointsQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" }),
        __metadata("design:type", String)
    ], TagsGetDatapointsQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], TagsGetDatapointsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], TagsGetDatapointsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], TagsGetDatapointsQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], TagsGetDatapointsQueryParams.prototype, "textSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], TagsGetDatapointsQueryParams.prototype, "type", void 0);
    return TagsGetDatapointsQueryParams;
}(SpeakeasyBase));
export { TagsGetDatapointsQueryParams };
var TagsGetDatapointsRequest = /** @class */ (function (_super) {
    __extends(TagsGetDatapointsRequest, _super);
    function TagsGetDatapointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsGetDatapointsPathParams)
    ], TagsGetDatapointsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsGetDatapointsQueryParams)
    ], TagsGetDatapointsRequest.prototype, "queryParams", void 0);
    return TagsGetDatapointsRequest;
}(SpeakeasyBase));
export { TagsGetDatapointsRequest };
var TagsGetDatapointsResponse = /** @class */ (function (_super) {
    __extends(TagsGetDatapointsResponse, _super);
    function TagsGetDatapointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64)
    ], TagsGetDatapointsResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagsGetDatapointsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagsGetDatapointsResponse.prototype, "statusCode", void 0);
    return TagsGetDatapointsResponse;
}(SpeakeasyBase));
export { TagsGetDatapointsResponse };

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
var TagsGetDatapointsCountPathParams = /** @class */ (function (_super) {
    __extends(TagsGetDatapointsCountPathParams, _super);
    function TagsGetDatapointsCountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", Number)
    ], TagsGetDatapointsCountPathParams.prototype, "tagId", void 0);
    return TagsGetDatapointsCountPathParams;
}(SpeakeasyBase));
export { TagsGetDatapointsCountPathParams };
export var TagsGetDatapointsCountStatusEnum;
(function (TagsGetDatapointsCountStatusEnum) {
    TagsGetDatapointsCountStatusEnum["Deleted"] = "deleted";
    TagsGetDatapointsCountStatusEnum["Active"] = "active";
    TagsGetDatapointsCountStatusEnum["Paused"] = "paused";
    TagsGetDatapointsCountStatusEnum["Spam"] = "spam";
})(TagsGetDatapointsCountStatusEnum || (TagsGetDatapointsCountStatusEnum = {}));
export var TagsGetDatapointsCountTypeEnum;
(function (TagsGetDatapointsCountTypeEnum) {
    TagsGetDatapointsCountTypeEnum["Tp"] = "tp";
    TagsGetDatapointsCountTypeEnum["Tl"] = "tl";
})(TagsGetDatapointsCountTypeEnum || (TagsGetDatapointsCountTypeEnum = {}));
var TagsGetDatapointsCountQueryParams = /** @class */ (function (_super) {
    __extends(TagsGetDatapointsCountQueryParams, _super);
    function TagsGetDatapointsCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", String)
    ], TagsGetDatapointsCountQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" }),
        __metadata("design:type", String)
    ], TagsGetDatapointsCountQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], TagsGetDatapointsCountQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], TagsGetDatapointsCountQueryParams.prototype, "textSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], TagsGetDatapointsCountQueryParams.prototype, "type", void 0);
    return TagsGetDatapointsCountQueryParams;
}(SpeakeasyBase));
export { TagsGetDatapointsCountQueryParams };
var TagsGetDatapointsCountRequest = /** @class */ (function (_super) {
    __extends(TagsGetDatapointsCountRequest, _super);
    function TagsGetDatapointsCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsGetDatapointsCountPathParams)
    ], TagsGetDatapointsCountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsGetDatapointsCountQueryParams)
    ], TagsGetDatapointsCountRequest.prototype, "queryParams", void 0);
    return TagsGetDatapointsCountRequest;
}(SpeakeasyBase));
export { TagsGetDatapointsCountRequest };
var TagsGetDatapointsCountResponse = /** @class */ (function (_super) {
    __extends(TagsGetDatapointsCountResponse, _super);
    function TagsGetDatapointsCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesCountResponce)
    ], TagsGetDatapointsCountResponse.prototype, "apiCoreResponsesCountResponce", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TagsGetDatapointsCountResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagsGetDatapointsCountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagsGetDatapointsCountResponse.prototype, "statusCode", void 0);
    return TagsGetDatapointsCountResponse;
}(SpeakeasyBase));
export { TagsGetDatapointsCountResponse };

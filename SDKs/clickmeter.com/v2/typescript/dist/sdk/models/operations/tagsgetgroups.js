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
var TagsGetGroupsPathParams = /** @class */ (function (_super) {
    __extends(TagsGetGroupsPathParams, _super);
    function TagsGetGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", Number)
    ], TagsGetGroupsPathParams.prototype, "tagId", void 0);
    return TagsGetGroupsPathParams;
}(SpeakeasyBase));
export { TagsGetGroupsPathParams };
export var TagsGetGroupsStatusEnum;
(function (TagsGetGroupsStatusEnum) {
    TagsGetGroupsStatusEnum["Deleted"] = "deleted";
    TagsGetGroupsStatusEnum["Active"] = "active";
})(TagsGetGroupsStatusEnum || (TagsGetGroupsStatusEnum = {}));
var TagsGetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(TagsGetGroupsQueryParams, _super);
    function TagsGetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", String)
    ], TagsGetGroupsQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" }),
        __metadata("design:type", String)
    ], TagsGetGroupsQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], TagsGetGroupsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], TagsGetGroupsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], TagsGetGroupsQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], TagsGetGroupsQueryParams.prototype, "textSearch", void 0);
    return TagsGetGroupsQueryParams;
}(SpeakeasyBase));
export { TagsGetGroupsQueryParams };
var TagsGetGroupsRequest = /** @class */ (function (_super) {
    __extends(TagsGetGroupsRequest, _super);
    function TagsGetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsGetGroupsPathParams)
    ], TagsGetGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsGetGroupsQueryParams)
    ], TagsGetGroupsRequest.prototype, "queryParams", void 0);
    return TagsGetGroupsRequest;
}(SpeakeasyBase));
export { TagsGetGroupsRequest };
var TagsGetGroupsResponse = /** @class */ (function (_super) {
    __extends(TagsGetGroupsResponse, _super);
    function TagsGetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64)
    ], TagsGetGroupsResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagsGetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagsGetGroupsResponse.prototype, "statusCode", void 0);
    return TagsGetGroupsResponse;
}(SpeakeasyBase));
export { TagsGetGroupsResponse };

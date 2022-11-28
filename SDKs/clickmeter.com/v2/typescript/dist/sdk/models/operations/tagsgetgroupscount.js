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
var TagsGetGroupsCountPathParams = /** @class */ (function (_super) {
    __extends(TagsGetGroupsCountPathParams, _super);
    function TagsGetGroupsCountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", Number)
    ], TagsGetGroupsCountPathParams.prototype, "tagId", void 0);
    return TagsGetGroupsCountPathParams;
}(SpeakeasyBase));
export { TagsGetGroupsCountPathParams };
export var TagsGetGroupsCountStatusEnum;
(function (TagsGetGroupsCountStatusEnum) {
    TagsGetGroupsCountStatusEnum["Deleted"] = "deleted";
    TagsGetGroupsCountStatusEnum["Active"] = "active";
})(TagsGetGroupsCountStatusEnum || (TagsGetGroupsCountStatusEnum = {}));
var TagsGetGroupsCountQueryParams = /** @class */ (function (_super) {
    __extends(TagsGetGroupsCountQueryParams, _super);
    function TagsGetGroupsCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", String)
    ], TagsGetGroupsCountQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" }),
        __metadata("design:type", String)
    ], TagsGetGroupsCountQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], TagsGetGroupsCountQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], TagsGetGroupsCountQueryParams.prototype, "textSearch", void 0);
    return TagsGetGroupsCountQueryParams;
}(SpeakeasyBase));
export { TagsGetGroupsCountQueryParams };
var TagsGetGroupsCountRequest = /** @class */ (function (_super) {
    __extends(TagsGetGroupsCountRequest, _super);
    function TagsGetGroupsCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsGetGroupsCountPathParams)
    ], TagsGetGroupsCountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsGetGroupsCountQueryParams)
    ], TagsGetGroupsCountRequest.prototype, "queryParams", void 0);
    return TagsGetGroupsCountRequest;
}(SpeakeasyBase));
export { TagsGetGroupsCountRequest };
var TagsGetGroupsCountResponse = /** @class */ (function (_super) {
    __extends(TagsGetGroupsCountResponse, _super);
    function TagsGetGroupsCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesCountResponce)
    ], TagsGetGroupsCountResponse.prototype, "apiCoreResponsesCountResponce", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TagsGetGroupsCountResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagsGetGroupsCountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagsGetGroupsCountResponse.prototype, "statusCode", void 0);
    return TagsGetGroupsCountResponse;
}(SpeakeasyBase));
export { TagsGetGroupsCountResponse };

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
export var TagsGetTypeEnum;
(function (TagsGetTypeEnum) {
    TagsGetTypeEnum["Tp"] = "tp";
    TagsGetTypeEnum["Tl"] = "tl";
    TagsGetTypeEnum["Dp"] = "dp";
    TagsGetTypeEnum["Gr"] = "gr";
})(TagsGetTypeEnum || (TagsGetTypeEnum = {}));
var TagsGetQueryParams = /** @class */ (function (_super) {
    __extends(TagsGetQueryParams, _super);
    function TagsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datapoints" }),
        __metadata("design:type", String)
    ], TagsGetQueryParams.prototype, "datapoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groups" }),
        __metadata("design:type", String)
    ], TagsGetQueryParams.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], TagsGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], TagsGetQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], TagsGetQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], TagsGetQueryParams.prototype, "type", void 0);
    return TagsGetQueryParams;
}(SpeakeasyBase));
export { TagsGetQueryParams };
var TagsGetRequest = /** @class */ (function (_super) {
    __extends(TagsGetRequest, _super);
    function TagsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsGetQueryParams)
    ], TagsGetRequest.prototype, "queryParams", void 0);
    return TagsGetRequest;
}(SpeakeasyBase));
export { TagsGetRequest };
var TagsGetResponse = /** @class */ (function (_super) {
    __extends(TagsGetResponse, _super);
    function TagsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64)
    ], TagsGetResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagsGetResponse.prototype, "statusCode", void 0);
    return TagsGetResponse;
}(SpeakeasyBase));
export { TagsGetResponse };

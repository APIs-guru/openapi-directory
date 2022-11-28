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
var FunctionsListTagsPathParams = /** @class */ (function (_super) {
    __extends(FunctionsListTagsPathParams, _super);
    function FunctionsListTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" }),
        __metadata("design:type", String)
    ], FunctionsListTagsPathParams.prototype, "functionId", void 0);
    return FunctionsListTagsPathParams;
}(SpeakeasyBase));
export { FunctionsListTagsPathParams };
var FunctionsListTagsQueryParams = /** @class */ (function (_super) {
    __extends(FunctionsListTagsQueryParams, _super);
    function FunctionsListTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], FunctionsListTagsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], FunctionsListTagsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderType" }),
        __metadata("design:type", String)
    ], FunctionsListTagsQueryParams.prototype, "orderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], FunctionsListTagsQueryParams.prototype, "search", void 0);
    return FunctionsListTagsQueryParams;
}(SpeakeasyBase));
export { FunctionsListTagsQueryParams };
var FunctionsListTagsSecurity = /** @class */ (function (_super) {
    __extends(FunctionsListTagsSecurity, _super);
    function FunctionsListTagsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], FunctionsListTagsSecurity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], FunctionsListTagsSecurity.prototype, "project", void 0);
    return FunctionsListTagsSecurity;
}(SpeakeasyBase));
export { FunctionsListTagsSecurity };
var FunctionsListTagsRequest = /** @class */ (function (_super) {
    __extends(FunctionsListTagsRequest, _super);
    function FunctionsListTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FunctionsListTagsPathParams)
    ], FunctionsListTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FunctionsListTagsQueryParams)
    ], FunctionsListTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FunctionsListTagsSecurity)
    ], FunctionsListTagsRequest.prototype, "security", void 0);
    return FunctionsListTagsRequest;
}(SpeakeasyBase));
export { FunctionsListTagsRequest };
var FunctionsListTagsResponse = /** @class */ (function (_super) {
    __extends(FunctionsListTagsResponse, _super);
    function FunctionsListTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FunctionsListTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FunctionsListTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TagList)
    ], FunctionsListTagsResponse.prototype, "tagList", void 0);
    return FunctionsListTagsResponse;
}(SpeakeasyBase));
export { FunctionsListTagsResponse };

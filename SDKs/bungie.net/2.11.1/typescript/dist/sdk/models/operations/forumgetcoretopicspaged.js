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
var ForumGetCoreTopicsPagedPathParams = /** @class */ (function (_super) {
    __extends(ForumGetCoreTopicsPagedPathParams, _super);
    function ForumGetCoreTopicsPagedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=categoryFilter" }),
        __metadata("design:type", Number)
    ], ForumGetCoreTopicsPagedPathParams.prototype, "categoryFilter", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=page" }),
        __metadata("design:type", Number)
    ], ForumGetCoreTopicsPagedPathParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=quickDate" }),
        __metadata("design:type", Number)
    ], ForumGetCoreTopicsPagedPathParams.prototype, "quickDate", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=sort" }),
        __metadata("design:type", Number)
    ], ForumGetCoreTopicsPagedPathParams.prototype, "sort", void 0);
    return ForumGetCoreTopicsPagedPathParams;
}(SpeakeasyBase));
export { ForumGetCoreTopicsPagedPathParams };
var ForumGetCoreTopicsPagedQueryParams = /** @class */ (function (_super) {
    __extends(ForumGetCoreTopicsPagedQueryParams, _super);
    function ForumGetCoreTopicsPagedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locales" }),
        __metadata("design:type", String)
    ], ForumGetCoreTopicsPagedQueryParams.prototype, "locales", void 0);
    return ForumGetCoreTopicsPagedQueryParams;
}(SpeakeasyBase));
export { ForumGetCoreTopicsPagedQueryParams };
var ForumGetCoreTopicsPagedRequest = /** @class */ (function (_super) {
    __extends(ForumGetCoreTopicsPagedRequest, _super);
    function ForumGetCoreTopicsPagedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ForumGetCoreTopicsPagedPathParams)
    ], ForumGetCoreTopicsPagedRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ForumGetCoreTopicsPagedQueryParams)
    ], ForumGetCoreTopicsPagedRequest.prototype, "queryParams", void 0);
    return ForumGetCoreTopicsPagedRequest;
}(SpeakeasyBase));
export { ForumGetCoreTopicsPagedRequest };
var ForumGetCoreTopicsPagedResponse = /** @class */ (function (_super) {
    __extends(ForumGetCoreTopicsPagedResponse, _super);
    function ForumGetCoreTopicsPagedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ForumGetCoreTopicsPagedResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ForumGetCoreTopicsPagedResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ForumGetCoreTopicsPagedResponse.prototype, "statusCode", void 0);
    return ForumGetCoreTopicsPagedResponse;
}(SpeakeasyBase));
export { ForumGetCoreTopicsPagedResponse };

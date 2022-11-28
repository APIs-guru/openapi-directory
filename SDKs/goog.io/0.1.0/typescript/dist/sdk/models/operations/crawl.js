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
var CrawlPathParams = /** @class */ (function (_super) {
    __extends(CrawlPathParams, _super);
    function CrawlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], CrawlPathParams.prototype, "query", void 0);
    return CrawlPathParams;
}(SpeakeasyBase));
export { CrawlPathParams };
var Crawl200ApplicationJson = /** @class */ (function (_super) {
    __extends(Crawl200ApplicationJson, _super);
    function Crawl200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], Crawl200ApplicationJson.prototype, "answer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Array)
    ], Crawl200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", String)
    ], Crawl200ApplicationJson.prototype, "total", void 0);
    return Crawl200ApplicationJson;
}(SpeakeasyBase));
export { Crawl200ApplicationJson };
var CrawlRequest = /** @class */ (function (_super) {
    __extends(CrawlRequest, _super);
    function CrawlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CrawlPathParams)
    ], CrawlRequest.prototype, "pathParams", void 0);
    return CrawlRequest;
}(SpeakeasyBase));
export { CrawlRequest };
var CrawlResponse = /** @class */ (function (_super) {
    __extends(CrawlResponse, _super);
    function CrawlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CrawlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Crawl200ApplicationJson)
    ], CrawlResponse.prototype, "crawl200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], CrawlResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CrawlResponse.prototype, "statusCode", void 0);
    return CrawlResponse;
}(SpeakeasyBase));
export { CrawlResponse };

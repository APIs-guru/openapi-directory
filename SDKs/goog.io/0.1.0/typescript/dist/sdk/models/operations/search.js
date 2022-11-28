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
var SearchPathParams = /** @class */ (function (_super) {
    __extends(SearchPathParams, _super);
    function SearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], SearchPathParams.prototype, "query", void 0);
    return SearchPathParams;
}(SpeakeasyBase));
export { SearchPathParams };
var Search200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(Search200ApplicationJsonResults, _super);
    function Search200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Search200ApplicationJsonResults.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Search200ApplicationJsonResults.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Search200ApplicationJsonResults.prototype, "title", void 0);
    return Search200ApplicationJsonResults;
}(SpeakeasyBase));
export { Search200ApplicationJsonResults };
// Search200ApplicationJson
/**
 * results
**/
var Search200ApplicationJson = /** @class */ (function (_super) {
    __extends(Search200ApplicationJson, _super);
    function Search200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], Search200ApplicationJson.prototype, "answer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: Search200ApplicationJsonResults }),
        __metadata("design:type", Array)
    ], Search200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", String)
    ], Search200ApplicationJson.prototype, "total", void 0);
    return Search200ApplicationJson;
}(SpeakeasyBase));
export { Search200ApplicationJson };
var SearchRequest = /** @class */ (function (_super) {
    __extends(SearchRequest, _super);
    function SearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchPathParams)
    ], SearchRequest.prototype, "pathParams", void 0);
    return SearchRequest;
}(SpeakeasyBase));
export { SearchRequest };
var SearchResponse = /** @class */ (function (_super) {
    __extends(SearchResponse, _super);
    function SearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], SearchResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Search200ApplicationJson)
    ], SearchResponse.prototype, "search200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchResponse.prototype, "statusCode", void 0);
    return SearchResponse;
}(SpeakeasyBase));
export { SearchResponse };

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
import * as shared from "../shared";
export var SearchArtifactsOrderEnum;
(function (SearchArtifactsOrderEnum) {
    SearchArtifactsOrderEnum["Asc"] = "asc";
    SearchArtifactsOrderEnum["Desc"] = "desc";
})(SearchArtifactsOrderEnum || (SearchArtifactsOrderEnum = {}));
export var SearchArtifactsOverEnum;
(function (SearchArtifactsOverEnum) {
    SearchArtifactsOverEnum["Everything"] = "everything";
    SearchArtifactsOverEnum["Name"] = "name";
    SearchArtifactsOverEnum["Description"] = "description";
    SearchArtifactsOverEnum["Labels"] = "labels";
})(SearchArtifactsOverEnum || (SearchArtifactsOverEnum = {}));
var SearchArtifactsQueryParams = /** @class */ (function (_super) {
    __extends(SearchArtifactsQueryParams, _super);
    function SearchArtifactsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], SearchArtifactsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], SearchArtifactsQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], SearchArtifactsQueryParams.prototype, "order", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=over" }),
        __metadata("design:type", String)
    ], SearchArtifactsQueryParams.prototype, "over", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], SearchArtifactsQueryParams.prototype, "search", void 0);
    return SearchArtifactsQueryParams;
}(SpeakeasyBase));
export { SearchArtifactsQueryParams };
var SearchArtifactsRequest = /** @class */ (function (_super) {
    __extends(SearchArtifactsRequest, _super);
    function SearchArtifactsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchArtifactsQueryParams)
    ], SearchArtifactsRequest.prototype, "queryParams", void 0);
    return SearchArtifactsRequest;
}(SpeakeasyBase));
export { SearchArtifactsRequest };
var SearchArtifactsResponse = /** @class */ (function (_super) {
    __extends(SearchArtifactsResponse, _super);
    function SearchArtifactsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ArtifactSearchResults)
    ], SearchArtifactsResponse.prototype, "artifactSearchResults", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchArtifactsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], SearchArtifactsResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchArtifactsResponse.prototype, "statusCode", void 0);
    return SearchArtifactsResponse;
}(SpeakeasyBase));
export { SearchArtifactsResponse };

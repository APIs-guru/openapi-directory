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
export var SearchLabelsSortEnum;
(function (SearchLabelsSortEnum) {
    SearchLabelsSortEnum["Created"] = "created";
    SearchLabelsSortEnum["Updated"] = "updated";
})(SearchLabelsSortEnum || (SearchLabelsSortEnum = {}));
var SearchLabelsQueryParams = /** @class */ (function (_super) {
    __extends(SearchLabelsQueryParams, _super);
    function SearchLabelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], SearchLabelsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchLabelsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repository_id" }),
        __metadata("design:type", Number)
    ], SearchLabelsQueryParams.prototype, "repositoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchLabelsQueryParams.prototype, "sort", void 0);
    return SearchLabelsQueryParams;
}(SpeakeasyBase));
export { SearchLabelsQueryParams };
var SearchLabels200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchLabels200ApplicationJson, _super);
    function SearchLabels200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incomplete_results" }),
        __metadata("design:type", Boolean)
    ], SearchLabels200ApplicationJson.prototype, "incompleteResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.LabelSearchResultItem }),
        __metadata("design:type", Array)
    ], SearchLabels200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], SearchLabels200ApplicationJson.prototype, "totalCount", void 0);
    return SearchLabels200ApplicationJson;
}(SpeakeasyBase));
export { SearchLabels200ApplicationJson };
var SearchLabelsRequest = /** @class */ (function (_super) {
    __extends(SearchLabelsRequest, _super);
    function SearchLabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchLabelsQueryParams)
    ], SearchLabelsRequest.prototype, "queryParams", void 0);
    return SearchLabelsRequest;
}(SpeakeasyBase));
export { SearchLabelsRequest };
var SearchLabelsResponse = /** @class */ (function (_super) {
    __extends(SearchLabelsResponse, _super);
    function SearchLabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchLabelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchLabelsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], SearchLabelsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchLabels200ApplicationJson)
    ], SearchLabelsResponse.prototype, "searchLabels200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], SearchLabelsResponse.prototype, "validationError", void 0);
    return SearchLabelsResponse;
}(SpeakeasyBase));
export { SearchLabelsResponse };

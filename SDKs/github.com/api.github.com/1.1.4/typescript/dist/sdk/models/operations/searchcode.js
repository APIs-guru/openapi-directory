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
export var SearchCodeSortEnum;
(function (SearchCodeSortEnum) {
    SearchCodeSortEnum["Indexed"] = "indexed";
})(SearchCodeSortEnum || (SearchCodeSortEnum = {}));
var SearchCodeQueryParams = /** @class */ (function (_super) {
    __extends(SearchCodeQueryParams, _super);
    function SearchCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], SearchCodeQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchCodeQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchCodeQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchCodeQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchCodeQueryParams.prototype, "sort", void 0);
    return SearchCodeQueryParams;
}(SpeakeasyBase));
export { SearchCodeQueryParams };
var SearchCode200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchCode200ApplicationJson, _super);
    function SearchCode200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incomplete_results" }),
        __metadata("design:type", Boolean)
    ], SearchCode200ApplicationJson.prototype, "incompleteResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.CodeSearchResultItem }),
        __metadata("design:type", Array)
    ], SearchCode200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], SearchCode200ApplicationJson.prototype, "totalCount", void 0);
    return SearchCode200ApplicationJson;
}(SpeakeasyBase));
export { SearchCode200ApplicationJson };
var SearchCode503ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchCode503ApplicationJson, _super);
    function SearchCode503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SearchCode503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], SearchCode503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SearchCode503ApplicationJson.prototype, "message", void 0);
    return SearchCode503ApplicationJson;
}(SpeakeasyBase));
export { SearchCode503ApplicationJson };
var SearchCodeRequest = /** @class */ (function (_super) {
    __extends(SearchCodeRequest, _super);
    function SearchCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCodeQueryParams)
    ], SearchCodeRequest.prototype, "queryParams", void 0);
    return SearchCodeRequest;
}(SpeakeasyBase));
export { SearchCodeRequest };
var SearchCodeResponse = /** @class */ (function (_super) {
    __extends(SearchCodeResponse, _super);
    function SearchCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], SearchCodeResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCode200ApplicationJson)
    ], SearchCodeResponse.prototype, "searchCode200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCode503ApplicationJson)
    ], SearchCodeResponse.prototype, "searchCode503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], SearchCodeResponse.prototype, "validationError", void 0);
    return SearchCodeResponse;
}(SpeakeasyBase));
export { SearchCodeResponse };

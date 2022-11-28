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
var CollectionGetCollectionPathParams = /** @class */ (function (_super) {
    __extends(CollectionGetCollectionPathParams, _super);
    function CollectionGetCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], CollectionGetCollectionPathParams.prototype, "id", void 0);
    return CollectionGetCollectionPathParams;
}(SpeakeasyBase));
export { CollectionGetCollectionPathParams };
var CollectionGetCollectionQueryParams = /** @class */ (function (_super) {
    __extends(CollectionGetCollectionQueryParams, _super);
    function CollectionGetCollectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" }),
        __metadata("design:type", Number)
    ], CollectionGetCollectionQueryParams.prototype, "pg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" }),
        __metadata("design:type", Number)
    ], CollectionGetCollectionQueryParams.prototype, "rpp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionForLogging" }),
        __metadata("design:type", String)
    ], CollectionGetCollectionQueryParams.prototype, "sessionForLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=test" }),
        __metadata("design:type", Boolean)
    ], CollectionGetCollectionQueryParams.prototype, "test", void 0);
    return CollectionGetCollectionQueryParams;
}(SpeakeasyBase));
export { CollectionGetCollectionQueryParams };
var CollectionGetCollectionRequest = /** @class */ (function (_super) {
    __extends(CollectionGetCollectionRequest, _super);
    function CollectionGetCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CollectionGetCollectionPathParams)
    ], CollectionGetCollectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CollectionGetCollectionQueryParams)
    ], CollectionGetCollectionRequest.prototype, "queryParams", void 0);
    return CollectionGetCollectionRequest;
}(SpeakeasyBase));
export { CollectionGetCollectionRequest };
var CollectionGetCollectionResponse = /** @class */ (function (_super) {
    __extends(CollectionGetCollectionResponse, _super);
    function CollectionGetCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BigOvenModelApi2RecipeSearchResult)
    ], CollectionGetCollectionResponse.prototype, "bigOvenModelApi2RecipeSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CollectionGetCollectionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CollectionGetCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CollectionGetCollectionResponse.prototype, "statusCode", void 0);
    return CollectionGetCollectionResponse;
}(SpeakeasyBase));
export { CollectionGetCollectionResponse };

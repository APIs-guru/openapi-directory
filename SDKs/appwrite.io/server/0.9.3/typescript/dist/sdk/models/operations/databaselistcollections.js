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
var DatabaseListCollectionsQueryParams = /** @class */ (function (_super) {
    __extends(DatabaseListCollectionsQueryParams, _super);
    function DatabaseListCollectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DatabaseListCollectionsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DatabaseListCollectionsQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderType" }),
        __metadata("design:type", String)
    ], DatabaseListCollectionsQueryParams.prototype, "orderType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], DatabaseListCollectionsQueryParams.prototype, "search", void 0);
    return DatabaseListCollectionsQueryParams;
}(SpeakeasyBase));
export { DatabaseListCollectionsQueryParams };
var DatabaseListCollectionsSecurity = /** @class */ (function (_super) {
    __extends(DatabaseListCollectionsSecurity, _super);
    function DatabaseListCollectionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], DatabaseListCollectionsSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], DatabaseListCollectionsSecurity.prototype, "project", void 0);
    return DatabaseListCollectionsSecurity;
}(SpeakeasyBase));
export { DatabaseListCollectionsSecurity };
var DatabaseListCollectionsRequest = /** @class */ (function (_super) {
    __extends(DatabaseListCollectionsRequest, _super);
    function DatabaseListCollectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatabaseListCollectionsQueryParams)
    ], DatabaseListCollectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatabaseListCollectionsSecurity)
    ], DatabaseListCollectionsRequest.prototype, "security", void 0);
    return DatabaseListCollectionsRequest;
}(SpeakeasyBase));
export { DatabaseListCollectionsRequest };
var DatabaseListCollectionsResponse = /** @class */ (function (_super) {
    __extends(DatabaseListCollectionsResponse, _super);
    function DatabaseListCollectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatabaseListCollectionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatabaseListCollectionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CollectionList)
    ], DatabaseListCollectionsResponse.prototype, "collectionList", void 0);
    return DatabaseListCollectionsResponse;
}(SpeakeasyBase));
export { DatabaseListCollectionsResponse };

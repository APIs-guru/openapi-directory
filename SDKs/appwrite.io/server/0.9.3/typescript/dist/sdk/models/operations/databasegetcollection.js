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
var DatabaseGetCollectionPathParams = /** @class */ (function (_super) {
    __extends(DatabaseGetCollectionPathParams, _super);
    function DatabaseGetCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=collectionId" }),
        __metadata("design:type", String)
    ], DatabaseGetCollectionPathParams.prototype, "collectionId", void 0);
    return DatabaseGetCollectionPathParams;
}(SpeakeasyBase));
export { DatabaseGetCollectionPathParams };
var DatabaseGetCollectionSecurity = /** @class */ (function (_super) {
    __extends(DatabaseGetCollectionSecurity, _super);
    function DatabaseGetCollectionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], DatabaseGetCollectionSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], DatabaseGetCollectionSecurity.prototype, "project", void 0);
    return DatabaseGetCollectionSecurity;
}(SpeakeasyBase));
export { DatabaseGetCollectionSecurity };
var DatabaseGetCollectionRequest = /** @class */ (function (_super) {
    __extends(DatabaseGetCollectionRequest, _super);
    function DatabaseGetCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatabaseGetCollectionPathParams)
    ], DatabaseGetCollectionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatabaseGetCollectionSecurity)
    ], DatabaseGetCollectionRequest.prototype, "security", void 0);
    return DatabaseGetCollectionRequest;
}(SpeakeasyBase));
export { DatabaseGetCollectionRequest };
var DatabaseGetCollectionResponse = /** @class */ (function (_super) {
    __extends(DatabaseGetCollectionResponse, _super);
    function DatabaseGetCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatabaseGetCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatabaseGetCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Collection)
    ], DatabaseGetCollectionResponse.prototype, "collection", void 0);
    return DatabaseGetCollectionResponse;
}(SpeakeasyBase));
export { DatabaseGetCollectionResponse };

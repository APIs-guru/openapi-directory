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
var DatabaseUpdateCollectionPathParams = /** @class */ (function (_super) {
    __extends(DatabaseUpdateCollectionPathParams, _super);
    function DatabaseUpdateCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" }),
        __metadata("design:type", String)
    ], DatabaseUpdateCollectionPathParams.prototype, "collectionId", void 0);
    return DatabaseUpdateCollectionPathParams;
}(SpeakeasyBase));
export { DatabaseUpdateCollectionPathParams };
var DatabaseUpdateCollectionRequestBody = /** @class */ (function (_super) {
    __extends(DatabaseUpdateCollectionRequestBody, _super);
    function DatabaseUpdateCollectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatabaseUpdateCollectionRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read" }),
        __metadata("design:type", Array)
    ], DatabaseUpdateCollectionRequestBody.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules" }),
        __metadata("design:type", Array)
    ], DatabaseUpdateCollectionRequestBody.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=write" }),
        __metadata("design:type", Array)
    ], DatabaseUpdateCollectionRequestBody.prototype, "write", void 0);
    return DatabaseUpdateCollectionRequestBody;
}(SpeakeasyBase));
export { DatabaseUpdateCollectionRequestBody };
var DatabaseUpdateCollectionSecurity = /** @class */ (function (_super) {
    __extends(DatabaseUpdateCollectionSecurity, _super);
    function DatabaseUpdateCollectionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], DatabaseUpdateCollectionSecurity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], DatabaseUpdateCollectionSecurity.prototype, "project", void 0);
    return DatabaseUpdateCollectionSecurity;
}(SpeakeasyBase));
export { DatabaseUpdateCollectionSecurity };
var DatabaseUpdateCollectionRequest = /** @class */ (function (_super) {
    __extends(DatabaseUpdateCollectionRequest, _super);
    function DatabaseUpdateCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatabaseUpdateCollectionPathParams)
    ], DatabaseUpdateCollectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DatabaseUpdateCollectionRequestBody)
    ], DatabaseUpdateCollectionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatabaseUpdateCollectionSecurity)
    ], DatabaseUpdateCollectionRequest.prototype, "security", void 0);
    return DatabaseUpdateCollectionRequest;
}(SpeakeasyBase));
export { DatabaseUpdateCollectionRequest };
var DatabaseUpdateCollectionResponse = /** @class */ (function (_super) {
    __extends(DatabaseUpdateCollectionResponse, _super);
    function DatabaseUpdateCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatabaseUpdateCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatabaseUpdateCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Collection)
    ], DatabaseUpdateCollectionResponse.prototype, "collection", void 0);
    return DatabaseUpdateCollectionResponse;
}(SpeakeasyBase));
export { DatabaseUpdateCollectionResponse };

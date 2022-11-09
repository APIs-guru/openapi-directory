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
var DatabaseCreateCollectionRequestBody = /** @class */ (function (_super) {
    __extends(DatabaseCreateCollectionRequestBody, _super);
    function DatabaseCreateCollectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatabaseCreateCollectionRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=read" }),
        __metadata("design:type", Array)
    ], DatabaseCreateCollectionRequestBody.prototype, "read", void 0);
    __decorate([
        Metadata({ data: "json, name=rules" }),
        __metadata("design:type", Array)
    ], DatabaseCreateCollectionRequestBody.prototype, "rules", void 0);
    __decorate([
        Metadata({ data: "json, name=write" }),
        __metadata("design:type", Array)
    ], DatabaseCreateCollectionRequestBody.prototype, "write", void 0);
    return DatabaseCreateCollectionRequestBody;
}(SpeakeasyBase));
export { DatabaseCreateCollectionRequestBody };
var DatabaseCreateCollectionSecurity = /** @class */ (function (_super) {
    __extends(DatabaseCreateCollectionSecurity, _super);
    function DatabaseCreateCollectionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], DatabaseCreateCollectionSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], DatabaseCreateCollectionSecurity.prototype, "project", void 0);
    return DatabaseCreateCollectionSecurity;
}(SpeakeasyBase));
export { DatabaseCreateCollectionSecurity };
var DatabaseCreateCollectionRequest = /** @class */ (function (_super) {
    __extends(DatabaseCreateCollectionRequest, _super);
    function DatabaseCreateCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DatabaseCreateCollectionRequestBody)
    ], DatabaseCreateCollectionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatabaseCreateCollectionSecurity)
    ], DatabaseCreateCollectionRequest.prototype, "security", void 0);
    return DatabaseCreateCollectionRequest;
}(SpeakeasyBase));
export { DatabaseCreateCollectionRequest };
var DatabaseCreateCollectionResponse = /** @class */ (function (_super) {
    __extends(DatabaseCreateCollectionResponse, _super);
    function DatabaseCreateCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatabaseCreateCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatabaseCreateCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Collection)
    ], DatabaseCreateCollectionResponse.prototype, "collection", void 0);
    return DatabaseCreateCollectionResponse;
}(SpeakeasyBase));
export { DatabaseCreateCollectionResponse };

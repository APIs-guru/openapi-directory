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
export var SearchperpackageMatchModeEnum;
(function (SearchperpackageMatchModeEnum) {
    SearchperpackageMatchModeEnum["Literal"] = "literal";
    SearchperpackageMatchModeEnum["Regexp"] = "regexp";
})(SearchperpackageMatchModeEnum || (SearchperpackageMatchModeEnum = {}));
var SearchperpackageQueryParams = /** @class */ (function (_super) {
    __extends(SearchperpackageQueryParams, _super);
    function SearchperpackageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=match_mode" }),
        __metadata("design:type", String)
    ], SearchperpackageQueryParams.prototype, "matchMode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SearchperpackageQueryParams.prototype, "query", void 0);
    return SearchperpackageQueryParams;
}(SpeakeasyBase));
export { SearchperpackageQueryParams };
var SearchperpackageSecurity = /** @class */ (function (_super) {
    __extends(SearchperpackageSecurity, _super);
    function SearchperpackageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SearchperpackageSecurity.prototype, "apiKey", void 0);
    return SearchperpackageSecurity;
}(SpeakeasyBase));
export { SearchperpackageSecurity };
var SearchperpackageRequest = /** @class */ (function (_super) {
    __extends(SearchperpackageRequest, _super);
    function SearchperpackageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchperpackageQueryParams)
    ], SearchperpackageRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SearchperpackageSecurity)
    ], SearchperpackageRequest.prototype, "security", void 0);
    return SearchperpackageRequest;
}(SpeakeasyBase));
export { SearchperpackageRequest };
var SearchperpackageResponse = /** @class */ (function (_super) {
    __extends(SearchperpackageResponse, _super);
    function SearchperpackageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchperpackageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.PackageSearchResult }),
        __metadata("design:type", Array)
    ], SearchperpackageResponse.prototype, "packageSearchResults", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchperpackageResponse.prototype, "statusCode", void 0);
    return SearchperpackageResponse;
}(SpeakeasyBase));
export { SearchperpackageResponse };

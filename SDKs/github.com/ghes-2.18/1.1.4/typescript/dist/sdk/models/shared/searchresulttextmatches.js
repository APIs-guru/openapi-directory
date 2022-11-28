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
var SearchResultTextMatchesMatches = /** @class */ (function (_super) {
    __extends(SearchResultTextMatchesMatches, _super);
    function SearchResultTextMatchesMatches() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indices" }),
        __metadata("design:type", Array)
    ], SearchResultTextMatchesMatches.prototype, "indices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], SearchResultTextMatchesMatches.prototype, "text", void 0);
    return SearchResultTextMatchesMatches;
}(SpeakeasyBase));
export { SearchResultTextMatchesMatches };
var SearchResultTextMatches = /** @class */ (function (_super) {
    __extends(SearchResultTextMatches, _super);
    function SearchResultTextMatches() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fragment" }),
        __metadata("design:type", String)
    ], SearchResultTextMatches.prototype, "fragment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matches", elemType: SearchResultTextMatchesMatches }),
        __metadata("design:type", Array)
    ], SearchResultTextMatches.prototype, "matches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object_type" }),
        __metadata("design:type", String)
    ], SearchResultTextMatches.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object_url" }),
        __metadata("design:type", String)
    ], SearchResultTextMatches.prototype, "objectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=property" }),
        __metadata("design:type", String)
    ], SearchResultTextMatches.prototype, "property", void 0);
    return SearchResultTextMatches;
}(SpeakeasyBase));
export { SearchResultTextMatches };

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
import { QueriesPagedQuery } from "./queriespagedquery";
import { DestinyDefinitionsDestinyEntitySearchResultItem } from "./destinydefinitionsdestinyentitysearchresultitem";
// DestinyDefinitionsDestinyEntitySearchResultResults
/**
 * The items found that are matches/near matches for the searched-for term, sorted by something vaguely resembling "relevance". Hopefully this will get better in the future.
**/
var DestinyDefinitionsDestinyEntitySearchResultResults = /** @class */ (function (_super) {
    __extends(DestinyDefinitionsDestinyEntitySearchResultResults, _super);
    function DestinyDefinitionsDestinyEntitySearchResultResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyDefinitionsDestinyEntitySearchResultResults.prototype, "hasMore", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QueriesPagedQuery)
    ], DestinyDefinitionsDestinyEntitySearchResultResults.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyDefinitionsDestinyEntitySearchResultResults.prototype, "replacementContinuationToken", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDefinitionsDestinyEntitySearchResultItem }),
        __metadata("design:type", Array)
    ], DestinyDefinitionsDestinyEntitySearchResultResults.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDefinitionsDestinyEntitySearchResultResults.prototype, "totalResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyDefinitionsDestinyEntitySearchResultResults.prototype, "useTotalResults", void 0);
    return DestinyDefinitionsDestinyEntitySearchResultResults;
}(SpeakeasyBase));
export { DestinyDefinitionsDestinyEntitySearchResultResults };
// DestinyDefinitionsDestinyEntitySearchResult
/**
 * The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.
**/
var DestinyDefinitionsDestinyEntitySearchResult = /** @class */ (function (_super) {
    __extends(DestinyDefinitionsDestinyEntitySearchResult, _super);
    function DestinyDefinitionsDestinyEntitySearchResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyDefinitionsDestinyEntitySearchResultResults)
    ], DestinyDefinitionsDestinyEntitySearchResult.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyDefinitionsDestinyEntitySearchResult.prototype, "suggestedWords", void 0);
    return DestinyDefinitionsDestinyEntitySearchResult;
}(SpeakeasyBase));
export { DestinyDefinitionsDestinyEntitySearchResult };

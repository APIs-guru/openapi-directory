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
import { GoogleAnalyticsAdminV1alphaAudienceSequenceFilter } from "./googleanalyticsadminv1alphaaudiencesequencefilter";
import { GoogleAnalyticsAdminV1alphaAudienceSimpleFilter } from "./googleanalyticsadminv1alphaaudiencesimplefilter";
export var GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum;
(function (GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum) {
    GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum["AudienceClauseTypeUnspecified"] = "AUDIENCE_CLAUSE_TYPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum["Include"] = "INCLUDE";
    GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum["Exclude"] = "EXCLUDE";
})(GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum || (GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum = {}));
// GoogleAnalyticsAdminV1alphaAudienceFilterClause
/**
 * A clause for defining either a simple or sequence filter. A filter can be inclusive (i.e., users satisfying the filter clause are included in the Audience) or exclusive (i.e., users satisfying the filter clause are excluded from the Audience).
**/
var GoogleAnalyticsAdminV1alphaAudienceFilterClause = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaAudienceFilterClause, _super);
    function GoogleAnalyticsAdminV1alphaAudienceFilterClause() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clauseType" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceFilterClause.prototype, "clauseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequenceFilter" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAudienceSequenceFilter)
    ], GoogleAnalyticsAdminV1alphaAudienceFilterClause.prototype, "sequenceFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simpleFilter" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAudienceSimpleFilter)
    ], GoogleAnalyticsAdminV1alphaAudienceFilterClause.prototype, "simpleFilter", void 0);
    return GoogleAnalyticsAdminV1alphaAudienceFilterClause;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaAudienceFilterClause };

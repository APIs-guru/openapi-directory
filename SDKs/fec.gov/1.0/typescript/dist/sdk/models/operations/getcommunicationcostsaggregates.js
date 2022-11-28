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
export var GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum;
(function (GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum) {
    GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum["S"] = "S";
    GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum["O"] = "O";
})(GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum || (GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum = {}));
var GetCommunicationCostsAggregatesQueryParams = /** @class */ (function (_super) {
    __extends(GetCommunicationCostsAggregatesQueryParams, _super);
    function GetCommunicationCostsAggregatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" }),
        __metadata("design:type", String)
    ], GetCommunicationCostsAggregatesQueryParams.prototype, "supportOpposeIndicator", void 0);
    return GetCommunicationCostsAggregatesQueryParams;
}(SpeakeasyBase));
export { GetCommunicationCostsAggregatesQueryParams };
var GetCommunicationCostsAggregatesRequest = /** @class */ (function (_super) {
    __extends(GetCommunicationCostsAggregatesRequest, _super);
    function GetCommunicationCostsAggregatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommunicationCostsAggregatesQueryParams)
    ], GetCommunicationCostsAggregatesRequest.prototype, "queryParams", void 0);
    return GetCommunicationCostsAggregatesRequest;
}(SpeakeasyBase));
export { GetCommunicationCostsAggregatesRequest };
var GetCommunicationCostsAggregatesResponse = /** @class */ (function (_super) {
    __extends(GetCommunicationCostsAggregatesResponse, _super);
    function GetCommunicationCostsAggregatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommunicationCostByCandidatePage)
    ], GetCommunicationCostsAggregatesResponse.prototype, "communicationCostByCandidatePage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommunicationCostsAggregatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommunicationCostsAggregatesResponse.prototype, "statusCode", void 0);
    return GetCommunicationCostsAggregatesResponse;
}(SpeakeasyBase));
export { GetCommunicationCostsAggregatesResponse };

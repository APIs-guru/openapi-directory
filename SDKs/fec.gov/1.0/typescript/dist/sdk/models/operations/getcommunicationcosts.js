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
export var GetCommunicationCostsSupportOpposeIndicatorEnum;
(function (GetCommunicationCostsSupportOpposeIndicatorEnum) {
    GetCommunicationCostsSupportOpposeIndicatorEnum["S"] = "S";
    GetCommunicationCostsSupportOpposeIndicatorEnum["O"] = "O";
})(GetCommunicationCostsSupportOpposeIndicatorEnum || (GetCommunicationCostsSupportOpposeIndicatorEnum = {}));
var GetCommunicationCostsQueryParams = /** @class */ (function (_super) {
    __extends(GetCommunicationCostsQueryParams, _super);
    function GetCommunicationCostsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommunicationCostsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetCommunicationCostsQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetCommunicationCostsQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" }),
        __metadata("design:type", Array)
    ], GetCommunicationCostsQueryParams.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" }),
        __metadata("design:type", String)
    ], GetCommunicationCostsQueryParams.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" }),
        __metadata("design:type", String)
    ], GetCommunicationCostsQueryParams.prototype, "maxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_date" }),
        __metadata("design:type", Date)
    ], GetCommunicationCostsQueryParams.prototype, "maxDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" }),
        __metadata("design:type", String)
    ], GetCommunicationCostsQueryParams.prototype, "maxImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" }),
        __metadata("design:type", String)
    ], GetCommunicationCostsQueryParams.prototype, "minAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" }),
        __metadata("design:type", Date)
    ], GetCommunicationCostsQueryParams.prototype, "minDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" }),
        __metadata("design:type", String)
    ], GetCommunicationCostsQueryParams.prototype, "minImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommunicationCostsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommunicationCostsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCommunicationCostsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommunicationCostsQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommunicationCostsQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommunicationCostsQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" }),
        __metadata("design:type", Array)
    ], GetCommunicationCostsQueryParams.prototype, "supportOpposeIndicator", void 0);
    return GetCommunicationCostsQueryParams;
}(SpeakeasyBase));
export { GetCommunicationCostsQueryParams };
var GetCommunicationCostsRequest = /** @class */ (function (_super) {
    __extends(GetCommunicationCostsRequest, _super);
    function GetCommunicationCostsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommunicationCostsQueryParams)
    ], GetCommunicationCostsRequest.prototype, "queryParams", void 0);
    return GetCommunicationCostsRequest;
}(SpeakeasyBase));
export { GetCommunicationCostsRequest };
var GetCommunicationCostsResponse = /** @class */ (function (_super) {
    __extends(GetCommunicationCostsResponse, _super);
    function GetCommunicationCostsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommunicationCostPage)
    ], GetCommunicationCostsResponse.prototype, "communicationCostPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommunicationCostsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommunicationCostsResponse.prototype, "statusCode", void 0);
    return GetCommunicationCostsResponse;
}(SpeakeasyBase));
export { GetCommunicationCostsResponse };

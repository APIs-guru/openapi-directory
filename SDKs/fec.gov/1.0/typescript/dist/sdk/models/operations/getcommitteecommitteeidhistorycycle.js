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
var GetCommitteeCommitteeIdHistoryCyclePathParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdHistoryCyclePathParams, _super);
    function GetCommitteeCommitteeIdHistoryCyclePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=committee_id" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdHistoryCyclePathParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cycle" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdHistoryCyclePathParams.prototype, "cycle", void 0);
    return GetCommitteeCommitteeIdHistoryCyclePathParams;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdHistoryCyclePathParams };
export var GetCommitteeCommitteeIdHistoryCycleDesignationEnum;
(function (GetCommitteeCommitteeIdHistoryCycleDesignationEnum) {
    GetCommitteeCommitteeIdHistoryCycleDesignationEnum["Unknown"] = "";
    GetCommitteeCommitteeIdHistoryCycleDesignationEnum["A"] = "A";
    GetCommitteeCommitteeIdHistoryCycleDesignationEnum["J"] = "J";
    GetCommitteeCommitteeIdHistoryCycleDesignationEnum["P"] = "P";
    GetCommitteeCommitteeIdHistoryCycleDesignationEnum["U"] = "U";
    GetCommitteeCommitteeIdHistoryCycleDesignationEnum["B"] = "B";
    GetCommitteeCommitteeIdHistoryCycleDesignationEnum["D"] = "D";
})(GetCommitteeCommitteeIdHistoryCycleDesignationEnum || (GetCommitteeCommitteeIdHistoryCycleDesignationEnum = {}));
var GetCommitteeCommitteeIdHistoryCycleQueryParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdHistoryCycleQueryParams, _super);
    function GetCommitteeCommitteeIdHistoryCycleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdHistoryCycleQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=designation" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdHistoryCycleQueryParams.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdHistoryCycleQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdHistoryCycleQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdHistoryCycleQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdHistoryCycleQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdHistoryCycleQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdHistoryCycleQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdHistoryCycleQueryParams.prototype, "sortNullsLast", void 0);
    return GetCommitteeCommitteeIdHistoryCycleQueryParams;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdHistoryCycleQueryParams };
var GetCommitteeCommitteeIdHistoryCycleRequest = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdHistoryCycleRequest, _super);
    function GetCommitteeCommitteeIdHistoryCycleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommitteeCommitteeIdHistoryCyclePathParams)
    ], GetCommitteeCommitteeIdHistoryCycleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommitteeCommitteeIdHistoryCycleQueryParams)
    ], GetCommitteeCommitteeIdHistoryCycleRequest.prototype, "queryParams", void 0);
    return GetCommitteeCommitteeIdHistoryCycleRequest;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdHistoryCycleRequest };
var GetCommitteeCommitteeIdHistoryCycleResponse = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdHistoryCycleResponse, _super);
    function GetCommitteeCommitteeIdHistoryCycleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitteeHistoryPage)
    ], GetCommitteeCommitteeIdHistoryCycleResponse.prototype, "committeeHistoryPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdHistoryCycleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdHistoryCycleResponse.prototype, "statusCode", void 0);
    return GetCommitteeCommitteeIdHistoryCycleResponse;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdHistoryCycleResponse };

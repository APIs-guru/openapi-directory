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
export var GetElectionsSummaryOfficeEnum;
(function (GetElectionsSummaryOfficeEnum) {
    GetElectionsSummaryOfficeEnum["House"] = "house";
    GetElectionsSummaryOfficeEnum["Senate"] = "senate";
    GetElectionsSummaryOfficeEnum["President"] = "president";
})(GetElectionsSummaryOfficeEnum || (GetElectionsSummaryOfficeEnum = {}));
var GetElectionsSummaryQueryParams = /** @class */ (function (_super) {
    __extends(GetElectionsSummaryQueryParams, _super);
    function GetElectionsSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetElectionsSummaryQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Number)
    ], GetElectionsSummaryQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" }),
        __metadata("design:type", String)
    ], GetElectionsSummaryQueryParams.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetElectionsSummaryQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", String)
    ], GetElectionsSummaryQueryParams.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetElectionsSummaryQueryParams.prototype, "state", void 0);
    return GetElectionsSummaryQueryParams;
}(SpeakeasyBase));
export { GetElectionsSummaryQueryParams };
var GetElectionsSummaryRequest = /** @class */ (function (_super) {
    __extends(GetElectionsSummaryRequest, _super);
    function GetElectionsSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetElectionsSummaryQueryParams)
    ], GetElectionsSummaryRequest.prototype, "queryParams", void 0);
    return GetElectionsSummaryRequest;
}(SpeakeasyBase));
export { GetElectionsSummaryRequest };
var GetElectionsSummaryResponse = /** @class */ (function (_super) {
    __extends(GetElectionsSummaryResponse, _super);
    function GetElectionsSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetElectionsSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ElectionSummary)
    ], GetElectionsSummaryResponse.prototype, "electionSummary", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetElectionsSummaryResponse.prototype, "statusCode", void 0);
    return GetElectionsSummaryResponse;
}(SpeakeasyBase));
export { GetElectionsSummaryResponse };

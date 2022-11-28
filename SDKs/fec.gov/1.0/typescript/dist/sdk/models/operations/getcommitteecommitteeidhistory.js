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
var GetCommitteeCommitteeIdHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdHistoryPathParams, _super);
    function GetCommitteeCommitteeIdHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=committee_id" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdHistoryPathParams.prototype, "committeeId", void 0);
    return GetCommitteeCommitteeIdHistoryPathParams;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdHistoryPathParams };
export var GetCommitteeCommitteeIdHistoryDesignationEnum;
(function (GetCommitteeCommitteeIdHistoryDesignationEnum) {
    GetCommitteeCommitteeIdHistoryDesignationEnum["Unknown"] = "";
    GetCommitteeCommitteeIdHistoryDesignationEnum["A"] = "A";
    GetCommitteeCommitteeIdHistoryDesignationEnum["J"] = "J";
    GetCommitteeCommitteeIdHistoryDesignationEnum["P"] = "P";
    GetCommitteeCommitteeIdHistoryDesignationEnum["U"] = "U";
    GetCommitteeCommitteeIdHistoryDesignationEnum["B"] = "B";
    GetCommitteeCommitteeIdHistoryDesignationEnum["D"] = "D";
})(GetCommitteeCommitteeIdHistoryDesignationEnum || (GetCommitteeCommitteeIdHistoryDesignationEnum = {}));
var GetCommitteeCommitteeIdHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdHistoryQueryParams, _super);
    function GetCommitteeCommitteeIdHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdHistoryQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=designation" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdHistoryQueryParams.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdHistoryQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdHistoryQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdHistoryQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdHistoryQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdHistoryQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdHistoryQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdHistoryQueryParams.prototype, "sortNullsLast", void 0);
    return GetCommitteeCommitteeIdHistoryQueryParams;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdHistoryQueryParams };
var GetCommitteeCommitteeIdHistoryRequest = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdHistoryRequest, _super);
    function GetCommitteeCommitteeIdHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommitteeCommitteeIdHistoryPathParams)
    ], GetCommitteeCommitteeIdHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommitteeCommitteeIdHistoryQueryParams)
    ], GetCommitteeCommitteeIdHistoryRequest.prototype, "queryParams", void 0);
    return GetCommitteeCommitteeIdHistoryRequest;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdHistoryRequest };
var GetCommitteeCommitteeIdHistoryResponse = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdHistoryResponse, _super);
    function GetCommitteeCommitteeIdHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitteeHistoryPage)
    ], GetCommitteeCommitteeIdHistoryResponse.prototype, "committeeHistoryPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdHistoryResponse.prototype, "statusCode", void 0);
    return GetCommitteeCommitteeIdHistoryResponse;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdHistoryResponse };

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
var GetSimilarQueryParams = /** @class */ (function (_super) {
    __extends(GetSimilarQueryParams, _super);
    function GetSimilarQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=link" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "page", void 0);
    return GetSimilarQueryParams;
}(SpeakeasyBase));
export { GetSimilarQueryParams };
var GetSimilar200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSimilar200ApplicationJson, _super);
    function GetSimilar200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calls_per_month" }),
        __metadata("design:type", String)
    ], GetSimilar200ApplicationJson.prototype, "callsPerMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companies", elemType: shared.SimilarCompany }),
        __metadata("design:type", Array)
    ], GetSimilar200ApplicationJson.prototype, "companies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_remaining" }),
        __metadata("design:type", String)
    ], GetSimilar200ApplicationJson.prototype, "countRemaining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=input_company" }),
        __metadata("design:type", shared.InputCompany)
    ], GetSimilar200ApplicationJson.prototype, "inputCompany", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewal_date" }),
        __metadata("design:type", String)
    ], GetSimilar200ApplicationJson.prototype, "renewalDate", void 0);
    return GetSimilar200ApplicationJson;
}(SpeakeasyBase));
export { GetSimilar200ApplicationJson };
var GetSimilarRequest = /** @class */ (function (_super) {
    __extends(GetSimilarRequest, _super);
    function GetSimilarRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarQueryParams)
    ], GetSimilarRequest.prototype, "queryParams", void 0);
    return GetSimilarRequest;
}(SpeakeasyBase));
export { GetSimilarRequest };
var GetSimilarResponse = /** @class */ (function (_super) {
    __extends(GetSimilarResponse, _super);
    function GetSimilarResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSimilarResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilar200ApplicationJson)
    ], GetSimilarResponse.prototype, "getSimilar200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSimilarResponse.prototype, "statusCode", void 0);
    return GetSimilarResponse;
}(SpeakeasyBase));
export { GetSimilarResponse };

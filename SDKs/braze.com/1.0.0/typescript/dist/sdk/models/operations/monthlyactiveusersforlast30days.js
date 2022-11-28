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
var MonthlyActiveUsersForLast30DaysQueryParams = /** @class */ (function (_super) {
    __extends(MonthlyActiveUsersForLast30DaysQueryParams, _super);
    function MonthlyActiveUsersForLast30DaysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" }),
        __metadata("design:type", String)
    ], MonthlyActiveUsersForLast30DaysQueryParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" }),
        __metadata("design:type", String)
    ], MonthlyActiveUsersForLast30DaysQueryParams.prototype, "endingAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", String)
    ], MonthlyActiveUsersForLast30DaysQueryParams.prototype, "length", void 0);
    return MonthlyActiveUsersForLast30DaysQueryParams;
}(SpeakeasyBase));
export { MonthlyActiveUsersForLast30DaysQueryParams };
var MonthlyActiveUsersForLast30DaysRequest = /** @class */ (function (_super) {
    __extends(MonthlyActiveUsersForLast30DaysRequest, _super);
    function MonthlyActiveUsersForLast30DaysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonthlyActiveUsersForLast30DaysQueryParams)
    ], MonthlyActiveUsersForLast30DaysRequest.prototype, "queryParams", void 0);
    return MonthlyActiveUsersForLast30DaysRequest;
}(SpeakeasyBase));
export { MonthlyActiveUsersForLast30DaysRequest };
var MonthlyActiveUsersForLast30DaysResponse = /** @class */ (function (_super) {
    __extends(MonthlyActiveUsersForLast30DaysResponse, _super);
    function MonthlyActiveUsersForLast30DaysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonthlyActiveUsersForLast30DaysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonthlyActiveUsersForLast30DaysResponse.prototype, "statusCode", void 0);
    return MonthlyActiveUsersForLast30DaysResponse;
}(SpeakeasyBase));
export { MonthlyActiveUsersForLast30DaysResponse };

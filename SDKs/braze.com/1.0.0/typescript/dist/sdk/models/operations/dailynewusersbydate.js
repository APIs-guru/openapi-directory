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
var DailyNewUsersByDateQueryParams = /** @class */ (function (_super) {
    __extends(DailyNewUsersByDateQueryParams, _super);
    function DailyNewUsersByDateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" }),
        __metadata("design:type", String)
    ], DailyNewUsersByDateQueryParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" }),
        __metadata("design:type", String)
    ], DailyNewUsersByDateQueryParams.prototype, "endingAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", String)
    ], DailyNewUsersByDateQueryParams.prototype, "length", void 0);
    return DailyNewUsersByDateQueryParams;
}(SpeakeasyBase));
export { DailyNewUsersByDateQueryParams };
var DailyNewUsersByDateRequest = /** @class */ (function (_super) {
    __extends(DailyNewUsersByDateRequest, _super);
    function DailyNewUsersByDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DailyNewUsersByDateQueryParams)
    ], DailyNewUsersByDateRequest.prototype, "queryParams", void 0);
    return DailyNewUsersByDateRequest;
}(SpeakeasyBase));
export { DailyNewUsersByDateRequest };
var DailyNewUsersByDateResponse = /** @class */ (function (_super) {
    __extends(DailyNewUsersByDateResponse, _super);
    function DailyNewUsersByDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DailyNewUsersByDateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DailyNewUsersByDateResponse.prototype, "statusCode", void 0);
    return DailyNewUsersByDateResponse;
}(SpeakeasyBase));
export { DailyNewUsersByDateResponse };

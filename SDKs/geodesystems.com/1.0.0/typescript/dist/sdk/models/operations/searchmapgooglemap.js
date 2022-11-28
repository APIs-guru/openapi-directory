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
var SearchMapGooglemapQueryParams = /** @class */ (function (_super) {
    __extends(SearchMapGooglemapQueryParams, _super);
    function SearchMapGooglemapQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchMapGooglemapQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchMapGooglemapQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchMapGooglemapQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchMapGooglemapQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchMapGooglemapQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchMapGooglemapQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchMapGooglemapQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchMapGooglemapQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchMapGooglemapQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchMapGooglemapQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchMapGooglemapQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchMapGooglemapQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchMapGooglemapQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchMapGooglemapQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchMapGooglemapQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchMapGooglemapQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchMapGooglemapQueryParams.prototype, "todate", void 0);
    return SearchMapGooglemapQueryParams;
}(SpeakeasyBase));
export { SearchMapGooglemapQueryParams };
var SearchMapGooglemapRequest = /** @class */ (function (_super) {
    __extends(SearchMapGooglemapRequest, _super);
    function SearchMapGooglemapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchMapGooglemapQueryParams)
    ], SearchMapGooglemapRequest.prototype, "queryParams", void 0);
    return SearchMapGooglemapRequest;
}(SpeakeasyBase));
export { SearchMapGooglemapRequest };
var SearchMapGooglemapResponse = /** @class */ (function (_super) {
    __extends(SearchMapGooglemapResponse, _super);
    function SearchMapGooglemapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchMapGooglemapResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchMapGooglemapResponse.prototype, "statusCode", void 0);
    return SearchMapGooglemapResponse;
}(SpeakeasyBase));
export { SearchMapGooglemapResponse };

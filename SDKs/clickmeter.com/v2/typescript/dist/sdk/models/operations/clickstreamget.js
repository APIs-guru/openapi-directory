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
export var ClickStreamGetFilterEnum;
(function (ClickStreamGetFilterEnum) {
    ClickStreamGetFilterEnum["Unknown"] = "";
    ClickStreamGetFilterEnum["Spiders"] = "spiders";
    ClickStreamGetFilterEnum["Uniques"] = "uniques";
    ClickStreamGetFilterEnum["Nonuniques"] = "nonuniques";
    ClickStreamGetFilterEnum["Conversions"] = "conversions";
})(ClickStreamGetFilterEnum || (ClickStreamGetFilterEnum = {}));
var ClickStreamGetQueryParams = /** @class */ (function (_super) {
    __extends(ClickStreamGetQueryParams, _super);
    function ClickStreamGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conversion" }),
        __metadata("design:type", Number)
    ], ClickStreamGetQueryParams.prototype, "conversion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datapoint" }),
        __metadata("design:type", Number)
    ], ClickStreamGetQueryParams.prototype, "datapoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ClickStreamGetQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", Number)
    ], ClickStreamGetQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClickStreamGetQueryParams.prototype, "pageSize", void 0);
    return ClickStreamGetQueryParams;
}(SpeakeasyBase));
export { ClickStreamGetQueryParams };
var ClickStreamGetRequest = /** @class */ (function (_super) {
    __extends(ClickStreamGetRequest, _super);
    function ClickStreamGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClickStreamGetQueryParams)
    ], ClickStreamGetRequest.prototype, "queryParams", void 0);
    return ClickStreamGetRequest;
}(SpeakeasyBase));
export { ClickStreamGetRequest };
var ClickStreamGetResponse = /** @class */ (function (_super) {
    __extends(ClickStreamGetResponse, _super);
    function ClickStreamGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit)
    ], ClickStreamGetResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClickStreamGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClickStreamGetResponse.prototype, "statusCode", void 0);
    return ClickStreamGetResponse;
}(SpeakeasyBase));
export { ClickStreamGetResponse };

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
var ConversionsGetTopsPathParams = /** @class */ (function (_super) {
    __extends(ConversionsGetTopsPathParams, _super);
    function ConversionsGetTopsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" }),
        __metadata("design:type", Number)
    ], ConversionsGetTopsPathParams.prototype, "conversionId", void 0);
    return ConversionsGetTopsPathParams;
}(SpeakeasyBase));
export { ConversionsGetTopsPathParams };
export var ConversionsGetTopsHittypeEnum;
(function (ConversionsGetTopsHittypeEnum) {
    ConversionsGetTopsHittypeEnum["Clicks"] = "clicks";
    ConversionsGetTopsHittypeEnum["Views"] = "views";
})(ConversionsGetTopsHittypeEnum || (ConversionsGetTopsHittypeEnum = {}));
export var ConversionsGetTopsTimeframeEnum;
(function (ConversionsGetTopsTimeframeEnum) {
    ConversionsGetTopsTimeframeEnum["Yesterday"] = "yesterday";
    ConversionsGetTopsTimeframeEnum["Last7"] = "last7";
    ConversionsGetTopsTimeframeEnum["Last30"] = "last30";
    ConversionsGetTopsTimeframeEnum["Lastmonth"] = "lastmonth";
    ConversionsGetTopsTimeframeEnum["Currentmonth"] = "currentmonth";
    ConversionsGetTopsTimeframeEnum["Previousmonth"] = "previousmonth";
    ConversionsGetTopsTimeframeEnum["Last90"] = "last90";
    ConversionsGetTopsTimeframeEnum["Last120"] = "last120";
    ConversionsGetTopsTimeframeEnum["Last180"] = "last180";
    ConversionsGetTopsTimeframeEnum["Beginning"] = "beginning";
    ConversionsGetTopsTimeframeEnum["Custom"] = "custom";
})(ConversionsGetTopsTimeframeEnum || (ConversionsGetTopsTimeframeEnum = {}));
export var ConversionsGetTopsTypeEnum;
(function (ConversionsGetTopsTypeEnum) {
    ConversionsGetTopsTypeEnum["Datapoints"] = "datapoints";
    ConversionsGetTopsTypeEnum["Groups"] = "groups";
    ConversionsGetTopsTypeEnum["Browsers"] = "browsers";
    ConversionsGetTopsTypeEnum["Browsersfamilies"] = "browsersfamilies";
    ConversionsGetTopsTypeEnum["Platforms"] = "platforms";
    ConversionsGetTopsTypeEnum["Cities"] = "cities";
    ConversionsGetTopsTypeEnum["Countries"] = "countries";
    ConversionsGetTopsTypeEnum["Keywords"] = "keywords";
    ConversionsGetTopsTypeEnum["Referrers"] = "referrers";
    ConversionsGetTopsTypeEnum["Convparameters"] = "convparameters";
    ConversionsGetTopsTypeEnum["Destinations"] = "destinations";
    ConversionsGetTopsTypeEnum["Languages"] = "languages";
    ConversionsGetTopsTypeEnum["Params"] = "params";
})(ConversionsGetTopsTypeEnum || (ConversionsGetTopsTypeEnum = {}));
var ConversionsGetTopsQueryParams = /** @class */ (function (_super) {
    __extends(ConversionsGetTopsQueryParams, _super);
    function ConversionsGetTopsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], ConversionsGetTopsQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hittype" }),
        __metadata("design:type", String)
    ], ConversionsGetTopsQueryParams.prototype, "hittype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" }),
        __metadata("design:type", String)
    ], ConversionsGetTopsQueryParams.prototype, "timeframe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], ConversionsGetTopsQueryParams.prototype, "toDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ConversionsGetTopsQueryParams.prototype, "type", void 0);
    return ConversionsGetTopsQueryParams;
}(SpeakeasyBase));
export { ConversionsGetTopsQueryParams };
var ConversionsGetTopsRequest = /** @class */ (function (_super) {
    __extends(ConversionsGetTopsRequest, _super);
    function ConversionsGetTopsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetTopsPathParams)
    ], ConversionsGetTopsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetTopsQueryParams)
    ], ConversionsGetTopsRequest.prototype, "queryParams", void 0);
    return ConversionsGetTopsRequest;
}(SpeakeasyBase));
export { ConversionsGetTopsRequest };
var ConversionsGetTopsResponse = /** @class */ (function (_super) {
    __extends(ConversionsGetTopsResponse, _super);
    function ConversionsGetTopsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoTopsTop)
    ], ConversionsGetTopsResponse.prototype, "apiCoreDtoTopsTop", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConversionsGetTopsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConversionsGetTopsResponse.prototype, "statusCode", void 0);
    return ConversionsGetTopsResponse;
}(SpeakeasyBase));
export { ConversionsGetTopsResponse };

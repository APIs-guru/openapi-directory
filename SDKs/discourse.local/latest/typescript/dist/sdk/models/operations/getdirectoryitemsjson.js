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
export var GetDirectoryItemsJsonAscEnum;
(function (GetDirectoryItemsJsonAscEnum) {
    GetDirectoryItemsJsonAscEnum["True"] = "true";
})(GetDirectoryItemsJsonAscEnum || (GetDirectoryItemsJsonAscEnum = {}));
export var GetDirectoryItemsJsonOrderEnum;
(function (GetDirectoryItemsJsonOrderEnum) {
    GetDirectoryItemsJsonOrderEnum["LikesReceived"] = "likes_received";
    GetDirectoryItemsJsonOrderEnum["LikesGiven"] = "likes_given";
    GetDirectoryItemsJsonOrderEnum["TopicCount"] = "topic_count";
    GetDirectoryItemsJsonOrderEnum["PostCount"] = "post_count";
    GetDirectoryItemsJsonOrderEnum["TopicsEntered"] = "topics_entered";
    GetDirectoryItemsJsonOrderEnum["PostsRead"] = "posts_read";
    GetDirectoryItemsJsonOrderEnum["DaysVisited"] = "days_visited";
})(GetDirectoryItemsJsonOrderEnum || (GetDirectoryItemsJsonOrderEnum = {}));
export var GetDirectoryItemsJsonPeriodEnum;
(function (GetDirectoryItemsJsonPeriodEnum) {
    GetDirectoryItemsJsonPeriodEnum["Daily"] = "daily";
    GetDirectoryItemsJsonPeriodEnum["Weekly"] = "weekly";
    GetDirectoryItemsJsonPeriodEnum["Monthly"] = "monthly";
    GetDirectoryItemsJsonPeriodEnum["Quarterly"] = "quarterly";
    GetDirectoryItemsJsonPeriodEnum["Yearly"] = "yearly";
    GetDirectoryItemsJsonPeriodEnum["All"] = "all";
})(GetDirectoryItemsJsonPeriodEnum || (GetDirectoryItemsJsonPeriodEnum = {}));
var GetDirectoryItemsJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetDirectoryItemsJsonQueryParams, _super);
    function GetDirectoryItemsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asc" }),
        __metadata("design:type", String)
    ], GetDirectoryItemsJsonQueryParams.prototype, "asc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetDirectoryItemsJsonQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetDirectoryItemsJsonQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" }),
        __metadata("design:type", String)
    ], GetDirectoryItemsJsonQueryParams.prototype, "period", void 0);
    return GetDirectoryItemsJsonQueryParams;
}(SpeakeasyBase));
export { GetDirectoryItemsJsonQueryParams };
var GetDirectoryItemsJsonRequest = /** @class */ (function (_super) {
    __extends(GetDirectoryItemsJsonRequest, _super);
    function GetDirectoryItemsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDirectoryItemsJsonQueryParams)
    ], GetDirectoryItemsJsonRequest.prototype, "queryParams", void 0);
    return GetDirectoryItemsJsonRequest;
}(SpeakeasyBase));
export { GetDirectoryItemsJsonRequest };
var GetDirectoryItemsJsonResponse = /** @class */ (function (_super) {
    __extends(GetDirectoryItemsJsonResponse, _super);
    function GetDirectoryItemsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDirectoryItemsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDirectoryItemsJsonResponse.prototype, "getDirectoryItemsJson200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDirectoryItemsJsonResponse.prototype, "statusCode", void 0);
    return GetDirectoryItemsJsonResponse;
}(SpeakeasyBase));
export { GetDirectoryItemsJsonResponse };

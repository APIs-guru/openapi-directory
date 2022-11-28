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
var Destiny2GetActivityHistoryPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetActivityHistoryPathParams, _super);
    function Destiny2GetActivityHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" }),
        __metadata("design:type", Number)
    ], Destiny2GetActivityHistoryPathParams.prototype, "characterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetActivityHistoryPathParams.prototype, "destinyMembershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetActivityHistoryPathParams.prototype, "membershipType", void 0);
    return Destiny2GetActivityHistoryPathParams;
}(SpeakeasyBase));
export { Destiny2GetActivityHistoryPathParams };
var Destiny2GetActivityHistoryQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetActivityHistoryQueryParams, _super);
    function Destiny2GetActivityHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], Destiny2GetActivityHistoryQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" }),
        __metadata("design:type", Number)
    ], Destiny2GetActivityHistoryQueryParams.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], Destiny2GetActivityHistoryQueryParams.prototype, "page", void 0);
    return Destiny2GetActivityHistoryQueryParams;
}(SpeakeasyBase));
export { Destiny2GetActivityHistoryQueryParams };
var Destiny2GetActivityHistoryRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetActivityHistoryRequest, _super);
    function Destiny2GetActivityHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetActivityHistoryPathParams)
    ], Destiny2GetActivityHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetActivityHistoryQueryParams)
    ], Destiny2GetActivityHistoryRequest.prototype, "queryParams", void 0);
    return Destiny2GetActivityHistoryRequest;
}(SpeakeasyBase));
export { Destiny2GetActivityHistoryRequest };
var Destiny2GetActivityHistoryResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetActivityHistoryResponse, _super);
    function Destiny2GetActivityHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetActivityHistoryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetActivityHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetActivityHistoryResponse.prototype, "statusCode", void 0);
    return Destiny2GetActivityHistoryResponse;
}(SpeakeasyBase));
export { Destiny2GetActivityHistoryResponse };

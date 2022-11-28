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
var HistoryListForUserPathParams = /** @class */ (function (_super) {
    __extends(HistoryListForUserPathParams, _super);
    function HistoryListForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], HistoryListForUserPathParams.prototype, "userId", void 0);
    return HistoryListForUserPathParams;
}(SpeakeasyBase));
export { HistoryListForUserPathParams };
var HistoryListForUserQueryParams = /** @class */ (function (_super) {
    __extends(HistoryListForUserQueryParams, _super);
    function HistoryListForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], HistoryListForUserQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=display" }),
        __metadata("design:type", String)
    ], HistoryListForUserQueryParams.prototype, "display", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_at" }),
        __metadata("design:type", Date)
    ], HistoryListForUserQueryParams.prototype, "endAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], HistoryListForUserQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], HistoryListForUserQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_at" }),
        __metadata("design:type", Date)
    ], HistoryListForUserQueryParams.prototype, "startAt", void 0);
    return HistoryListForUserQueryParams;
}(SpeakeasyBase));
export { HistoryListForUserQueryParams };
var HistoryListForUserRequest = /** @class */ (function (_super) {
    __extends(HistoryListForUserRequest, _super);
    function HistoryListForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HistoryListForUserPathParams)
    ], HistoryListForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HistoryListForUserQueryParams)
    ], HistoryListForUserRequest.prototype, "queryParams", void 0);
    return HistoryListForUserRequest;
}(SpeakeasyBase));
export { HistoryListForUserRequest };
var HistoryListForUserResponse = /** @class */ (function (_super) {
    __extends(HistoryListForUserResponse, _super);
    function HistoryListForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ActionEntity }),
        __metadata("design:type", Array)
    ], HistoryListForUserResponse.prototype, "actionEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HistoryListForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HistoryListForUserResponse.prototype, "statusCode", void 0);
    return HistoryListForUserResponse;
}(SpeakeasyBase));
export { HistoryListForUserResponse };

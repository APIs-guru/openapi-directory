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
var ActivityListPublicEventsForRepoNetworkPathParams = /** @class */ (function (_super) {
    __extends(ActivityListPublicEventsForRepoNetworkPathParams, _super);
    function ActivityListPublicEventsForRepoNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActivityListPublicEventsForRepoNetworkPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActivityListPublicEventsForRepoNetworkPathParams.prototype, "repo", void 0);
    return ActivityListPublicEventsForRepoNetworkPathParams;
}(SpeakeasyBase));
export { ActivityListPublicEventsForRepoNetworkPathParams };
var ActivityListPublicEventsForRepoNetworkQueryParams = /** @class */ (function (_super) {
    __extends(ActivityListPublicEventsForRepoNetworkQueryParams, _super);
    function ActivityListPublicEventsForRepoNetworkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActivityListPublicEventsForRepoNetworkQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActivityListPublicEventsForRepoNetworkQueryParams.prototype, "perPage", void 0);
    return ActivityListPublicEventsForRepoNetworkQueryParams;
}(SpeakeasyBase));
export { ActivityListPublicEventsForRepoNetworkQueryParams };
var ActivityListPublicEventsForRepoNetworkRequest = /** @class */ (function (_super) {
    __extends(ActivityListPublicEventsForRepoNetworkRequest, _super);
    function ActivityListPublicEventsForRepoNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityListPublicEventsForRepoNetworkPathParams)
    ], ActivityListPublicEventsForRepoNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityListPublicEventsForRepoNetworkQueryParams)
    ], ActivityListPublicEventsForRepoNetworkRequest.prototype, "queryParams", void 0);
    return ActivityListPublicEventsForRepoNetworkRequest;
}(SpeakeasyBase));
export { ActivityListPublicEventsForRepoNetworkRequest };
var ActivityListPublicEventsForRepoNetworkResponse = /** @class */ (function (_super) {
    __extends(ActivityListPublicEventsForRepoNetworkResponse, _super);
    function ActivityListPublicEventsForRepoNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivityListPublicEventsForRepoNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivityListPublicEventsForRepoNetworkResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ActivityListPublicEventsForRepoNetworkResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Event }),
        __metadata("design:type", Array)
    ], ActivityListPublicEventsForRepoNetworkResponse.prototype, "events", void 0);
    return ActivityListPublicEventsForRepoNetworkResponse;
}(SpeakeasyBase));
export { ActivityListPublicEventsForRepoNetworkResponse };

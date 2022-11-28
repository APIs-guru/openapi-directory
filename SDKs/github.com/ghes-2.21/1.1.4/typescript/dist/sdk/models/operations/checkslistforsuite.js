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
var ChecksListForSuitePathParams = /** @class */ (function (_super) {
    __extends(ChecksListForSuitePathParams, _super);
    function ChecksListForSuitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_suite_id" }),
        __metadata("design:type", Number)
    ], ChecksListForSuitePathParams.prototype, "checkSuiteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ChecksListForSuitePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ChecksListForSuitePathParams.prototype, "repo", void 0);
    return ChecksListForSuitePathParams;
}(SpeakeasyBase));
export { ChecksListForSuitePathParams };
export var ChecksListForSuiteFilterEnum;
(function (ChecksListForSuiteFilterEnum) {
    ChecksListForSuiteFilterEnum["Latest"] = "latest";
    ChecksListForSuiteFilterEnum["All"] = "all";
})(ChecksListForSuiteFilterEnum || (ChecksListForSuiteFilterEnum = {}));
var ChecksListForSuiteQueryParams = /** @class */ (function (_super) {
    __extends(ChecksListForSuiteQueryParams, _super);
    function ChecksListForSuiteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=check_name" }),
        __metadata("design:type", String)
    ], ChecksListForSuiteQueryParams.prototype, "checkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ChecksListForSuiteQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ChecksListForSuiteQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ChecksListForSuiteQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ChecksListForSuiteQueryParams.prototype, "status", void 0);
    return ChecksListForSuiteQueryParams;
}(SpeakeasyBase));
export { ChecksListForSuiteQueryParams };
var ChecksListForSuite200ApplicationJson = /** @class */ (function (_super) {
    __extends(ChecksListForSuite200ApplicationJson, _super);
    function ChecksListForSuite200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_runs", elemType: shared.CheckRun }),
        __metadata("design:type", Array)
    ], ChecksListForSuite200ApplicationJson.prototype, "checkRuns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ChecksListForSuite200ApplicationJson.prototype, "totalCount", void 0);
    return ChecksListForSuite200ApplicationJson;
}(SpeakeasyBase));
export { ChecksListForSuite200ApplicationJson };
var ChecksListForSuiteRequest = /** @class */ (function (_super) {
    __extends(ChecksListForSuiteRequest, _super);
    function ChecksListForSuiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksListForSuitePathParams)
    ], ChecksListForSuiteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksListForSuiteQueryParams)
    ], ChecksListForSuiteRequest.prototype, "queryParams", void 0);
    return ChecksListForSuiteRequest;
}(SpeakeasyBase));
export { ChecksListForSuiteRequest };
var ChecksListForSuiteResponse = /** @class */ (function (_super) {
    __extends(ChecksListForSuiteResponse, _super);
    function ChecksListForSuiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChecksListForSuiteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ChecksListForSuiteResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChecksListForSuiteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksListForSuite200ApplicationJson)
    ], ChecksListForSuiteResponse.prototype, "checksListForSuite200ApplicationJsonObject", void 0);
    return ChecksListForSuiteResponse;
}(SpeakeasyBase));
export { ChecksListForSuiteResponse };

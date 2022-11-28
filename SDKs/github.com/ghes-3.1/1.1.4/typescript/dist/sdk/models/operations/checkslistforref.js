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
var ChecksListForRefPathParams = /** @class */ (function (_super) {
    __extends(ChecksListForRefPathParams, _super);
    function ChecksListForRefPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ChecksListForRefPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ref" }),
        __metadata("design:type", String)
    ], ChecksListForRefPathParams.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ChecksListForRefPathParams.prototype, "repo", void 0);
    return ChecksListForRefPathParams;
}(SpeakeasyBase));
export { ChecksListForRefPathParams };
export var ChecksListForRefFilterEnum;
(function (ChecksListForRefFilterEnum) {
    ChecksListForRefFilterEnum["Latest"] = "latest";
    ChecksListForRefFilterEnum["All"] = "all";
})(ChecksListForRefFilterEnum || (ChecksListForRefFilterEnum = {}));
var ChecksListForRefQueryParams = /** @class */ (function (_super) {
    __extends(ChecksListForRefQueryParams, _super);
    function ChecksListForRefQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" }),
        __metadata("design:type", Number)
    ], ChecksListForRefQueryParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=check_name" }),
        __metadata("design:type", String)
    ], ChecksListForRefQueryParams.prototype, "checkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ChecksListForRefQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ChecksListForRefQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ChecksListForRefQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ChecksListForRefQueryParams.prototype, "status", void 0);
    return ChecksListForRefQueryParams;
}(SpeakeasyBase));
export { ChecksListForRefQueryParams };
var ChecksListForRef200ApplicationJson = /** @class */ (function (_super) {
    __extends(ChecksListForRef200ApplicationJson, _super);
    function ChecksListForRef200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_runs", elemType: shared.CheckRun }),
        __metadata("design:type", Array)
    ], ChecksListForRef200ApplicationJson.prototype, "checkRuns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ChecksListForRef200ApplicationJson.prototype, "totalCount", void 0);
    return ChecksListForRef200ApplicationJson;
}(SpeakeasyBase));
export { ChecksListForRef200ApplicationJson };
var ChecksListForRefRequest = /** @class */ (function (_super) {
    __extends(ChecksListForRefRequest, _super);
    function ChecksListForRefRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksListForRefPathParams)
    ], ChecksListForRefRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksListForRefQueryParams)
    ], ChecksListForRefRequest.prototype, "queryParams", void 0);
    return ChecksListForRefRequest;
}(SpeakeasyBase));
export { ChecksListForRefRequest };
var ChecksListForRefResponse = /** @class */ (function (_super) {
    __extends(ChecksListForRefResponse, _super);
    function ChecksListForRefResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChecksListForRefResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ChecksListForRefResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChecksListForRefResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksListForRef200ApplicationJson)
    ], ChecksListForRefResponse.prototype, "checksListForRef200ApplicationJsonObject", void 0);
    return ChecksListForRefResponse;
}(SpeakeasyBase));
export { ChecksListForRefResponse };

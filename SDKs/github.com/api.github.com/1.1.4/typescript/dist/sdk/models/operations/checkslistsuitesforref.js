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
var ChecksListSuitesForRefPathParams = /** @class */ (function (_super) {
    __extends(ChecksListSuitesForRefPathParams, _super);
    function ChecksListSuitesForRefPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ChecksListSuitesForRefPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ref" }),
        __metadata("design:type", String)
    ], ChecksListSuitesForRefPathParams.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ChecksListSuitesForRefPathParams.prototype, "repo", void 0);
    return ChecksListSuitesForRefPathParams;
}(SpeakeasyBase));
export { ChecksListSuitesForRefPathParams };
var ChecksListSuitesForRefQueryParams = /** @class */ (function (_super) {
    __extends(ChecksListSuitesForRefQueryParams, _super);
    function ChecksListSuitesForRefQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" }),
        __metadata("design:type", Number)
    ], ChecksListSuitesForRefQueryParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=check_name" }),
        __metadata("design:type", String)
    ], ChecksListSuitesForRefQueryParams.prototype, "checkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ChecksListSuitesForRefQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ChecksListSuitesForRefQueryParams.prototype, "perPage", void 0);
    return ChecksListSuitesForRefQueryParams;
}(SpeakeasyBase));
export { ChecksListSuitesForRefQueryParams };
var ChecksListSuitesForRef200ApplicationJson = /** @class */ (function (_super) {
    __extends(ChecksListSuitesForRef200ApplicationJson, _super);
    function ChecksListSuitesForRef200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_suites", elemType: shared.CheckSuite }),
        __metadata("design:type", Array)
    ], ChecksListSuitesForRef200ApplicationJson.prototype, "checkSuites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ChecksListSuitesForRef200ApplicationJson.prototype, "totalCount", void 0);
    return ChecksListSuitesForRef200ApplicationJson;
}(SpeakeasyBase));
export { ChecksListSuitesForRef200ApplicationJson };
var ChecksListSuitesForRefRequest = /** @class */ (function (_super) {
    __extends(ChecksListSuitesForRefRequest, _super);
    function ChecksListSuitesForRefRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksListSuitesForRefPathParams)
    ], ChecksListSuitesForRefRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksListSuitesForRefQueryParams)
    ], ChecksListSuitesForRefRequest.prototype, "queryParams", void 0);
    return ChecksListSuitesForRefRequest;
}(SpeakeasyBase));
export { ChecksListSuitesForRefRequest };
var ChecksListSuitesForRefResponse = /** @class */ (function (_super) {
    __extends(ChecksListSuitesForRefResponse, _super);
    function ChecksListSuitesForRefResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChecksListSuitesForRefResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ChecksListSuitesForRefResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChecksListSuitesForRefResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksListSuitesForRef200ApplicationJson)
    ], ChecksListSuitesForRefResponse.prototype, "checksListSuitesForRef200ApplicationJsonObject", void 0);
    return ChecksListSuitesForRefResponse;
}(SpeakeasyBase));
export { ChecksListSuitesForRefResponse };

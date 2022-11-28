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
var ReposListForOrgPathParams = /** @class */ (function (_super) {
    __extends(ReposListForOrgPathParams, _super);
    function ReposListForOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ReposListForOrgPathParams.prototype, "org", void 0);
    return ReposListForOrgPathParams;
}(SpeakeasyBase));
export { ReposListForOrgPathParams };
export var ReposListForOrgDirectionEnum;
(function (ReposListForOrgDirectionEnum) {
    ReposListForOrgDirectionEnum["Asc"] = "asc";
    ReposListForOrgDirectionEnum["Desc"] = "desc";
})(ReposListForOrgDirectionEnum || (ReposListForOrgDirectionEnum = {}));
export var ReposListForOrgSortEnum;
(function (ReposListForOrgSortEnum) {
    ReposListForOrgSortEnum["Created"] = "created";
    ReposListForOrgSortEnum["Updated"] = "updated";
    ReposListForOrgSortEnum["Pushed"] = "pushed";
    ReposListForOrgSortEnum["FullName"] = "full_name";
})(ReposListForOrgSortEnum || (ReposListForOrgSortEnum = {}));
export var ReposListForOrgTypeEnum;
(function (ReposListForOrgTypeEnum) {
    ReposListForOrgTypeEnum["All"] = "all";
    ReposListForOrgTypeEnum["Public"] = "public";
    ReposListForOrgTypeEnum["Private"] = "private";
    ReposListForOrgTypeEnum["Forks"] = "forks";
    ReposListForOrgTypeEnum["Sources"] = "sources";
    ReposListForOrgTypeEnum["Member"] = "member";
    ReposListForOrgTypeEnum["Internal"] = "internal";
})(ReposListForOrgTypeEnum || (ReposListForOrgTypeEnum = {}));
var ReposListForOrgQueryParams = /** @class */ (function (_super) {
    __extends(ReposListForOrgQueryParams, _super);
    function ReposListForOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], ReposListForOrgQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListForOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListForOrgQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ReposListForOrgQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ReposListForOrgQueryParams.prototype, "type", void 0);
    return ReposListForOrgQueryParams;
}(SpeakeasyBase));
export { ReposListForOrgQueryParams };
var ReposListForOrgRequest = /** @class */ (function (_super) {
    __extends(ReposListForOrgRequest, _super);
    function ReposListForOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListForOrgPathParams)
    ], ReposListForOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListForOrgQueryParams)
    ], ReposListForOrgRequest.prototype, "queryParams", void 0);
    return ReposListForOrgRequest;
}(SpeakeasyBase));
export { ReposListForOrgRequest };
var ReposListForOrgResponse = /** @class */ (function (_super) {
    __extends(ReposListForOrgResponse, _super);
    function ReposListForOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListForOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposListForOrgResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListForOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MinimalRepository }),
        __metadata("design:type", Array)
    ], ReposListForOrgResponse.prototype, "minimalRepositories", void 0);
    return ReposListForOrgResponse;
}(SpeakeasyBase));
export { ReposListForOrgResponse };

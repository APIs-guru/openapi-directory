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
var GroupsGetDatapointsPathParams = /** @class */ (function (_super) {
    __extends(GroupsGetDatapointsPathParams, _super);
    function GroupsGetDatapointsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GroupsGetDatapointsPathParams.prototype, "id", void 0);
    return GroupsGetDatapointsPathParams;
}(SpeakeasyBase));
export { GroupsGetDatapointsPathParams };
export var GroupsGetDatapointsSortDirectionEnum;
(function (GroupsGetDatapointsSortDirectionEnum) {
    GroupsGetDatapointsSortDirectionEnum["Asc"] = "asc";
    GroupsGetDatapointsSortDirectionEnum["Desc"] = "desc";
})(GroupsGetDatapointsSortDirectionEnum || (GroupsGetDatapointsSortDirectionEnum = {}));
export var GroupsGetDatapointsStatusEnum;
(function (GroupsGetDatapointsStatusEnum) {
    GroupsGetDatapointsStatusEnum["Deleted"] = "deleted";
    GroupsGetDatapointsStatusEnum["Active"] = "active";
    GroupsGetDatapointsStatusEnum["Paused"] = "paused";
    GroupsGetDatapointsStatusEnum["Spam"] = "spam";
})(GroupsGetDatapointsStatusEnum || (GroupsGetDatapointsStatusEnum = {}));
export var GroupsGetDatapointsTypeEnum;
(function (GroupsGetDatapointsTypeEnum) {
    GroupsGetDatapointsTypeEnum["Tp"] = "tp";
    GroupsGetDatapointsTypeEnum["Tl"] = "tl";
})(GroupsGetDatapointsTypeEnum || (GroupsGetDatapointsTypeEnum = {}));
var GroupsGetDatapointsQueryParams = /** @class */ (function (_super) {
    __extends(GroupsGetDatapointsQueryParams, _super);
    function GroupsGetDatapointsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GroupsGetDatapointsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GroupsGetDatapointsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyFavorites" }),
        __metadata("design:type", Boolean)
    ], GroupsGetDatapointsQueryParams.prototype, "onlyFavorites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDirection" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsQueryParams.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsQueryParams.prototype, "textSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsQueryParams.prototype, "type", void 0);
    return GroupsGetDatapointsQueryParams;
}(SpeakeasyBase));
export { GroupsGetDatapointsQueryParams };
var GroupsGetDatapointsRequest = /** @class */ (function (_super) {
    __extends(GroupsGetDatapointsRequest, _super);
    function GroupsGetDatapointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetDatapointsPathParams)
    ], GroupsGetDatapointsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetDatapointsQueryParams)
    ], GroupsGetDatapointsRequest.prototype, "queryParams", void 0);
    return GroupsGetDatapointsRequest;
}(SpeakeasyBase));
export { GroupsGetDatapointsRequest };
var GroupsGetDatapointsResponse = /** @class */ (function (_super) {
    __extends(GroupsGetDatapointsResponse, _super);
    function GroupsGetDatapointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64)
    ], GroupsGetDatapointsResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsGetDatapointsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsGetDatapointsResponse.prototype, "statusCode", void 0);
    return GroupsGetDatapointsResponse;
}(SpeakeasyBase));
export { GroupsGetDatapointsResponse };

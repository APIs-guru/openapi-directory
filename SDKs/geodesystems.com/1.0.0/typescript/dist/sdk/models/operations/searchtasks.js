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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var SearchTasksQueryParams = /** @class */ (function (_super) {
    __extends(SearchTasksQueryParams, _super);
    function SearchTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchTasksQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchTasksQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchTasksQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchTasksQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchTasksQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchTasksQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchTasksQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchTasksQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchTasksQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchTasksQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.assignedto" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "searchDbTasksAssignedto", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.complete" }),
        __metadata("design:type", Number)
    ], SearchTasksQueryParams.prototype, "searchDbTasksComplete", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.enddate" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "searchDbTasksEnddate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.priority" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "searchDbTasksPriority", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.startdate" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "searchDbTasksStartdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.status" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "searchDbTasksStatus", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.title" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "searchDbTasksTitle", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchTasksQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchTasksQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchTasksQueryParams.prototype, "todate", void 0);
    return SearchTasksQueryParams;
}(SpeakeasyBase));
export { SearchTasksQueryParams };
var SearchTasksRequest = /** @class */ (function (_super) {
    __extends(SearchTasksRequest, _super);
    function SearchTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchTasksQueryParams)
    ], SearchTasksRequest.prototype, "queryParams", void 0);
    return SearchTasksRequest;
}(SpeakeasyBase));
export { SearchTasksRequest };
var SearchTasksResponse = /** @class */ (function (_super) {
    __extends(SearchTasksResponse, _super);
    function SearchTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchTasksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchTasksResponse.prototype, "statusCode", void 0);
    return SearchTasksResponse;
}(SpeakeasyBase));
export { SearchTasksResponse };

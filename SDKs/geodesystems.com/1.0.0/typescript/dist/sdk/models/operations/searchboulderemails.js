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
var SearchBoulderEmailsQueryParams = /** @class */ (function (_super) {
    __extends(SearchBoulderEmailsQueryParams, _super);
    function SearchBoulderEmailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchBoulderEmailsQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchBoulderEmailsQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchBoulderEmailsQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchBoulderEmailsQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchBoulderEmailsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchBoulderEmailsQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderEmailsQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderEmailsQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderEmailsQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderEmailsQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.email_subject" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "searchDbBoulderEmailsEmailSubject", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.plain_text_body" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "searchDbBoulderEmailsPlainTextBody", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.received_date" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "searchDbBoulderEmailsReceivedDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.sent_cc" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "searchDbBoulderEmailsSentCc", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.sent_from" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "searchDbBoulderEmailsSentFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.sent_to" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "searchDbBoulderEmailsSentTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchBoulderEmailsQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchBoulderEmailsQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchBoulderEmailsQueryParams.prototype, "todate", void 0);
    return SearchBoulderEmailsQueryParams;
}(SpeakeasyBase));
export { SearchBoulderEmailsQueryParams };
var SearchBoulderEmailsRequest = /** @class */ (function (_super) {
    __extends(SearchBoulderEmailsRequest, _super);
    function SearchBoulderEmailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchBoulderEmailsQueryParams)
    ], SearchBoulderEmailsRequest.prototype, "queryParams", void 0);
    return SearchBoulderEmailsRequest;
}(SpeakeasyBase));
export { SearchBoulderEmailsRequest };
var SearchBoulderEmailsResponse = /** @class */ (function (_super) {
    __extends(SearchBoulderEmailsResponse, _super);
    function SearchBoulderEmailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchBoulderEmailsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchBoulderEmailsResponse.prototype, "statusCode", void 0);
    return SearchBoulderEmailsResponse;
}(SpeakeasyBase));
export { SearchBoulderEmailsResponse };

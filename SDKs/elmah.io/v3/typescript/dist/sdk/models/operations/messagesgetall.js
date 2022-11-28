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
var MessagesGetAllPathParams = /** @class */ (function (_super) {
    __extends(MessagesGetAllPathParams, _super);
    function MessagesGetAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" }),
        __metadata("design:type", String)
    ], MessagesGetAllPathParams.prototype, "logId", void 0);
    return MessagesGetAllPathParams;
}(SpeakeasyBase));
export { MessagesGetAllPathParams };
var MessagesGetAllQueryParams = /** @class */ (function (_super) {
    __extends(MessagesGetAllQueryParams, _super);
    function MessagesGetAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], MessagesGetAllQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeHeaders" }),
        __metadata("design:type", Boolean)
    ], MessagesGetAllQueryParams.prototype, "includeHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageIndex" }),
        __metadata("design:type", Number)
    ], MessagesGetAllQueryParams.prototype, "pageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MessagesGetAllQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], MessagesGetAllQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], MessagesGetAllQueryParams.prototype, "to", void 0);
    return MessagesGetAllQueryParams;
}(SpeakeasyBase));
export { MessagesGetAllQueryParams };
var MessagesGetAllRequest = /** @class */ (function (_super) {
    __extends(MessagesGetAllRequest, _super);
    function MessagesGetAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesGetAllPathParams)
    ], MessagesGetAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesGetAllQueryParams)
    ], MessagesGetAllRequest.prototype, "queryParams", void 0);
    return MessagesGetAllRequest;
}(SpeakeasyBase));
export { MessagesGetAllRequest };
var MessagesGetAllResponse = /** @class */ (function (_super) {
    __extends(MessagesGetAllResponse, _super);
    function MessagesGetAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MessagesGetAllResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MessagesGetAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessagesResult)
    ], MessagesGetAllResponse.prototype, "messagesResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MessagesGetAllResponse.prototype, "statusCode", void 0);
    return MessagesGetAllResponse;
}(SpeakeasyBase));
export { MessagesGetAllResponse };

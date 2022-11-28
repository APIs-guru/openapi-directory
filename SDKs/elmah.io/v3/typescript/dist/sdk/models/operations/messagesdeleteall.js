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
var MessagesDeleteAllPathParams = /** @class */ (function (_super) {
    __extends(MessagesDeleteAllPathParams, _super);
    function MessagesDeleteAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" }),
        __metadata("design:type", String)
    ], MessagesDeleteAllPathParams.prototype, "logId", void 0);
    return MessagesDeleteAllPathParams;
}(SpeakeasyBase));
export { MessagesDeleteAllPathParams };
var MessagesDeleteAllRequests = /** @class */ (function (_super) {
    __extends(MessagesDeleteAllRequests, _super);
    function MessagesDeleteAllRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.Search)
    ], MessagesDeleteAllRequests.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Search)
    ], MessagesDeleteAllRequests.prototype, "search1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.Search)
    ], MessagesDeleteAllRequests.prototype, "search2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.Search)
    ], MessagesDeleteAllRequests.prototype, "search3", void 0);
    return MessagesDeleteAllRequests;
}(SpeakeasyBase));
export { MessagesDeleteAllRequests };
var MessagesDeleteAllRequest = /** @class */ (function (_super) {
    __extends(MessagesDeleteAllRequest, _super);
    function MessagesDeleteAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesDeleteAllPathParams)
    ], MessagesDeleteAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesDeleteAllRequests)
    ], MessagesDeleteAllRequest.prototype, "request", void 0);
    return MessagesDeleteAllRequest;
}(SpeakeasyBase));
export { MessagesDeleteAllRequest };
var MessagesDeleteAllResponse = /** @class */ (function (_super) {
    __extends(MessagesDeleteAllResponse, _super);
    function MessagesDeleteAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MessagesDeleteAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MessagesDeleteAllResponse.prototype, "statusCode", void 0);
    return MessagesDeleteAllResponse;
}(SpeakeasyBase));
export { MessagesDeleteAllResponse };

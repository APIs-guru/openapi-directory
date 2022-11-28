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
var MessagesCreateBulkPathParams = /** @class */ (function (_super) {
    __extends(MessagesCreateBulkPathParams, _super);
    function MessagesCreateBulkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" }),
        __metadata("design:type", String)
    ], MessagesCreateBulkPathParams.prototype, "logId", void 0);
    return MessagesCreateBulkPathParams;
}(SpeakeasyBase));
export { MessagesCreateBulkPathParams };
var MessagesCreateBulkRequests = /** @class */ (function (_super) {
    __extends(MessagesCreateBulkRequests, _super);
    function MessagesCreateBulkRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.CreateMessage }),
        __metadata("design:type", Array)
    ], MessagesCreateBulkRequests.prototype, "createMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.CreateMessage }),
        __metadata("design:type", Array)
    ], MessagesCreateBulkRequests.prototype, "createMessages1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.CreateMessage }),
        __metadata("design:type", Array)
    ], MessagesCreateBulkRequests.prototype, "createMessages2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.CreateMessage }),
        __metadata("design:type", Array)
    ], MessagesCreateBulkRequests.prototype, "createMessages3", void 0);
    return MessagesCreateBulkRequests;
}(SpeakeasyBase));
export { MessagesCreateBulkRequests };
var MessagesCreateBulkRequest = /** @class */ (function (_super) {
    __extends(MessagesCreateBulkRequest, _super);
    function MessagesCreateBulkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesCreateBulkPathParams)
    ], MessagesCreateBulkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesCreateBulkRequests)
    ], MessagesCreateBulkRequest.prototype, "request", void 0);
    return MessagesCreateBulkRequest;
}(SpeakeasyBase));
export { MessagesCreateBulkRequest };
var MessagesCreateBulkResponse = /** @class */ (function (_super) {
    __extends(MessagesCreateBulkResponse, _super);
    function MessagesCreateBulkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MessagesCreateBulkResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MessagesCreateBulkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CreateBulkMessageResult }),
        __metadata("design:type", Array)
    ], MessagesCreateBulkResponse.prototype, "createBulkMessageResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MessagesCreateBulkResponse.prototype, "statusCode", void 0);
    return MessagesCreateBulkResponse;
}(SpeakeasyBase));
export { MessagesCreateBulkResponse };

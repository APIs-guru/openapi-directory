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
var GetMessageReactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetMessageReactionsQueryParams, _super);
    function GetMessageReactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetMessageReactionsQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message_id" }),
        __metadata("design:type", Number)
    ], GetMessageReactionsQueryParams.prototype, "messageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetMessageReactionsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", Number)
    ], GetMessageReactionsQueryParams.prototype, "userId", void 0);
    return GetMessageReactionsQueryParams;
}(SpeakeasyBase));
export { GetMessageReactionsQueryParams };
var GetMessageReactionsRequest = /** @class */ (function (_super) {
    __extends(GetMessageReactionsRequest, _super);
    function GetMessageReactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMessageReactionsQueryParams)
    ], GetMessageReactionsRequest.prototype, "queryParams", void 0);
    return GetMessageReactionsRequest;
}(SpeakeasyBase));
export { GetMessageReactionsRequest };
var GetMessageReactionsResponse = /** @class */ (function (_super) {
    __extends(GetMessageReactionsResponse, _super);
    function GetMessageReactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMessageReactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MessageReactionEntity }),
        __metadata("design:type", Array)
    ], GetMessageReactionsResponse.prototype, "messageReactionEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMessageReactionsResponse.prototype, "statusCode", void 0);
    return GetMessageReactionsResponse;
}(SpeakeasyBase));
export { GetMessageReactionsResponse };

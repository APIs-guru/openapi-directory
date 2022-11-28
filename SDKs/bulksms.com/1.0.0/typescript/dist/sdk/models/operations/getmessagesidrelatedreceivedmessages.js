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
var GetMessagesIdRelatedReceivedMessagesPathParams = /** @class */ (function (_super) {
    __extends(GetMessagesIdRelatedReceivedMessagesPathParams, _super);
    function GetMessagesIdRelatedReceivedMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetMessagesIdRelatedReceivedMessagesPathParams.prototype, "id", void 0);
    return GetMessagesIdRelatedReceivedMessagesPathParams;
}(SpeakeasyBase));
export { GetMessagesIdRelatedReceivedMessagesPathParams };
var GetMessagesIdRelatedReceivedMessagesSecurity = /** @class */ (function (_super) {
    __extends(GetMessagesIdRelatedReceivedMessagesSecurity, _super);
    function GetMessagesIdRelatedReceivedMessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetMessagesIdRelatedReceivedMessagesSecurity.prototype, "basicAuth", void 0);
    return GetMessagesIdRelatedReceivedMessagesSecurity;
}(SpeakeasyBase));
export { GetMessagesIdRelatedReceivedMessagesSecurity };
var GetMessagesIdRelatedReceivedMessagesRequest = /** @class */ (function (_super) {
    __extends(GetMessagesIdRelatedReceivedMessagesRequest, _super);
    function GetMessagesIdRelatedReceivedMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMessagesIdRelatedReceivedMessagesPathParams)
    ], GetMessagesIdRelatedReceivedMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMessagesIdRelatedReceivedMessagesSecurity)
    ], GetMessagesIdRelatedReceivedMessagesRequest.prototype, "security", void 0);
    return GetMessagesIdRelatedReceivedMessagesRequest;
}(SpeakeasyBase));
export { GetMessagesIdRelatedReceivedMessagesRequest };
var GetMessagesIdRelatedReceivedMessagesResponse = /** @class */ (function (_super) {
    __extends(GetMessagesIdRelatedReceivedMessagesResponse, _super);
    function GetMessagesIdRelatedReceivedMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMessagesIdRelatedReceivedMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetMessagesIdRelatedReceivedMessagesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Message }),
        __metadata("design:type", Array)
    ], GetMessagesIdRelatedReceivedMessagesResponse.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMessagesIdRelatedReceivedMessagesResponse.prototype, "statusCode", void 0);
    return GetMessagesIdRelatedReceivedMessagesResponse;
}(SpeakeasyBase));
export { GetMessagesIdRelatedReceivedMessagesResponse };

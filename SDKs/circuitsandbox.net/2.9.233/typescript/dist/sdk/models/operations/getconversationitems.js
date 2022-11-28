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
var GetConversationItemsPathParams = /** @class */ (function (_super) {
    __extends(GetConversationItemsPathParams, _super);
    function GetConversationItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], GetConversationItemsPathParams.prototype, "convId", void 0);
    return GetConversationItemsPathParams;
}(SpeakeasyBase));
export { GetConversationItemsPathParams };
export var GetConversationItemsDirectionEnum;
(function (GetConversationItemsDirectionEnum) {
    GetConversationItemsDirectionEnum["Before"] = "BEFORE";
    GetConversationItemsDirectionEnum["After"] = "AFTER";
})(GetConversationItemsDirectionEnum || (GetConversationItemsDirectionEnum = {}));
var GetConversationItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetConversationItemsQueryParams, _super);
    function GetConversationItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetConversationItemsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modTime" }),
        __metadata("design:type", Date)
    ], GetConversationItemsQueryParams.prototype, "modTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results" }),
        __metadata("design:type", Number)
    ], GetConversationItemsQueryParams.prototype, "results", void 0);
    return GetConversationItemsQueryParams;
}(SpeakeasyBase));
export { GetConversationItemsQueryParams };
var GetConversationItemsSecurity = /** @class */ (function (_super) {
    __extends(GetConversationItemsSecurity, _super);
    function GetConversationItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetConversationItemsSecurity.prototype, "oauth", void 0);
    return GetConversationItemsSecurity;
}(SpeakeasyBase));
export { GetConversationItemsSecurity };
var GetConversationItemsRequest = /** @class */ (function (_super) {
    __extends(GetConversationItemsRequest, _super);
    function GetConversationItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationItemsPathParams)
    ], GetConversationItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationItemsQueryParams)
    ], GetConversationItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationItemsSecurity)
    ], GetConversationItemsRequest.prototype, "security", void 0);
    return GetConversationItemsRequest;
}(SpeakeasyBase));
export { GetConversationItemsRequest };
var GetConversationItemsResponse = /** @class */ (function (_super) {
    __extends(GetConversationItemsResponse, _super);
    function GetConversationItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetConversationItemsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConversationItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetConversationItemsResponse.prototype, "conversationItems", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConversationItemsResponse.prototype, "statusCode", void 0);
    return GetConversationItemsResponse;
}(SpeakeasyBase));
export { GetConversationItemsResponse };

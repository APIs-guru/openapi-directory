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
export var GetMessagesSortOrderEnum;
(function (GetMessagesSortOrderEnum) {
    GetMessagesSortOrderEnum["Ascending"] = "ASCENDING";
})(GetMessagesSortOrderEnum || (GetMessagesSortOrderEnum = {}));
var GetMessagesQueryParams = /** @class */ (function (_super) {
    __extends(GetMessagesQueryParams, _super);
    function GetMessagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetMessagesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetMessagesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetMessagesQueryParams.prototype, "sortOrder", void 0);
    return GetMessagesQueryParams;
}(SpeakeasyBase));
export { GetMessagesQueryParams };
var GetMessagesSecurity = /** @class */ (function (_super) {
    __extends(GetMessagesSecurity, _super);
    function GetMessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetMessagesSecurity.prototype, "basicAuth", void 0);
    return GetMessagesSecurity;
}(SpeakeasyBase));
export { GetMessagesSecurity };
var GetMessagesRequest = /** @class */ (function (_super) {
    __extends(GetMessagesRequest, _super);
    function GetMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMessagesQueryParams)
    ], GetMessagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMessagesSecurity)
    ], GetMessagesRequest.prototype, "security", void 0);
    return GetMessagesRequest;
}(SpeakeasyBase));
export { GetMessagesRequest };
var GetMessagesResponse = /** @class */ (function (_super) {
    __extends(GetMessagesResponse, _super);
    function GetMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetMessagesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Message }),
        __metadata("design:type", Array)
    ], GetMessagesResponse.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMessagesResponse.prototype, "statusCode", void 0);
    return GetMessagesResponse;
}(SpeakeasyBase));
export { GetMessagesResponse };

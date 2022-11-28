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
var GetConversationsByLabelPathParams = /** @class */ (function (_super) {
    __extends(GetConversationsByLabelPathParams, _super);
    function GetConversationsByLabelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=labelId" }),
        __metadata("design:type", String)
    ], GetConversationsByLabelPathParams.prototype, "labelId", void 0);
    return GetConversationsByLabelPathParams;
}(SpeakeasyBase));
export { GetConversationsByLabelPathParams };
var GetConversationsByLabelQueryParams = /** @class */ (function (_super) {
    __extends(GetConversationsByLabelQueryParams, _super);
    function GetConversationsByLabelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextPagePointer" }),
        __metadata("design:type", String)
    ], GetConversationsByLabelQueryParams.prototype, "nextPagePointer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetConversationsByLabelQueryParams.prototype, "pageSize", void 0);
    return GetConversationsByLabelQueryParams;
}(SpeakeasyBase));
export { GetConversationsByLabelQueryParams };
var GetConversationsByLabelSecurity = /** @class */ (function (_super) {
    __extends(GetConversationsByLabelSecurity, _super);
    function GetConversationsByLabelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetConversationsByLabelSecurity.prototype, "oauth", void 0);
    return GetConversationsByLabelSecurity;
}(SpeakeasyBase));
export { GetConversationsByLabelSecurity };
var GetConversationsByLabelRequest = /** @class */ (function (_super) {
    __extends(GetConversationsByLabelRequest, _super);
    function GetConversationsByLabelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationsByLabelPathParams)
    ], GetConversationsByLabelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationsByLabelQueryParams)
    ], GetConversationsByLabelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationsByLabelSecurity)
    ], GetConversationsByLabelRequest.prototype, "security", void 0);
    return GetConversationsByLabelRequest;
}(SpeakeasyBase));
export { GetConversationsByLabelRequest };
var GetConversationsByLabelResponse = /** @class */ (function (_super) {
    __extends(GetConversationsByLabelResponse, _super);
    function GetConversationsByLabelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetConversationsByLabelResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConversationsByLabelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConversationsByLabelResponse.prototype, "conversationsPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConversationsByLabelResponse.prototype, "statusCode", void 0);
    return GetConversationsByLabelResponse;
}(SpeakeasyBase));
export { GetConversationsByLabelResponse };

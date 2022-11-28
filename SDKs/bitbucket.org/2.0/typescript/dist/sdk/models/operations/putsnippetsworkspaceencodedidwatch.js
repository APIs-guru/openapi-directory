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
var PutSnippetsWorkspaceEncodedIdWatchPathParams = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdWatchPathParams, _super);
    function PutSnippetsWorkspaceEncodedIdWatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" }),
        __metadata("design:type", String)
    ], PutSnippetsWorkspaceEncodedIdWatchPathParams.prototype, "encodedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PutSnippetsWorkspaceEncodedIdWatchPathParams.prototype, "workspace", void 0);
    return PutSnippetsWorkspaceEncodedIdWatchPathParams;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdWatchPathParams };
var PutSnippetsWorkspaceEncodedIdWatchSecurity = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdWatchSecurity, _super);
    function PutSnippetsWorkspaceEncodedIdWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutSnippetsWorkspaceEncodedIdWatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PutSnippetsWorkspaceEncodedIdWatchSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PutSnippetsWorkspaceEncodedIdWatchSecurity.prototype, "apiKey", void 0);
    return PutSnippetsWorkspaceEncodedIdWatchSecurity;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdWatchSecurity };
var PutSnippetsWorkspaceEncodedIdWatchRequest = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdWatchRequest, _super);
    function PutSnippetsWorkspaceEncodedIdWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSnippetsWorkspaceEncodedIdWatchPathParams)
    ], PutSnippetsWorkspaceEncodedIdWatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSnippetsWorkspaceEncodedIdWatchSecurity)
    ], PutSnippetsWorkspaceEncodedIdWatchRequest.prototype, "security", void 0);
    return PutSnippetsWorkspaceEncodedIdWatchRequest;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdWatchRequest };
var PutSnippetsWorkspaceEncodedIdWatchResponse = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdWatchResponse, _super);
    function PutSnippetsWorkspaceEncodedIdWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSnippetsWorkspaceEncodedIdWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSnippetsWorkspaceEncodedIdWatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutSnippetsWorkspaceEncodedIdWatchResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedUsers)
    ], PutSnippetsWorkspaceEncodedIdWatchResponse.prototype, "paginatedUsers", void 0);
    return PutSnippetsWorkspaceEncodedIdWatchResponse;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdWatchResponse };

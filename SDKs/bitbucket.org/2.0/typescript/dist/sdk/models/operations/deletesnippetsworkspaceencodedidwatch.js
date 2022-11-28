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
var DeleteSnippetsWorkspaceEncodedIdWatchPathParams = /** @class */ (function (_super) {
    __extends(DeleteSnippetsWorkspaceEncodedIdWatchPathParams, _super);
    function DeleteSnippetsWorkspaceEncodedIdWatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" }),
        __metadata("design:type", String)
    ], DeleteSnippetsWorkspaceEncodedIdWatchPathParams.prototype, "encodedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], DeleteSnippetsWorkspaceEncodedIdWatchPathParams.prototype, "workspace", void 0);
    return DeleteSnippetsWorkspaceEncodedIdWatchPathParams;
}(SpeakeasyBase));
export { DeleteSnippetsWorkspaceEncodedIdWatchPathParams };
var DeleteSnippetsWorkspaceEncodedIdWatchSecurity = /** @class */ (function (_super) {
    __extends(DeleteSnippetsWorkspaceEncodedIdWatchSecurity, _super);
    function DeleteSnippetsWorkspaceEncodedIdWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteSnippetsWorkspaceEncodedIdWatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], DeleteSnippetsWorkspaceEncodedIdWatchSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DeleteSnippetsWorkspaceEncodedIdWatchSecurity.prototype, "apiKey", void 0);
    return DeleteSnippetsWorkspaceEncodedIdWatchSecurity;
}(SpeakeasyBase));
export { DeleteSnippetsWorkspaceEncodedIdWatchSecurity };
var DeleteSnippetsWorkspaceEncodedIdWatchRequest = /** @class */ (function (_super) {
    __extends(DeleteSnippetsWorkspaceEncodedIdWatchRequest, _super);
    function DeleteSnippetsWorkspaceEncodedIdWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSnippetsWorkspaceEncodedIdWatchPathParams)
    ], DeleteSnippetsWorkspaceEncodedIdWatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSnippetsWorkspaceEncodedIdWatchSecurity)
    ], DeleteSnippetsWorkspaceEncodedIdWatchRequest.prototype, "security", void 0);
    return DeleteSnippetsWorkspaceEncodedIdWatchRequest;
}(SpeakeasyBase));
export { DeleteSnippetsWorkspaceEncodedIdWatchRequest };
var DeleteSnippetsWorkspaceEncodedIdWatchResponse = /** @class */ (function (_super) {
    __extends(DeleteSnippetsWorkspaceEncodedIdWatchResponse, _super);
    function DeleteSnippetsWorkspaceEncodedIdWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSnippetsWorkspaceEncodedIdWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSnippetsWorkspaceEncodedIdWatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteSnippetsWorkspaceEncodedIdWatchResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedUsers)
    ], DeleteSnippetsWorkspaceEncodedIdWatchResponse.prototype, "paginatedUsers", void 0);
    return DeleteSnippetsWorkspaceEncodedIdWatchResponse;
}(SpeakeasyBase));
export { DeleteSnippetsWorkspaceEncodedIdWatchResponse };

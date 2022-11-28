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
var GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams, _super);
    function GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams.prototype, "encodedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revision" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams.prototype, "workspace", void 0);
    return GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams };
var GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity, _super);
    function GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity.prototype, "apiKey", void 0);
    return GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity };
var GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest, _super);
    function GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest.prototype, "security", void 0);
    return GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest };
var GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse, _super);
    function GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse.prototype, "snippetCommit", void 0);
    return GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse };

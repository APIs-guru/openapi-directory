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
var GetSnippetsWorkspaceEncodedIdNodeIdPathParams = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdNodeIdPathParams, _super);
    function GetSnippetsWorkspaceEncodedIdNodeIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdNodeIdPathParams.prototype, "encodedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdNodeIdPathParams.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdNodeIdPathParams.prototype, "workspace", void 0);
    return GetSnippetsWorkspaceEncodedIdNodeIdPathParams;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdNodeIdPathParams };
var GetSnippetsWorkspaceEncodedIdNodeIdSecurity = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdNodeIdSecurity, _super);
    function GetSnippetsWorkspaceEncodedIdNodeIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetSnippetsWorkspaceEncodedIdNodeIdSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetSnippetsWorkspaceEncodedIdNodeIdSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetSnippetsWorkspaceEncodedIdNodeIdSecurity.prototype, "apiKey", void 0);
    return GetSnippetsWorkspaceEncodedIdNodeIdSecurity;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdNodeIdSecurity };
var GetSnippetsWorkspaceEncodedIdNodeIdRequest = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdNodeIdRequest, _super);
    function GetSnippetsWorkspaceEncodedIdNodeIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsWorkspaceEncodedIdNodeIdPathParams)
    ], GetSnippetsWorkspaceEncodedIdNodeIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsWorkspaceEncodedIdNodeIdSecurity)
    ], GetSnippetsWorkspaceEncodedIdNodeIdRequest.prototype, "security", void 0);
    return GetSnippetsWorkspaceEncodedIdNodeIdRequest;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdNodeIdRequest };
var GetSnippetsWorkspaceEncodedIdNodeIdResponse = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdNodeIdResponse, _super);
    function GetSnippetsWorkspaceEncodedIdNodeIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSnippetsWorkspaceEncodedIdNodeIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdNodeIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSnippetsWorkspaceEncodedIdNodeIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSnippetsWorkspaceEncodedIdNodeIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSnippetsWorkspaceEncodedIdNodeIdResponse.prototype, "snippet", void 0);
    return GetSnippetsWorkspaceEncodedIdNodeIdResponse;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdNodeIdResponse };

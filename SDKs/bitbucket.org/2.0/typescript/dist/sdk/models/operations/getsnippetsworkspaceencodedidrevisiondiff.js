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
var GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams, _super);
    function GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams.prototype, "encodedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revision" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams.prototype, "workspace", void 0);
    return GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams };
var GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams, _super);
    function GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams.prototype, "path", void 0);
    return GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams };
var GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity, _super);
    function GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity.prototype, "apiKey", void 0);
    return GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity };
var GetSnippetsWorkspaceEncodedIdRevisionDiffRequest = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdRevisionDiffRequest, _super);
    function GetSnippetsWorkspaceEncodedIdRevisionDiffRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffRequest.prototype, "security", void 0);
    return GetSnippetsWorkspaceEncodedIdRevisionDiffRequest;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdRevisionDiffRequest };
var GetSnippetsWorkspaceEncodedIdRevisionDiffResponse = /** @class */ (function (_super) {
    __extends(GetSnippetsWorkspaceEncodedIdRevisionDiffResponse, _super);
    function GetSnippetsWorkspaceEncodedIdRevisionDiffResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSnippetsWorkspaceEncodedIdRevisionDiffResponse.prototype, "error", void 0);
    return GetSnippetsWorkspaceEncodedIdRevisionDiffResponse;
}(SpeakeasyBase));
export { GetSnippetsWorkspaceEncodedIdRevisionDiffResponse };

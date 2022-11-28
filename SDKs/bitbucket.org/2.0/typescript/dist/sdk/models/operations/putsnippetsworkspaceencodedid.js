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
var PutSnippetsWorkspaceEncodedIdPathParams = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdPathParams, _super);
    function PutSnippetsWorkspaceEncodedIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" }),
        __metadata("design:type", String)
    ], PutSnippetsWorkspaceEncodedIdPathParams.prototype, "encodedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PutSnippetsWorkspaceEncodedIdPathParams.prototype, "workspace", void 0);
    return PutSnippetsWorkspaceEncodedIdPathParams;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdPathParams };
var PutSnippetsWorkspaceEncodedIdSecurity = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdSecurity, _super);
    function PutSnippetsWorkspaceEncodedIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutSnippetsWorkspaceEncodedIdSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PutSnippetsWorkspaceEncodedIdSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PutSnippetsWorkspaceEncodedIdSecurity.prototype, "apiKey", void 0);
    return PutSnippetsWorkspaceEncodedIdSecurity;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdSecurity };
var PutSnippetsWorkspaceEncodedIdRequest = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdRequest, _super);
    function PutSnippetsWorkspaceEncodedIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSnippetsWorkspaceEncodedIdPathParams)
    ], PutSnippetsWorkspaceEncodedIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSnippetsWorkspaceEncodedIdSecurity)
    ], PutSnippetsWorkspaceEncodedIdRequest.prototype, "security", void 0);
    return PutSnippetsWorkspaceEncodedIdRequest;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdRequest };
var PutSnippetsWorkspaceEncodedIdResponse = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdResponse, _super);
    function PutSnippetsWorkspaceEncodedIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutSnippetsWorkspaceEncodedIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSnippetsWorkspaceEncodedIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSnippetsWorkspaceEncodedIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutSnippetsWorkspaceEncodedIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutSnippetsWorkspaceEncodedIdResponse.prototype, "snippet", void 0);
    return PutSnippetsWorkspaceEncodedIdResponse;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdResponse };

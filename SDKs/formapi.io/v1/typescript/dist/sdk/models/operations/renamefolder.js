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
var RenameFolderPathParams = /** @class */ (function (_super) {
    __extends(RenameFolderPathParams, _super);
    function RenameFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folder_id" }),
        __metadata("design:type", String)
    ], RenameFolderPathParams.prototype, "folderId", void 0);
    return RenameFolderPathParams;
}(SpeakeasyBase));
export { RenameFolderPathParams };
var RenameFolderRenameFolderData = /** @class */ (function (_super) {
    __extends(RenameFolderRenameFolderData, _super);
    function RenameFolderRenameFolderData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RenameFolderRenameFolderData.prototype, "name", void 0);
    return RenameFolderRenameFolderData;
}(SpeakeasyBase));
export { RenameFolderRenameFolderData };
var RenameFolderSecurity = /** @class */ (function (_super) {
    __extends(RenameFolderSecurity, _super);
    function RenameFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], RenameFolderSecurity.prototype, "apiTokenBasic", void 0);
    return RenameFolderSecurity;
}(SpeakeasyBase));
export { RenameFolderSecurity };
var RenameFolderRequest = /** @class */ (function (_super) {
    __extends(RenameFolderRequest, _super);
    function RenameFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RenameFolderPathParams)
    ], RenameFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RenameFolderRenameFolderData)
    ], RenameFolderRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RenameFolderSecurity)
    ], RenameFolderRequest.prototype, "security", void 0);
    return RenameFolderRequest;
}(SpeakeasyBase));
export { RenameFolderRequest };
var RenameFolderResponse = /** @class */ (function (_super) {
    __extends(RenameFolderResponse, _super);
    function RenameFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RenameFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RenameFolderResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], RenameFolderResponse.prototype, "authenticationError", void 0);
    return RenameFolderResponse;
}(SpeakeasyBase));
export { RenameFolderResponse };

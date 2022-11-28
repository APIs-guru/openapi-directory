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
var MoveFolderToFolderPathParams = /** @class */ (function (_super) {
    __extends(MoveFolderToFolderPathParams, _super);
    function MoveFolderToFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folder_id" }),
        __metadata("design:type", String)
    ], MoveFolderToFolderPathParams.prototype, "folderId", void 0);
    return MoveFolderToFolderPathParams;
}(SpeakeasyBase));
export { MoveFolderToFolderPathParams };
var MoveFolderToFolderMoveFolderData = /** @class */ (function (_super) {
    __extends(MoveFolderToFolderMoveFolderData, _super);
    function MoveFolderToFolderMoveFolderData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], MoveFolderToFolderMoveFolderData.prototype, "parentFolderId", void 0);
    return MoveFolderToFolderMoveFolderData;
}(SpeakeasyBase));
export { MoveFolderToFolderMoveFolderData };
var MoveFolderToFolderSecurity = /** @class */ (function (_super) {
    __extends(MoveFolderToFolderSecurity, _super);
    function MoveFolderToFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], MoveFolderToFolderSecurity.prototype, "apiTokenBasic", void 0);
    return MoveFolderToFolderSecurity;
}(SpeakeasyBase));
export { MoveFolderToFolderSecurity };
var MoveFolderToFolderFolder = /** @class */ (function (_super) {
    __extends(MoveFolderToFolderFolder, _super);
    function MoveFolderToFolderFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MoveFolderToFolderFolder.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MoveFolderToFolderFolder.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], MoveFolderToFolderFolder.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], MoveFolderToFolderFolder.prototype, "path", void 0);
    return MoveFolderToFolderFolder;
}(SpeakeasyBase));
export { MoveFolderToFolderFolder };
var MoveFolderToFolderRequest = /** @class */ (function (_super) {
    __extends(MoveFolderToFolderRequest, _super);
    function MoveFolderToFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MoveFolderToFolderPathParams)
    ], MoveFolderToFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MoveFolderToFolderMoveFolderData)
    ], MoveFolderToFolderRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MoveFolderToFolderSecurity)
    ], MoveFolderToFolderRequest.prototype, "security", void 0);
    return MoveFolderToFolderRequest;
}(SpeakeasyBase));
export { MoveFolderToFolderRequest };
var MoveFolderToFolderResponse = /** @class */ (function (_super) {
    __extends(MoveFolderToFolderResponse, _super);
    function MoveFolderToFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MoveFolderToFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MoveFolderToFolderResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], MoveFolderToFolderResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], MoveFolderToFolderResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MoveFolderToFolderFolder)
    ], MoveFolderToFolderResponse.prototype, "folder", void 0);
    return MoveFolderToFolderResponse;
}(SpeakeasyBase));
export { MoveFolderToFolderResponse };

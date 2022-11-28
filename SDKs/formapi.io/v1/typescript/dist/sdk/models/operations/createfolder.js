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
var CreateFolderCreateFolderDataFolder = /** @class */ (function (_super) {
    __extends(CreateFolderCreateFolderDataFolder, _super);
    function CreateFolderCreateFolderDataFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateFolderCreateFolderDataFolder.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], CreateFolderCreateFolderDataFolder.prototype, "parentFolderId", void 0);
    return CreateFolderCreateFolderDataFolder;
}(SpeakeasyBase));
export { CreateFolderCreateFolderDataFolder };
var CreateFolderCreateFolderData = /** @class */ (function (_super) {
    __extends(CreateFolderCreateFolderData, _super);
    function CreateFolderCreateFolderData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folder" }),
        __metadata("design:type", CreateFolderCreateFolderDataFolder)
    ], CreateFolderCreateFolderData.prototype, "folder", void 0);
    return CreateFolderCreateFolderData;
}(SpeakeasyBase));
export { CreateFolderCreateFolderData };
var CreateFolderSecurity = /** @class */ (function (_super) {
    __extends(CreateFolderSecurity, _super);
    function CreateFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], CreateFolderSecurity.prototype, "apiTokenBasic", void 0);
    return CreateFolderSecurity;
}(SpeakeasyBase));
export { CreateFolderSecurity };
var CreateFolderFolder = /** @class */ (function (_super) {
    __extends(CreateFolderFolder, _super);
    function CreateFolderFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateFolderFolder.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateFolderFolder.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], CreateFolderFolder.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], CreateFolderFolder.prototype, "path", void 0);
    return CreateFolderFolder;
}(SpeakeasyBase));
export { CreateFolderFolder };
var CreateFolderRequest = /** @class */ (function (_super) {
    __extends(CreateFolderRequest, _super);
    function CreateFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFolderCreateFolderData)
    ], CreateFolderRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFolderSecurity)
    ], CreateFolderRequest.prototype, "security", void 0);
    return CreateFolderRequest;
}(SpeakeasyBase));
export { CreateFolderRequest };
var CreateFolderResponse = /** @class */ (function (_super) {
    __extends(CreateFolderResponse, _super);
    function CreateFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFolderResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], CreateFolderResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CreateFolderResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFolderFolder)
    ], CreateFolderResponse.prototype, "folder", void 0);
    return CreateFolderResponse;
}(SpeakeasyBase));
export { CreateFolderResponse };

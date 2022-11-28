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
var DeleteFolderPathParams = /** @class */ (function (_super) {
    __extends(DeleteFolderPathParams, _super);
    function DeleteFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folder_id" }),
        __metadata("design:type", String)
    ], DeleteFolderPathParams.prototype, "folderId", void 0);
    return DeleteFolderPathParams;
}(SpeakeasyBase));
export { DeleteFolderPathParams };
var DeleteFolderSecurity = /** @class */ (function (_super) {
    __extends(DeleteFolderSecurity, _super);
    function DeleteFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], DeleteFolderSecurity.prototype, "apiTokenBasic", void 0);
    return DeleteFolderSecurity;
}(SpeakeasyBase));
export { DeleteFolderSecurity };
var DeleteFolderFolder = /** @class */ (function (_super) {
    __extends(DeleteFolderFolder, _super);
    function DeleteFolderFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeleteFolderFolder.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeleteFolderFolder.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], DeleteFolderFolder.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], DeleteFolderFolder.prototype, "path", void 0);
    return DeleteFolderFolder;
}(SpeakeasyBase));
export { DeleteFolderFolder };
var DeleteFolderRequest = /** @class */ (function (_super) {
    __extends(DeleteFolderRequest, _super);
    function DeleteFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFolderPathParams)
    ], DeleteFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFolderSecurity)
    ], DeleteFolderRequest.prototype, "security", void 0);
    return DeleteFolderRequest;
}(SpeakeasyBase));
export { DeleteFolderRequest };
var DeleteFolderResponse = /** @class */ (function (_super) {
    __extends(DeleteFolderResponse, _super);
    function DeleteFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteFolderResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], DeleteFolderResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], DeleteFolderResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFolderFolder)
    ], DeleteFolderResponse.prototype, "folder", void 0);
    return DeleteFolderResponse;
}(SpeakeasyBase));
export { DeleteFolderResponse };

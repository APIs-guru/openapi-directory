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
// CreateActiveDirectoryConfigRequest
/**
 * Request model for creating an Active Directory configuration
**/
var CreateActiveDirectoryConfigRequest = /** @class */ (function (_super) {
    __extends(CreateActiveDirectoryConfigRequest, _super);
    function CreateActiveDirectoryConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adExportGroup" }),
        __metadata("design:type", String)
    ], CreateActiveDirectoryConfigRequest.prototype, "adExportGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], CreateActiveDirectoryConfigRequest.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createHomeFolder" }),
        __metadata("design:type", Boolean)
    ], CreateActiveDirectoryConfigRequest.prototype, "createHomeFolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeFolderParent" }),
        __metadata("design:type", Number)
    ], CreateActiveDirectoryConfigRequest.prototype, "homeFolderParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldapUsersDomain" }),
        __metadata("design:type", String)
    ], CreateActiveDirectoryConfigRequest.prototype, "ldapUsersDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sdsImportGroup" }),
        __metadata("design:type", Number)
    ], CreateActiveDirectoryConfigRequest.prototype, "sdsImportGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverAdminName" }),
        __metadata("design:type", String)
    ], CreateActiveDirectoryConfigRequest.prototype, "serverAdminName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverAdminPassword" }),
        __metadata("design:type", String)
    ], CreateActiveDirectoryConfigRequest.prototype, "serverAdminPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverIp" }),
        __metadata("design:type", String)
    ], CreateActiveDirectoryConfigRequest.prototype, "serverIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverPort" }),
        __metadata("design:type", Number)
    ], CreateActiveDirectoryConfigRequest.prototype, "serverPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslFingerPrint" }),
        __metadata("design:type", String)
    ], CreateActiveDirectoryConfigRequest.prototype, "sslFingerPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useLdaps" }),
        __metadata("design:type", Boolean)
    ], CreateActiveDirectoryConfigRequest.prototype, "useLdaps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userFilter" }),
        __metadata("design:type", String)
    ], CreateActiveDirectoryConfigRequest.prototype, "userFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userImport" }),
        __metadata("design:type", Boolean)
    ], CreateActiveDirectoryConfigRequest.prototype, "userImport", void 0);
    return CreateActiveDirectoryConfigRequest;
}(SpeakeasyBase));
export { CreateActiveDirectoryConfigRequest };

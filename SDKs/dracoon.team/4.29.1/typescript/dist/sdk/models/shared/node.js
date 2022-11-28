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
import { UserInfo } from "./userinfo";
import { EncryptionInfo } from "./encryptioninfo";
import { NodePermissions } from "./nodepermissions";
export var NodeTypeEnum;
(function (NodeTypeEnum) {
    NodeTypeEnum["Room"] = "room";
    NodeTypeEnum["Folder"] = "folder";
    NodeTypeEnum["File"] = "file";
})(NodeTypeEnum || (NodeTypeEnum = {}));
// Node
/**
 * Node information (Node can be a room, folder or file)
**/
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authParentId" }),
        __metadata("design:type", Number)
    ], Node.prototype, "authParentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branchVersion" }),
        __metadata("design:type", Number)
    ], Node.prototype, "branchVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=children", elemType: Node }),
        __metadata("design:type", Array)
    ], Node.prototype, "children", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", Number)
    ], Node.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntAdmins" }),
        __metadata("design:type", Number)
    ], Node.prototype, "cntAdmins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntChildren" }),
        __metadata("design:type", Number)
    ], Node.prototype, "cntChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntComments" }),
        __metadata("design:type", Number)
    ], Node.prototype, "cntComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntDeletedVersions" }),
        __metadata("design:type", Number)
    ], Node.prototype, "cntDeletedVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntDownloadShares" }),
        __metadata("design:type", Number)
    ], Node.prototype, "cntDownloadShares", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntFiles" }),
        __metadata("design:type", Number)
    ], Node.prototype, "cntFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntFolders" }),
        __metadata("design:type", Number)
    ], Node.prototype, "cntFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntRooms" }),
        __metadata("design:type", Number)
    ], Node.prototype, "cntRooms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntUploadShares" }),
        __metadata("design:type", Number)
    ], Node.prototype, "cntUploadShares", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntUsers" }),
        __metadata("design:type", Number)
    ], Node.prototype, "cntUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Node.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", UserInfo)
    ], Node.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionInfo" }),
        __metadata("design:type", EncryptionInfo)
    ], Node.prototype, "encryptionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireAt" }),
        __metadata("design:type", Date)
    ], Node.prototype, "expireAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileType" }),
        __metadata("design:type", String)
    ], Node.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasActivitiesLog" }),
        __metadata("design:type", Boolean)
    ], Node.prototype, "hasActivitiesLog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasRecycleBin" }),
        __metadata("design:type", Boolean)
    ], Node.prototype, "hasRecycleBin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], Node.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Node.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inheritPermissions" }),
        __metadata("design:type", Boolean)
    ], Node.prototype, "inheritPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isBrowsable" }),
        __metadata("design:type", Boolean)
    ], Node.prototype, "isBrowsable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEncrypted" }),
        __metadata("design:type", Boolean)
    ], Node.prototype, "isEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFavorite" }),
        __metadata("design:type", Boolean)
    ], Node.prototype, "isFavorite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaToken" }),
        __metadata("design:type", String)
    ], Node.prototype, "mediaToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaType" }),
        __metadata("design:type", String)
    ], Node.prototype, "mediaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Node.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], Node.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentId" }),
        __metadata("design:type", Number)
    ], Node.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentPath" }),
        __metadata("design:type", String)
    ], Node.prototype, "parentPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", NodePermissions)
    ], Node.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quota" }),
        __metadata("design:type", Number)
    ], Node.prototype, "quota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recycleBinRetentionPeriod" }),
        __metadata("design:type", Number)
    ], Node.prototype, "recycleBinRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], Node.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampCreation" }),
        __metadata("design:type", Date)
    ], Node.prototype, "timestampCreation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampModification" }),
        __metadata("design:type", Date)
    ], Node.prototype, "timestampModification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Node.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Node.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", UserInfo)
    ], Node.prototype, "updatedBy", void 0);
    return Node;
}(SpeakeasyBase));
export { Node };

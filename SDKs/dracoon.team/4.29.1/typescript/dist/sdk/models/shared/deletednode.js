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
export var DeletedNodeTypeEnum;
(function (DeletedNodeTypeEnum) {
    DeletedNodeTypeEnum["Folder"] = "folder";
    DeletedNodeTypeEnum["File"] = "file";
})(DeletedNodeTypeEnum || (DeletedNodeTypeEnum = {}));
// DeletedNode
/**
 * Deleted node information (Deleted node can be a folder or file)
**/
var DeletedNode = /** @class */ (function (_super) {
    __extends(DeletedNode, _super);
    function DeletedNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessedAt" }),
        __metadata("design:type", Date)
    ], DeletedNode.prototype, "accessedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", Number)
    ], DeletedNode.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], DeletedNode.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", UserInfo)
    ], DeletedNode.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletedAt" }),
        __metadata("design:type", Date)
    ], DeletedNode.prototype, "deletedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletedBy" }),
        __metadata("design:type", UserInfo)
    ], DeletedNode.prototype, "deletedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireAt" }),
        __metadata("design:type", Date)
    ], DeletedNode.prototype, "expireAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DeletedNode.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEncrypted" }),
        __metadata("design:type", Boolean)
    ], DeletedNode.prototype, "isEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeletedNode.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], DeletedNode.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentId" }),
        __metadata("design:type", Number)
    ], DeletedNode.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentPath" }),
        __metadata("design:type", String)
    ], DeletedNode.prototype, "parentPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], DeletedNode.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeletedNode.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], DeletedNode.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", UserInfo)
    ], DeletedNode.prototype, "updatedBy", void 0);
    return DeletedNode;
}(SpeakeasyBase));
export { DeletedNode };

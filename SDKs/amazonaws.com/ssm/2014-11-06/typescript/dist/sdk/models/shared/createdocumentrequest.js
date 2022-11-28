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
import { AttachmentsSource } from "./attachmentssource";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { DocumentRequires } from "./documentrequires";
import { Tag } from "./tag";
var CreateDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateDocumentRequest, _super);
    function CreateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: AttachmentsSource }),
        __metadata("design:type", Array)
    ], CreateDocumentRequest.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Content" }),
        __metadata("design:type", String)
    ], CreateDocumentRequest.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], CreateDocumentRequest.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentFormat" }),
        __metadata("design:type", String)
    ], CreateDocumentRequest.prototype, "documentFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentType" }),
        __metadata("design:type", String)
    ], CreateDocumentRequest.prototype, "documentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateDocumentRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Requires", elemType: DocumentRequires }),
        __metadata("design:type", Array)
    ], CreateDocumentRequest.prototype, "requires", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateDocumentRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetType" }),
        __metadata("design:type", String)
    ], CreateDocumentRequest.prototype, "targetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VersionName" }),
        __metadata("design:type", String)
    ], CreateDocumentRequest.prototype, "versionName", void 0);
    return CreateDocumentRequest;
}(SpeakeasyBase));
export { CreateDocumentRequest };

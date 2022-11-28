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
var AttachmentResponseParent = /** @class */ (function (_super) {
    __extends(AttachmentResponseParent, _super);
    function AttachmentResponseParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], AttachmentResponseParent.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AttachmentResponseParent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], AttachmentResponseParent.prototype, "resourceType", void 0);
    return AttachmentResponseParent;
}(SpeakeasyBase));
export { AttachmentResponseParent };
var AttachmentResponse = /** @class */ (function (_super) {
    __extends(AttachmentResponse, _super);
    function AttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], AttachmentResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], AttachmentResponse.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], AttachmentResponse.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], AttachmentResponse.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AttachmentResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", AttachmentResponseParent)
    ], AttachmentResponse.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_subtype" }),
        __metadata("design:type", Object)
    ], AttachmentResponse.prototype, "resourceSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], AttachmentResponse.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view_url" }),
        __metadata("design:type", String)
    ], AttachmentResponse.prototype, "viewUrl", void 0);
    return AttachmentResponse;
}(SpeakeasyBase));
export { AttachmentResponse };

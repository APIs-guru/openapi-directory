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
var ScimEnterpriseGroupMembers = /** @class */ (function (_super) {
    __extends(ScimEnterpriseGroupMembers, _super);
    function ScimEnterpriseGroupMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=$ref" }),
        __metadata("design:type", String)
    ], ScimEnterpriseGroupMembers.prototype, "dollarRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display" }),
        __metadata("design:type", String)
    ], ScimEnterpriseGroupMembers.prototype, "display", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ScimEnterpriseGroupMembers.prototype, "value", void 0);
    return ScimEnterpriseGroupMembers;
}(SpeakeasyBase));
export { ScimEnterpriseGroupMembers };
var ScimEnterpriseGroupMeta = /** @class */ (function (_super) {
    __extends(ScimEnterpriseGroupMeta, _super);
    function ScimEnterpriseGroupMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], ScimEnterpriseGroupMeta.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModified" }),
        __metadata("design:type", String)
    ], ScimEnterpriseGroupMeta.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ScimEnterpriseGroupMeta.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], ScimEnterpriseGroupMeta.prototype, "resourceType", void 0);
    return ScimEnterpriseGroupMeta;
}(SpeakeasyBase));
export { ScimEnterpriseGroupMeta };
var ScimEnterpriseGroup = /** @class */ (function (_super) {
    __extends(ScimEnterpriseGroup, _super);
    function ScimEnterpriseGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ScimEnterpriseGroup.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], ScimEnterpriseGroup.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScimEnterpriseGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members", elemType: ScimEnterpriseGroupMembers }),
        __metadata("design:type", Array)
    ], ScimEnterpriseGroup.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ScimEnterpriseGroupMeta)
    ], ScimEnterpriseGroup.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], ScimEnterpriseGroup.prototype, "schemas", void 0);
    return ScimEnterpriseGroup;
}(SpeakeasyBase));
export { ScimEnterpriseGroup };

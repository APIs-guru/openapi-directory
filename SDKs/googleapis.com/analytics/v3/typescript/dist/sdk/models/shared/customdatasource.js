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
var CustomDataSourceChildLink = /** @class */ (function (_super) {
    __extends(CustomDataSourceChildLink, _super);
    function CustomDataSourceChildLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], CustomDataSourceChildLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomDataSourceChildLink.prototype, "type", void 0);
    return CustomDataSourceChildLink;
}(SpeakeasyBase));
export { CustomDataSourceChildLink };
// CustomDataSourceParentLink
/**
 * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
**/
var CustomDataSourceParentLink = /** @class */ (function (_super) {
    __extends(CustomDataSourceParentLink, _super);
    function CustomDataSourceParentLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], CustomDataSourceParentLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomDataSourceParentLink.prototype, "type", void 0);
    return CustomDataSourceParentLink;
}(SpeakeasyBase));
export { CustomDataSourceParentLink };
// CustomDataSource
/**
 * JSON template for an Analytics custom data source.
**/
var CustomDataSource = /** @class */ (function (_super) {
    __extends(CustomDataSource, _super);
    function CustomDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childLink" }),
        __metadata("design:type", CustomDataSourceChildLink)
    ], CustomDataSource.prototype, "childLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], CustomDataSource.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importBehavior" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "importBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", CustomDataSourceParentLink)
    ], CustomDataSource.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profilesLinked" }),
        __metadata("design:type", Array)
    ], CustomDataSource.prototype, "profilesLinked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", Array)
    ], CustomDataSource.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], CustomDataSource.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uploadType" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], CustomDataSource.prototype, "webPropertyId", void 0);
    return CustomDataSource;
}(SpeakeasyBase));
export { CustomDataSource };

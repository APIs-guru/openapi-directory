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
import { EntityUserLink } from "./entityuserlink";
// EntityUserLinks
/**
 * An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.
**/
var EntityUserLinks = /** @class */ (function (_super) {
    __extends(EntityUserLinks, _super);
    function EntityUserLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: EntityUserLink }),
        __metadata("design:type", Array)
    ], EntityUserLinks.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], EntityUserLinks.prototype, "itemsPerPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], EntityUserLinks.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextLink" }),
        __metadata("design:type", String)
    ], EntityUserLinks.prototype, "nextLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousLink" }),
        __metadata("design:type", String)
    ], EntityUserLinks.prototype, "previousLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], EntityUserLinks.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalResults" }),
        __metadata("design:type", Number)
    ], EntityUserLinks.prototype, "totalResults", void 0);
    return EntityUserLinks;
}(SpeakeasyBase));
export { EntityUserLinks };

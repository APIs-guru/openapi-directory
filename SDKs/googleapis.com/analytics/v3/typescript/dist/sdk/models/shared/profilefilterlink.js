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
import { FilterRef } from "./filterref";
import { ProfileRef } from "./profileref";
import { FilterRefInput } from "./filterref";
// ProfileFilterLink
/**
 * JSON template for an Analytics profile filter link.
**/
var ProfileFilterLink = /** @class */ (function (_super) {
    __extends(ProfileFilterLink, _super);
    function ProfileFilterLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterRef" }),
        __metadata("design:type", FilterRef)
    ], ProfileFilterLink.prototype, "filterRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ProfileFilterLink.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ProfileFilterLink.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileRef" }),
        __metadata("design:type", ProfileRef)
    ], ProfileFilterLink.prototype, "profileRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], ProfileFilterLink.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], ProfileFilterLink.prototype, "selfLink", void 0);
    return ProfileFilterLink;
}(SpeakeasyBase));
export { ProfileFilterLink };
// ProfileFilterLinkInput
/**
 * JSON template for an Analytics profile filter link.
**/
var ProfileFilterLinkInput = /** @class */ (function (_super) {
    __extends(ProfileFilterLinkInput, _super);
    function ProfileFilterLinkInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterRef" }),
        __metadata("design:type", FilterRefInput)
    ], ProfileFilterLinkInput.prototype, "filterRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ProfileFilterLinkInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileRef" }),
        __metadata("design:type", ProfileRef)
    ], ProfileFilterLinkInput.prototype, "profileRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], ProfileFilterLinkInput.prototype, "rank", void 0);
    return ProfileFilterLinkInput;
}(SpeakeasyBase));
export { ProfileFilterLinkInput };

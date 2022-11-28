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
import { PatchFilterKeyEnum } from "./patchfilterkeyenum";
// PatchFilter
/**
 * <p> Defines which patches should be included in a patch baseline.</p> <p>A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for <code>WINDOWS</code> are <code>PATCH_SET</code>, <code>PRODUCT</code>, <code>PRODUCT_FAMILY</code>, <code>CLASSIFICATION</code>, and <code>MSRC_SEVERITY</code>.</p> <p>The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is <code>PRODUCT</code> and the filter values are <code>["Office 2013", "Office 2016"]</code>, then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.</p> <p>You can view lists of valid values for the patch properties by running the <code>DescribePatchProperties</code> command. For information about which patch properties can be used with each major operating system, see <a>DescribePatchProperties</a>.</p>
**/
var PatchFilter = /** @class */ (function (_super) {
    __extends(PatchFilter, _super);
    function PatchFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", String)
    ], PatchFilter.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Values" }),
        __metadata("design:type", Array)
    ], PatchFilter.prototype, "values", void 0);
    return PatchFilter;
}(SpeakeasyBase));
export { PatchFilter };

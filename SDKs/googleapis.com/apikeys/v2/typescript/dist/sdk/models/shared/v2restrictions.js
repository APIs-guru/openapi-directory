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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V2AndroidKeyRestrictions } from "./v2androidkeyrestrictions";
import { V2BrowserKeyRestrictions } from "./v2browserkeyrestrictions";
import { V2IosKeyRestrictions } from "./v2ioskeyrestrictions";
import { V2ServerKeyRestrictions } from "./v2serverkeyrestrictions";
// V2Restrictions
/**
 * Describes the restrictions on the key.
**/
var V2Restrictions = /** @class */ (function (_super) {
    __extends(V2Restrictions, _super);
    function V2Restrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=androidKeyRestrictions" }),
        __metadata("design:type", V2AndroidKeyRestrictions)
    ], V2Restrictions.prototype, "androidKeyRestrictions", void 0);
    __decorate([
        Metadata({ data: "json, name=apiTargets", elemType: shared.V2ApiTarget }),
        __metadata("design:type", Array)
    ], V2Restrictions.prototype, "apiTargets", void 0);
    __decorate([
        Metadata({ data: "json, name=browserKeyRestrictions" }),
        __metadata("design:type", V2BrowserKeyRestrictions)
    ], V2Restrictions.prototype, "browserKeyRestrictions", void 0);
    __decorate([
        Metadata({ data: "json, name=iosKeyRestrictions" }),
        __metadata("design:type", V2IosKeyRestrictions)
    ], V2Restrictions.prototype, "iosKeyRestrictions", void 0);
    __decorate([
        Metadata({ data: "json, name=serverKeyRestrictions" }),
        __metadata("design:type", V2ServerKeyRestrictions)
    ], V2Restrictions.prototype, "serverKeyRestrictions", void 0);
    return V2Restrictions;
}(SpeakeasyBase));
export { V2Restrictions };

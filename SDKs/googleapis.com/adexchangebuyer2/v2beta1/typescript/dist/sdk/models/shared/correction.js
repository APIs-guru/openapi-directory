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
import { ServingContext } from "./servingcontext";
export var CorrectionTypeEnum;
(function (CorrectionTypeEnum) {
    CorrectionTypeEnum["CorrectionTypeUnspecified"] = "CORRECTION_TYPE_UNSPECIFIED";
    CorrectionTypeEnum["VendorIdsAdded"] = "VENDOR_IDS_ADDED";
    CorrectionTypeEnum["SslAttributeRemoved"] = "SSL_ATTRIBUTE_REMOVED";
    CorrectionTypeEnum["FlashFreeAttributeRemoved"] = "FLASH_FREE_ATTRIBUTE_REMOVED";
    CorrectionTypeEnum["FlashFreeAttributeAdded"] = "FLASH_FREE_ATTRIBUTE_ADDED";
    CorrectionTypeEnum["RequiredAttributeAdded"] = "REQUIRED_ATTRIBUTE_ADDED";
    CorrectionTypeEnum["RequiredVendorAdded"] = "REQUIRED_VENDOR_ADDED";
    CorrectionTypeEnum["SslAttributeAdded"] = "SSL_ATTRIBUTE_ADDED";
    CorrectionTypeEnum["InBannerVideoAttributeAdded"] = "IN_BANNER_VIDEO_ATTRIBUTE_ADDED";
    CorrectionTypeEnum["MraidAttributeAdded"] = "MRAID_ATTRIBUTE_ADDED";
    CorrectionTypeEnum["FlashAttributeRemoved"] = "FLASH_ATTRIBUTE_REMOVED";
    CorrectionTypeEnum["VideoInSnippetAttributeAdded"] = "VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED";
})(CorrectionTypeEnum || (CorrectionTypeEnum = {}));
// Correction
/**
 * Output only. Shows any corrections that were applied to this creative.
**/
var Correction = /** @class */ (function (_super) {
    __extends(Correction, _super);
    function Correction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contexts", elemType: ServingContext }),
        __metadata("design:type", Array)
    ], Correction.prototype, "contexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Array)
    ], Correction.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Correction.prototype, "type", void 0);
    return Correction;
}(SpeakeasyBase));
export { Correction };

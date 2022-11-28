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
import { CookieObject } from "./cookieobject";
import { HeaderObject } from "./headerobject";
import { QueryStringObject } from "./querystringobject";
// CacheSettings
/**
 * <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p>
**/
var CacheSettings = /** @class */ (function (_super) {
    __extends(CacheSettings, _super);
    function CacheSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedHTTPMethods" }),
        __metadata("design:type", String)
    ], CacheSettings.prototype, "allowedHttpMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cachedHTTPMethods" }),
        __metadata("design:type", String)
    ], CacheSettings.prototype, "cachedHttpMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultTTL" }),
        __metadata("design:type", Number)
    ], CacheSettings.prototype, "defaultTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forwardedCookies" }),
        __metadata("design:type", CookieObject)
    ], CacheSettings.prototype, "forwardedCookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forwardedHeaders" }),
        __metadata("design:type", HeaderObject)
    ], CacheSettings.prototype, "forwardedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forwardedQueryStrings" }),
        __metadata("design:type", QueryStringObject)
    ], CacheSettings.prototype, "forwardedQueryStrings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumTTL" }),
        __metadata("design:type", Number)
    ], CacheSettings.prototype, "maximumTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumTTL" }),
        __metadata("design:type", Number)
    ], CacheSettings.prototype, "minimumTtl", void 0);
    return CacheSettings;
}(SpeakeasyBase));
export { CacheSettings };

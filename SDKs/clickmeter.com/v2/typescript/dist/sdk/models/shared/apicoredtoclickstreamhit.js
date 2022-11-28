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
import { ApiCoreDtoClickStreamHitBrowserInfo } from "./apicoredtoclickstreamhitbrowserinfo";
import { ApiCoreDtoClickStreamHitConversionInfo } from "./apicoredtoclickstreamhitconversioninfo";
import { ApiCoreDtoClickStreamHitDatapointInfo } from "./apicoredtoclickstreamhitdatapointinfo";
import { ApiCoreDtoClickStreamHitLocationInfo } from "./apicoredtoclickstreamhitlocationinfo";
import { ApiCoreDtoClickStreamHitOsInfo } from "./apicoredtoclickstreamhitosinfo";
import { ApiCoreDtoClickStreamHitSource } from "./apicoredtoclickstreamhitsource";
var ApiCoreDtoClickStreamHit = /** @class */ (function (_super) {
    __extends(ApiCoreDtoClickStreamHit, _super);
    function ApiCoreDtoClickStreamHit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessTime" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "accessTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browser" }),
        __metadata("design:type", ApiCoreDtoClickStreamHitBrowserInfo)
    ], ApiCoreDtoClickStreamHit.prototype, "browser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientLanguage" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "clientLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversion1" }),
        __metadata("design:type", ApiCoreDtoClickStreamHitConversionInfo)
    ], ApiCoreDtoClickStreamHit.prototype, "conversion1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversion2" }),
        __metadata("design:type", ApiCoreDtoClickStreamHitConversionInfo)
    ], ApiCoreDtoClickStreamHit.prototype, "conversion2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversion3" }),
        __metadata("design:type", ApiCoreDtoClickStreamHitConversionInfo)
    ], ApiCoreDtoClickStreamHit.prototype, "conversion3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversion4" }),
        __metadata("design:type", ApiCoreDtoClickStreamHitConversionInfo)
    ], ApiCoreDtoClickStreamHit.prototype, "conversion4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversion5" }),
        __metadata("design:type", ApiCoreDtoClickStreamHitConversionInfo)
    ], ApiCoreDtoClickStreamHit.prototype, "conversion5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversions", elemType: ApiCoreDtoClickStreamHitConversionInfo }),
        __metadata("design:type", Array)
    ], ApiCoreDtoClickStreamHit.prototype, "conversions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity" }),
        __metadata("design:type", ApiCoreDtoClickStreamHitDatapointInfo)
    ], ApiCoreDtoClickStreamHit.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isProxy" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "isProxy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSpider" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "isSpider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUnique" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "isUnique", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", ApiCoreDtoClickStreamHitLocationInfo)
    ], ApiCoreDtoClickStreamHit.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os" }),
        __metadata("design:type", ApiCoreDtoClickStreamHitOsInfo)
    ], ApiCoreDtoClickStreamHit.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParams" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realDestinationUrl" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "realDestinationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referer" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "referer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", ApiCoreDtoClickStreamHitSource)
    ], ApiCoreDtoClickStreamHit.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHit.prototype, "type", void 0);
    return ApiCoreDtoClickStreamHit;
}(SpeakeasyBase));
export { ApiCoreDtoClickStreamHit };

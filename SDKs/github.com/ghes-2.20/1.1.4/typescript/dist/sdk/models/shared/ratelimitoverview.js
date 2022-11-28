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
import { RateLimit } from "./ratelimit";
var RateLimitOverviewResources = /** @class */ (function (_super) {
    __extends(RateLimitOverviewResources, _super);
    function RateLimitOverviewResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code_scanning_upload" }),
        __metadata("design:type", RateLimit)
    ], RateLimitOverviewResources.prototype, "codeScanningUpload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=core" }),
        __metadata("design:type", RateLimit)
    ], RateLimitOverviewResources.prototype, "core", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=graphql" }),
        __metadata("design:type", RateLimit)
    ], RateLimitOverviewResources.prototype, "graphql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integration_manifest" }),
        __metadata("design:type", RateLimit)
    ], RateLimitOverviewResources.prototype, "integrationManifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=search" }),
        __metadata("design:type", RateLimit)
    ], RateLimitOverviewResources.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_import" }),
        __metadata("design:type", RateLimit)
    ], RateLimitOverviewResources.prototype, "sourceImport", void 0);
    return RateLimitOverviewResources;
}(SpeakeasyBase));
export { RateLimitOverviewResources };
// RateLimitOverview
/**
 * Rate Limit Overview
**/
var RateLimitOverview = /** @class */ (function (_super) {
    __extends(RateLimitOverview, _super);
    function RateLimitOverview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", RateLimit)
    ], RateLimitOverview.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources" }),
        __metadata("design:type", RateLimitOverviewResources)
    ], RateLimitOverview.prototype, "resources", void 0);
    return RateLimitOverview;
}(SpeakeasyBase));
export { RateLimitOverview };

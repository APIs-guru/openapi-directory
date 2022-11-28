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
// AwsApiGatewayMethodSettings
/**
 * Defines settings for a method for the stage.
**/
var AwsApiGatewayMethodSettings = /** @class */ (function (_super) {
    __extends(AwsApiGatewayMethodSettings, _super);
    function AwsApiGatewayMethodSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CacheDataEncrypted" }),
        __metadata("design:type", Boolean)
    ], AwsApiGatewayMethodSettings.prototype, "cacheDataEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CacheTtlInSeconds" }),
        __metadata("design:type", Number)
    ], AwsApiGatewayMethodSettings.prototype, "cacheTtlInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CachingEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsApiGatewayMethodSettings.prototype, "cachingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataTraceEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsApiGatewayMethodSettings.prototype, "dataTraceEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HttpMethod" }),
        __metadata("design:type", String)
    ], AwsApiGatewayMethodSettings.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoggingLevel" }),
        __metadata("design:type", String)
    ], AwsApiGatewayMethodSettings.prototype, "loggingLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricsEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsApiGatewayMethodSettings.prototype, "metricsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequireAuthorizationForCacheControl" }),
        __metadata("design:type", Boolean)
    ], AwsApiGatewayMethodSettings.prototype, "requireAuthorizationForCacheControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourcePath" }),
        __metadata("design:type", String)
    ], AwsApiGatewayMethodSettings.prototype, "resourcePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThrottlingBurstLimit" }),
        __metadata("design:type", Number)
    ], AwsApiGatewayMethodSettings.prototype, "throttlingBurstLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThrottlingRateLimit" }),
        __metadata("design:type", Number)
    ], AwsApiGatewayMethodSettings.prototype, "throttlingRateLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnauthorizedCacheControlHeaderStrategy" }),
        __metadata("design:type", String)
    ], AwsApiGatewayMethodSettings.prototype, "unauthorizedCacheControlHeaderStrategy", void 0);
    return AwsApiGatewayMethodSettings;
}(SpeakeasyBase));
export { AwsApiGatewayMethodSettings };

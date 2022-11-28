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
// AwsApiGatewayV2RouteSettings
/**
 * Contains route settings for a stage.
**/
var AwsApiGatewayV2RouteSettings = /** @class */ (function (_super) {
    __extends(AwsApiGatewayV2RouteSettings, _super);
    function AwsApiGatewayV2RouteSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataTraceEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsApiGatewayV2RouteSettings.prototype, "dataTraceEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DetailedMetricsEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsApiGatewayV2RouteSettings.prototype, "detailedMetricsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoggingLevel" }),
        __metadata("design:type", String)
    ], AwsApiGatewayV2RouteSettings.prototype, "loggingLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThrottlingBurstLimit" }),
        __metadata("design:type", Number)
    ], AwsApiGatewayV2RouteSettings.prototype, "throttlingBurstLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThrottlingRateLimit" }),
        __metadata("design:type", Number)
    ], AwsApiGatewayV2RouteSettings.prototype, "throttlingRateLimit", void 0);
    return AwsApiGatewayV2RouteSettings;
}(SpeakeasyBase));
export { AwsApiGatewayV2RouteSettings };

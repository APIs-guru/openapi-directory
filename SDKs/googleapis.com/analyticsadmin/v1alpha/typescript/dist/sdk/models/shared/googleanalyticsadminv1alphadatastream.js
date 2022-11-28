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
import { GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput } from "./googleanalyticsadminv1alphadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput } from "./googleanalyticsadminv1alphadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput } from "./googleanalyticsadminv1alphadatastreamwebstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData } from "./googleanalyticsadminv1alphadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData } from "./googleanalyticsadminv1alphadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamWebStreamData } from "./googleanalyticsadminv1alphadatastreamwebstreamdata";
export var GoogleAnalyticsAdminV1alphaDataStreamTypeEnum;
(function (GoogleAnalyticsAdminV1alphaDataStreamTypeEnum) {
    GoogleAnalyticsAdminV1alphaDataStreamTypeEnum["DataStreamTypeUnspecified"] = "DATA_STREAM_TYPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaDataStreamTypeEnum["WebDataStream"] = "WEB_DATA_STREAM";
    GoogleAnalyticsAdminV1alphaDataStreamTypeEnum["AndroidAppDataStream"] = "ANDROID_APP_DATA_STREAM";
    GoogleAnalyticsAdminV1alphaDataStreamTypeEnum["IosAppDataStream"] = "IOS_APP_DATA_STREAM";
})(GoogleAnalyticsAdminV1alphaDataStreamTypeEnum || (GoogleAnalyticsAdminV1alphaDataStreamTypeEnum = {}));
// GoogleAnalyticsAdminV1alphaDataStreamInput
/**
 * A resource message representing a data stream.
**/
var GoogleAnalyticsAdminV1alphaDataStreamInput = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaDataStreamInput, _super);
    function GoogleAnalyticsAdminV1alphaDataStreamInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidAppStreamData" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput)
    ], GoogleAnalyticsAdminV1alphaDataStreamInput.prototype, "androidAppStreamData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDataStreamInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iosAppStreamData" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput)
    ], GoogleAnalyticsAdminV1alphaDataStreamInput.prototype, "iosAppStreamData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDataStreamInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webStreamData" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput)
    ], GoogleAnalyticsAdminV1alphaDataStreamInput.prototype, "webStreamData", void 0);
    return GoogleAnalyticsAdminV1alphaDataStreamInput;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaDataStreamInput };
// GoogleAnalyticsAdminV1alphaDataStream
/**
 * A resource message representing a data stream.
**/
var GoogleAnalyticsAdminV1alphaDataStream = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaDataStream, _super);
    function GoogleAnalyticsAdminV1alphaDataStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidAppStreamData" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData)
    ], GoogleAnalyticsAdminV1alphaDataStream.prototype, "androidAppStreamData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDataStream.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDataStream.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iosAppStreamData" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData)
    ], GoogleAnalyticsAdminV1alphaDataStream.prototype, "iosAppStreamData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDataStream.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDataStream.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDataStream.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webStreamData" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaDataStreamWebStreamData)
    ], GoogleAnalyticsAdminV1alphaDataStream.prototype, "webStreamData", void 0);
    return GoogleAnalyticsAdminV1alphaDataStream;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaDataStream };

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
import { DocumentLocation } from "./documentlocation";
import { NotificationChannel } from "./notificationchannel";
import { OutputConfig } from "./outputconfig";
var StartDocumentTextDetectionRequest = /** @class */ (function (_super) {
    __extends(StartDocumentTextDetectionRequest, _super);
    function StartDocumentTextDetectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientRequestToken" }),
        __metadata("design:type", String)
    ], StartDocumentTextDetectionRequest.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentLocation" }),
        __metadata("design:type", DocumentLocation)
    ], StartDocumentTextDetectionRequest.prototype, "documentLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobTag" }),
        __metadata("design:type", String)
    ], StartDocumentTextDetectionRequest.prototype, "jobTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KMSKeyId" }),
        __metadata("design:type", String)
    ], StartDocumentTextDetectionRequest.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationChannel" }),
        __metadata("design:type", NotificationChannel)
    ], StartDocumentTextDetectionRequest.prototype, "notificationChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputConfig" }),
        __metadata("design:type", OutputConfig)
    ], StartDocumentTextDetectionRequest.prototype, "outputConfig", void 0);
    return StartDocumentTextDetectionRequest;
}(SpeakeasyBase));
export { StartDocumentTextDetectionRequest };

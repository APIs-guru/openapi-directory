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
import { GoogleCloudBeyondcorpAppconnectorsV1ImageConfig } from "./googlecloudbeyondcorpappconnectorsv1imageconfig";
import { GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1notificationconfig";
// GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig
/**
 * AppConnectorInstanceConfig defines the instance config of a AppConnector.
**/
var GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig, _super);
    function GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageConfig" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectorsV1ImageConfig)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig.prototype, "imageConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceConfig" }),
        __metadata("design:type", Map)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig.prototype, "instanceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequenceNumber" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig.prototype, "sequenceNumber", void 0);
    return GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig };

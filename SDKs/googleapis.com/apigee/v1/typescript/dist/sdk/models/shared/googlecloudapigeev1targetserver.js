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
import { GoogleCloudApigeeV1TlsInfo } from "./googlecloudapigeev1tlsinfo";
export var GoogleCloudApigeeV1TargetServerProtocolEnum;
(function (GoogleCloudApigeeV1TargetServerProtocolEnum) {
    GoogleCloudApigeeV1TargetServerProtocolEnum["ProtocolUnspecified"] = "PROTOCOL_UNSPECIFIED";
    GoogleCloudApigeeV1TargetServerProtocolEnum["Http"] = "HTTP";
    GoogleCloudApigeeV1TargetServerProtocolEnum["Grpc"] = "GRPC";
})(GoogleCloudApigeeV1TargetServerProtocolEnum || (GoogleCloudApigeeV1TargetServerProtocolEnum = {}));
// GoogleCloudApigeeV1TargetServer
/**
 * TargetServer configuration. TargetServers are used to decouple a proxy's TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.
**/
var GoogleCloudApigeeV1TargetServer = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1TargetServer, _super);
    function GoogleCloudApigeeV1TargetServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1TargetServer.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1TargetServer.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudApigeeV1TargetServer.prototype, "isEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1TargetServer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1TargetServer.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1TargetServer.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sSLInfo" }),
        __metadata("design:type", GoogleCloudApigeeV1TlsInfo)
    ], GoogleCloudApigeeV1TargetServer.prototype, "sSlInfo", void 0);
    return GoogleCloudApigeeV1TargetServer;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1TargetServer };

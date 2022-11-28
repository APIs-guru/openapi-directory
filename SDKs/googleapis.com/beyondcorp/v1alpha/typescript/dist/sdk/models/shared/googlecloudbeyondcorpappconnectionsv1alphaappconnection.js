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
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnectionapplicationendpoint";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnectiongateway";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnectiongateway";
export var GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum;
(function (GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum) {
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum["Creating"] = "CREATING";
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum["Created"] = "CREATED";
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum["Updating"] = "UPDATING";
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum["Deleting"] = "DELETING";
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum["Down"] = "DOWN";
})(GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum || (GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = {}));
export var GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum;
(function (GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum) {
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum["TcpProxy"] = "TCP_PROXY";
})(GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum || (GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum = {}));
// GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection
/**
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
var GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection, _super);
    function GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationEndpoint" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "applicationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectors" }),
        __metadata("design:type", Array)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "connectors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "gateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection.prototype, "updateTime", void 0);
    return GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection };
// GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput
/**
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
var GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput, _super);
    function GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationEndpoint" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput.prototype, "applicationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectors" }),
        __metadata("design:type", Array)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput.prototype, "connectors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput.prototype, "gateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput.prototype, "type", void 0);
    return GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput };

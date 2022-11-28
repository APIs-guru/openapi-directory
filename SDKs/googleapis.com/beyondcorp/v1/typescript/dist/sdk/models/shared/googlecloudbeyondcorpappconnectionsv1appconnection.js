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
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint } from "./googlecloudbeyondcorpappconnectionsv1appconnectionapplicationendpoint";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput } from "./googlecloudbeyondcorpappconnectionsv1appconnectiongateway";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway } from "./googlecloudbeyondcorpappconnectionsv1appconnectiongateway";
export var GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum;
(function (GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum) {
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum["Creating"] = "CREATING";
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum["Created"] = "CREATED";
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum["Updating"] = "UPDATING";
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum["Deleting"] = "DELETING";
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum["Down"] = "DOWN";
})(GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum || (GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = {}));
export var GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
(function (GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum) {
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum["TcpProxy"] = "TCP_PROXY";
})(GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum || (GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum = {}));
// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput
/**
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
var GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput, _super);
    function GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationEndpoint" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput.prototype, "applicationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectors" }),
        __metadata("design:type", Array)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput.prototype, "connectors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput.prototype, "gateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput.prototype, "type", void 0);
    return GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput };
// GoogleCloudBeyondcorpAppconnectionsV1AppConnection
/**
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
var GoogleCloudBeyondcorpAppconnectionsV1AppConnection = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectionsV1AppConnection, _super);
    function GoogleCloudBeyondcorpAppconnectionsV1AppConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationEndpoint" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "applicationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectors" }),
        __metadata("design:type", Array)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "connectors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "gateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnection.prototype, "updateTime", void 0);
    return GoogleCloudBeyondcorpAppconnectionsV1AppConnection;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectionsV1AppConnection };

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
import { GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo } from "./googlecloudbeyondcorpappconnectorsv1appconnectorprincipalinfo";
import { GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1resourceinfo";
export var GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum;
(function (GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum) {
    GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum["Creating"] = "CREATING";
    GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum["Created"] = "CREATED";
    GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum["Updating"] = "UPDATING";
    GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum["Deleting"] = "DELETING";
    GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum["Down"] = "DOWN";
})(GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum || (GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = {}));
// GoogleCloudBeyondcorpAppconnectorsV1AppConnector
/**
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
var GoogleCloudBeyondcorpAppconnectorsV1AppConnector = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectorsV1AppConnector, _super);
    function GoogleCloudBeyondcorpAppconnectorsV1AppConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnector.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnector.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnector.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnector.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principalInfo" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnector.prototype, "principalInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceInfo" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnector.prototype, "resourceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnector.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnector.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnector.prototype, "updateTime", void 0);
    return GoogleCloudBeyondcorpAppconnectorsV1AppConnector;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectorsV1AppConnector };
// GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput
/**
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
var GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput, _super);
    function GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principalInfo" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput.prototype, "principalInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceInfo" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo)
    ], GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput.prototype, "resourceInfo", void 0);
    return GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput };

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
import { GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo } from "./googlecloudbeyondcorpappconnectorsv1alphaappconnectorprincipalinfo";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1alpharesourceinfo";
export var GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum;
(function (GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum) {
    GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum["Creating"] = "CREATING";
    GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum["Created"] = "CREATED";
    GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum["Updating"] = "UPDATING";
    GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum["Deleting"] = "DELETING";
    GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum["Down"] = "DOWN";
})(GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum || (GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum = {}));
// GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector
/**
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
var GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector, _super);
    function GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principalInfo" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector.prototype, "principalInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceInfo" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector.prototype, "resourceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector.prototype, "updateTime", void 0);
    return GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector };
// GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput
/**
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
var GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput, _super);
    function GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principalInfo" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput.prototype, "principalInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceInfo" }),
        __metadata("design:type", GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo)
    ], GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput.prototype, "resourceInfo", void 0);
    return GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput };

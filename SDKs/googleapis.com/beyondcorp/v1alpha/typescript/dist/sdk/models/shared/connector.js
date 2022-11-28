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
import { PrincipalInfo } from "./principalinfo";
import { ResourceInfo } from "./resourceinfo";
export var ConnectorStateEnum;
(function (ConnectorStateEnum) {
    ConnectorStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ConnectorStateEnum["Creating"] = "CREATING";
    ConnectorStateEnum["Created"] = "CREATED";
    ConnectorStateEnum["Updating"] = "UPDATING";
    ConnectorStateEnum["Deleting"] = "DELETING";
    ConnectorStateEnum["Down"] = "DOWN";
})(ConnectorStateEnum || (ConnectorStateEnum = {}));
// Connector
/**
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
var Connector = /** @class */ (function (_super) {
    __extends(Connector, _super);
    function Connector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Connector.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Connector.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Connector.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Connector.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principalInfo" }),
        __metadata("design:type", PrincipalInfo)
    ], Connector.prototype, "principalInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceInfo" }),
        __metadata("design:type", ResourceInfo)
    ], Connector.prototype, "resourceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Connector.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Connector.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Connector.prototype, "updateTime", void 0);
    return Connector;
}(SpeakeasyBase));
export { Connector };
// ConnectorInput
/**
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
var ConnectorInput = /** @class */ (function (_super) {
    __extends(ConnectorInput, _super);
    function ConnectorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConnectorInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ConnectorInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectorInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principalInfo" }),
        __metadata("design:type", PrincipalInfo)
    ], ConnectorInput.prototype, "principalInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceInfo" }),
        __metadata("design:type", ResourceInfo)
    ], ConnectorInput.prototype, "resourceInfo", void 0);
    return ConnectorInput;
}(SpeakeasyBase));
export { ConnectorInput };

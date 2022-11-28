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
import { ApplicationEndpoint } from "./applicationendpoint";
import { GatewayInput } from "./gateway";
import { Gateway } from "./gateway";
export var ConnectionStateEnum;
(function (ConnectionStateEnum) {
    ConnectionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ConnectionStateEnum["Creating"] = "CREATING";
    ConnectionStateEnum["Created"] = "CREATED";
    ConnectionStateEnum["Updating"] = "UPDATING";
    ConnectionStateEnum["Deleting"] = "DELETING";
    ConnectionStateEnum["Down"] = "DOWN";
})(ConnectionStateEnum || (ConnectionStateEnum = {}));
export var ConnectionTypeEnum;
(function (ConnectionTypeEnum) {
    ConnectionTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    ConnectionTypeEnum["TcpProxy"] = "TCP_PROXY";
})(ConnectionTypeEnum || (ConnectionTypeEnum = {}));
// ConnectionInput
/**
 * A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
**/
var ConnectionInput = /** @class */ (function (_super) {
    __extends(ConnectionInput, _super);
    function ConnectionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationEndpoint" }),
        __metadata("design:type", ApplicationEndpoint)
    ], ConnectionInput.prototype, "applicationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectors" }),
        __metadata("design:type", Array)
    ], ConnectionInput.prototype, "connectors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConnectionInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", GatewayInput)
    ], ConnectionInput.prototype, "gateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ConnectionInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ConnectionInput.prototype, "type", void 0);
    return ConnectionInput;
}(SpeakeasyBase));
export { ConnectionInput };
// Connection
/**
 * A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
**/
var Connection = /** @class */ (function (_super) {
    __extends(Connection, _super);
    function Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationEndpoint" }),
        __metadata("design:type", ApplicationEndpoint)
    ], Connection.prototype, "applicationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectors" }),
        __metadata("design:type", Array)
    ], Connection.prototype, "connectors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Connection.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Connection.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", Gateway)
    ], Connection.prototype, "gateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Connection.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Connection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Connection.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Connection.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Connection.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Connection.prototype, "updateTime", void 0);
    return Connection;
}(SpeakeasyBase));
export { Connection };

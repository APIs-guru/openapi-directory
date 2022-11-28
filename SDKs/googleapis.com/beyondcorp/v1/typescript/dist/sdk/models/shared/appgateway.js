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
import { AllocatedConnection } from "./allocatedconnection";
export var AppGatewayHostTypeEnum;
(function (AppGatewayHostTypeEnum) {
    AppGatewayHostTypeEnum["HostTypeUnspecified"] = "HOST_TYPE_UNSPECIFIED";
    AppGatewayHostTypeEnum["GcpRegionalMig"] = "GCP_REGIONAL_MIG";
})(AppGatewayHostTypeEnum || (AppGatewayHostTypeEnum = {}));
export var AppGatewayStateEnum;
(function (AppGatewayStateEnum) {
    AppGatewayStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    AppGatewayStateEnum["Creating"] = "CREATING";
    AppGatewayStateEnum["Created"] = "CREATED";
    AppGatewayStateEnum["Updating"] = "UPDATING";
    AppGatewayStateEnum["Deleting"] = "DELETING";
    AppGatewayStateEnum["Down"] = "DOWN";
})(AppGatewayStateEnum || (AppGatewayStateEnum = {}));
export var AppGatewayTypeEnum;
(function (AppGatewayTypeEnum) {
    AppGatewayTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    AppGatewayTypeEnum["TcpProxy"] = "TCP_PROXY";
})(AppGatewayTypeEnum || (AppGatewayTypeEnum = {}));
// AppGatewayInput
/**
 * A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be authorised for a single AppGateway.
**/
var AppGatewayInput = /** @class */ (function (_super) {
    __extends(AppGatewayInput, _super);
    function AppGatewayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AppGatewayInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostType" }),
        __metadata("design:type", String)
    ], AppGatewayInput.prototype, "hostType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], AppGatewayInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AppGatewayInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AppGatewayInput.prototype, "type", void 0);
    return AppGatewayInput;
}(SpeakeasyBase));
export { AppGatewayInput };
// AppGateway
/**
 * A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be authorised for a single AppGateway.
**/
var AppGateway = /** @class */ (function (_super) {
    __extends(AppGateway, _super);
    function AppGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocatedConnections", elemType: AllocatedConnection }),
        __metadata("design:type", Array)
    ], AppGateway.prototype, "allocatedConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], AppGateway.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AppGateway.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostType" }),
        __metadata("design:type", String)
    ], AppGateway.prototype, "hostType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], AppGateway.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AppGateway.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AppGateway.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AppGateway.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], AppGateway.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], AppGateway.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], AppGateway.prototype, "uri", void 0);
    return AppGateway;
}(SpeakeasyBase));
export { AppGateway };

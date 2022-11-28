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
// Connections200ApplicationJsonLastHandshake
/**
 * Structure holding detailed information about the connection
**/
var Connections200ApplicationJsonLastHandshake = /** @class */ (function (_super) {
    __extends(Connections200ApplicationJsonLastHandshake, _super);
    function Connections200ApplicationJsonLastHandshake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agent" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "agent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chain_id" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "chainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generation" }),
        __metadata("design:type", Number)
    ], Connections200ApplicationJsonLastHandshake.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_id" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "headId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_num" }),
        __metadata("design:type", Number)
    ], Connections200ApplicationJsonLastHandshake.prototype, "headNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_irreversible_block_id" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "lastIrreversibleBlockId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_irreversible_block_num" }),
        __metadata("design:type", Number)
    ], Connections200ApplicationJsonLastHandshake.prototype, "lastIrreversibleBlockNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_version" }),
        __metadata("design:type", Number)
    ], Connections200ApplicationJsonLastHandshake.prototype, "networkVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=p2p_address" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "p2pAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sig" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "sig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJsonLastHandshake.prototype, "token", void 0);
    return Connections200ApplicationJsonLastHandshake;
}(SpeakeasyBase));
export { Connections200ApplicationJsonLastHandshake };
var Connections200ApplicationJson = /** @class */ (function (_super) {
    __extends(Connections200ApplicationJson, _super);
    function Connections200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connecting" }),
        __metadata("design:type", Boolean)
    ], Connections200ApplicationJson.prototype, "connecting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_handshake" }),
        __metadata("design:type", Connections200ApplicationJsonLastHandshake)
    ], Connections200ApplicationJson.prototype, "lastHandshake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peer" }),
        __metadata("design:type", String)
    ], Connections200ApplicationJson.prototype, "peer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syncing" }),
        __metadata("design:type", Boolean)
    ], Connections200ApplicationJson.prototype, "syncing", void 0);
    return Connections200ApplicationJson;
}(SpeakeasyBase));
export { Connections200ApplicationJson };
var ConnectionsRequest = /** @class */ (function (_super) {
    __extends(ConnectionsRequest, _super);
    function ConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ConnectionsRequest.prototype, "request", void 0);
    return ConnectionsRequest;
}(SpeakeasyBase));
export { ConnectionsRequest };
var ConnectionsResponse = /** @class */ (function (_super) {
    __extends(ConnectionsResponse, _super);
    function ConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Connections200ApplicationJson }),
        __metadata("design:type", Array)
    ], ConnectionsResponse.prototype, "connections200ApplicationJsonObjects", void 0);
    return ConnectionsResponse;
}(SpeakeasyBase));
export { ConnectionsResponse };

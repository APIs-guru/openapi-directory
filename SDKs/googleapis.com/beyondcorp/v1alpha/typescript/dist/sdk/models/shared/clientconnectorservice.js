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
import { Egress } from "./egress";
import { Ingress } from "./ingress";
export var ClientConnectorServiceStateEnum;
(function (ClientConnectorServiceStateEnum) {
    ClientConnectorServiceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ClientConnectorServiceStateEnum["Creating"] = "CREATING";
    ClientConnectorServiceStateEnum["Updating"] = "UPDATING";
    ClientConnectorServiceStateEnum["Deleting"] = "DELETING";
    ClientConnectorServiceStateEnum["Running"] = "RUNNING";
    ClientConnectorServiceStateEnum["Down"] = "DOWN";
    ClientConnectorServiceStateEnum["Error"] = "ERROR";
})(ClientConnectorServiceStateEnum || (ClientConnectorServiceStateEnum = {}));
// ClientConnectorServiceInput
/**
 * Message describing ClientConnectorService object.
**/
var ClientConnectorServiceInput = /** @class */ (function (_super) {
    __extends(ClientConnectorServiceInput, _super);
    function ClientConnectorServiceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ClientConnectorServiceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=egress" }),
        __metadata("design:type", Egress)
    ], ClientConnectorServiceInput.prototype, "egress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingress" }),
        __metadata("design:type", Ingress)
    ], ClientConnectorServiceInput.prototype, "ingress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ClientConnectorServiceInput.prototype, "name", void 0);
    return ClientConnectorServiceInput;
}(SpeakeasyBase));
export { ClientConnectorServiceInput };
// ClientConnectorService
/**
 * Message describing ClientConnectorService object.
**/
var ClientConnectorService = /** @class */ (function (_super) {
    __extends(ClientConnectorService, _super);
    function ClientConnectorService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ClientConnectorService.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ClientConnectorService.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=egress" }),
        __metadata("design:type", Egress)
    ], ClientConnectorService.prototype, "egress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingress" }),
        __metadata("design:type", Ingress)
    ], ClientConnectorService.prototype, "ingress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ClientConnectorService.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ClientConnectorService.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ClientConnectorService.prototype, "updateTime", void 0);
    return ClientConnectorService;
}(SpeakeasyBase));
export { ClientConnectorService };

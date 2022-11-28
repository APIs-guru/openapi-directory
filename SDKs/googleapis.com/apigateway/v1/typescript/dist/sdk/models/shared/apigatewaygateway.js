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
export var ApigatewayGatewayStateEnum;
(function (ApigatewayGatewayStateEnum) {
    ApigatewayGatewayStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ApigatewayGatewayStateEnum["Creating"] = "CREATING";
    ApigatewayGatewayStateEnum["Active"] = "ACTIVE";
    ApigatewayGatewayStateEnum["Failed"] = "FAILED";
    ApigatewayGatewayStateEnum["Deleting"] = "DELETING";
    ApigatewayGatewayStateEnum["Updating"] = "UPDATING";
})(ApigatewayGatewayStateEnum || (ApigatewayGatewayStateEnum = {}));
// ApigatewayGateway
/**
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
**/
var ApigatewayGateway = /** @class */ (function (_super) {
    __extends(ApigatewayGateway, _super);
    function ApigatewayGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiConfig" }),
        __metadata("design:type", String)
    ], ApigatewayGateway.prototype, "apiConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ApigatewayGateway.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultHostname" }),
        __metadata("design:type", String)
    ], ApigatewayGateway.prototype, "defaultHostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApigatewayGateway.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApigatewayGateway.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApigatewayGateway.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ApigatewayGateway.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ApigatewayGateway.prototype, "updateTime", void 0);
    return ApigatewayGateway;
}(SpeakeasyBase));
export { ApigatewayGateway };
// ApigatewayGatewayInput
/**
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
**/
var ApigatewayGatewayInput = /** @class */ (function (_super) {
    __extends(ApigatewayGatewayInput, _super);
    function ApigatewayGatewayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiConfig" }),
        __metadata("design:type", String)
    ], ApigatewayGatewayInput.prototype, "apiConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApigatewayGatewayInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApigatewayGatewayInput.prototype, "labels", void 0);
    return ApigatewayGatewayInput;
}(SpeakeasyBase));
export { ApigatewayGatewayInput };

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
export var ApigatewayApiStateEnum;
(function (ApigatewayApiStateEnum) {
    ApigatewayApiStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ApigatewayApiStateEnum["Creating"] = "CREATING";
    ApigatewayApiStateEnum["Active"] = "ACTIVE";
    ApigatewayApiStateEnum["Failed"] = "FAILED";
    ApigatewayApiStateEnum["Deleting"] = "DELETING";
    ApigatewayApiStateEnum["Updating"] = "UPDATING";
})(ApigatewayApiStateEnum || (ApigatewayApiStateEnum = {}));
// ApigatewayApiInput
/**
 * An API that can be served by one or more Gateways.
**/
var ApigatewayApiInput = /** @class */ (function (_super) {
    __extends(ApigatewayApiInput, _super);
    function ApigatewayApiInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApigatewayApiInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApigatewayApiInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedService" }),
        __metadata("design:type", String)
    ], ApigatewayApiInput.prototype, "managedService", void 0);
    return ApigatewayApiInput;
}(SpeakeasyBase));
export { ApigatewayApiInput };
// ApigatewayApi
/**
 * An API that can be served by one or more Gateways.
**/
var ApigatewayApi = /** @class */ (function (_super) {
    __extends(ApigatewayApi, _super);
    function ApigatewayApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ApigatewayApi.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApigatewayApi.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApigatewayApi.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedService" }),
        __metadata("design:type", String)
    ], ApigatewayApi.prototype, "managedService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApigatewayApi.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ApigatewayApi.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ApigatewayApi.prototype, "updateTime", void 0);
    return ApigatewayApi;
}(SpeakeasyBase));
export { ApigatewayApi };

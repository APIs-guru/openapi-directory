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
export var GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum;
(function (GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum) {
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum["GcpRegionalMig"] = "GCP_REGIONAL_MIG";
})(GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum || (GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum = {}));
// GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
var GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput, _super);
    function GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appGateway" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput.prototype, "appGateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput.prototype, "type", void 0);
    return GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput };
// GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
var GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway, _super);
    function GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appGateway" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway.prototype, "appGateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingressPort" }),
        __metadata("design:type", Number)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway.prototype, "ingressPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=l7psc" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway.prototype, "l7psc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway.prototype, "uri", void 0);
    return GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway };

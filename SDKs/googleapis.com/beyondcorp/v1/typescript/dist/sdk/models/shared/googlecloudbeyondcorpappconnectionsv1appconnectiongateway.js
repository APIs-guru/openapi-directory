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
export var GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
(function (GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum) {
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum["GcpRegionalMig"] = "GCP_REGIONAL_MIG";
})(GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum || (GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum = {}));
// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
var GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway, _super);
    function GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appGateway" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway.prototype, "appGateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingressPort" }),
        __metadata("design:type", Number)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway.prototype, "ingressPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=l7psc" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway.prototype, "l7psc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway.prototype, "uri", void 0);
    return GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway };
// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
var GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput, _super);
    function GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appGateway" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput.prototype, "appGateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput.prototype, "type", void 0);
    return GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput };

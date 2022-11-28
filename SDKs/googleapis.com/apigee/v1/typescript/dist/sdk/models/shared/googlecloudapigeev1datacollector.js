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
export var GoogleCloudApigeeV1DataCollectorTypeEnum;
(function (GoogleCloudApigeeV1DataCollectorTypeEnum) {
    GoogleCloudApigeeV1DataCollectorTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudApigeeV1DataCollectorTypeEnum["Integer"] = "INTEGER";
    GoogleCloudApigeeV1DataCollectorTypeEnum["Float"] = "FLOAT";
    GoogleCloudApigeeV1DataCollectorTypeEnum["String"] = "STRING";
    GoogleCloudApigeeV1DataCollectorTypeEnum["Boolean"] = "BOOLEAN";
    GoogleCloudApigeeV1DataCollectorTypeEnum["Datetime"] = "DATETIME";
})(GoogleCloudApigeeV1DataCollectorTypeEnum || (GoogleCloudApigeeV1DataCollectorTypeEnum = {}));
// GoogleCloudApigeeV1DataCollectorInput
/**
 * Data collector configuration.
**/
var GoogleCloudApigeeV1DataCollectorInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1DataCollectorInput, _super);
    function GoogleCloudApigeeV1DataCollectorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DataCollectorInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DataCollectorInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DataCollectorInput.prototype, "type", void 0);
    return GoogleCloudApigeeV1DataCollectorInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1DataCollectorInput };
// GoogleCloudApigeeV1DataCollector
/**
 * Data collector configuration.
**/
var GoogleCloudApigeeV1DataCollector = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1DataCollector, _super);
    function GoogleCloudApigeeV1DataCollector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DataCollector.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DataCollector.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DataCollector.prototype, "lastModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DataCollector.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DataCollector.prototype, "type", void 0);
    return GoogleCloudApigeeV1DataCollector;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1DataCollector };

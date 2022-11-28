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
import { ModeEnum } from "./modeenum";
import { RuntimeEnum } from "./runtimeenum";
// FunctionConfiguration
/**
 * A complex type that describes function metadata.
**/
var FunctionConfiguration = /** @class */ (function (_super) {
    __extends(FunctionConfiguration, _super);
    function FunctionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeSize" }),
        __metadata("design:type", Number)
    ], FunctionConfiguration.prototype, "codeSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigurationId" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "configurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FunctionARN" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "functionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FunctionName" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "functionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Handler" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "handler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModified" }),
        __metadata("design:type", Date)
    ], FunctionConfiguration.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MemorySize" }),
        __metadata("design:type", Number)
    ], FunctionConfiguration.prototype, "memorySize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mode" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Runtime" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "runtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timeout" }),
        __metadata("design:type", Number)
    ], FunctionConfiguration.prototype, "timeout", void 0);
    return FunctionConfiguration;
}(SpeakeasyBase));
export { FunctionConfiguration };

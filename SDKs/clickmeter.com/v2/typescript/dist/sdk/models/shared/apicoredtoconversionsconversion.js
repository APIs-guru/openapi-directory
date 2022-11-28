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
export var ApiCoreDtoConversionsConversionProtocolEnum;
(function (ApiCoreDtoConversionsConversionProtocolEnum) {
    ApiCoreDtoConversionsConversionProtocolEnum["Http"] = "Http";
    ApiCoreDtoConversionsConversionProtocolEnum["Https"] = "Https";
})(ApiCoreDtoConversionsConversionProtocolEnum || (ApiCoreDtoConversionsConversionProtocolEnum = {}));
var ApiCoreDtoConversionsConversion = /** @class */ (function (_super) {
    __extends(ApiCoreDtoConversionsConversion, _super);
    function ApiCoreDtoConversionsConversion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code, form, name=code;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoConversionsConversion.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate, form, name=creationDate;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoConversionsConversion.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted, form, name=deleted;" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoConversionsConversion.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description, form, name=description;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoConversionsConversion.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id, form, name=id;" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoConversionsConversion.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name, form, name=name;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoConversionsConversion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol, form, name=protocol;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoConversionsConversion.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value, form, name=value;" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoConversionsConversion.prototype, "value", void 0);
    return ApiCoreDtoConversionsConversion;
}(SpeakeasyBase));
export { ApiCoreDtoConversionsConversion };

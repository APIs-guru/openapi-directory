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
var OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient = /** @class */ (function (_super) {
    __extends(OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient, _super);
    function OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLocality" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "addressLocality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressRegion" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "addressRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient.prototype, "postalCode", void 0);
    return OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient;
}(SpeakeasyBase));
export { OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient };

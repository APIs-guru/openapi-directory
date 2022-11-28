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
import { ParameterInlinePolicy } from "./parameterinlinepolicy";
import { ParameterTierEnum } from "./parametertierenum";
import { ParameterTypeEnum } from "./parametertypeenum";
// ParameterMetadata
/**
 * Metadata includes information like the ARN of the last user and the date/time the parameter was last used.
**/
var ParameterMetadata = /** @class */ (function (_super) {
    __extends(ParameterMetadata, _super);
    function ParameterMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowedPattern" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "allowedPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataType" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyId" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", Date)
    ], ParameterMetadata.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedUser" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "lastModifiedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Policies", elemType: ParameterInlinePolicy }),
        __metadata("design:type", Array)
    ], ParameterMetadata.prototype, "policies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tier" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], ParameterMetadata.prototype, "version", void 0);
    return ParameterMetadata;
}(SpeakeasyBase));
export { ParameterMetadata };

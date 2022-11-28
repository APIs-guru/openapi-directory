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
import { CustomerMasterKeySpecEnum } from "./customermasterkeyspecenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { OriginTypeEnum } from "./origintypeenum";
import { Tag } from "./tag";
var CreateKeyRequest = /** @class */ (function (_super) {
    __extends(CreateKeyRequest, _super);
    function CreateKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BypassPolicyLockoutSafetyCheck" }),
        __metadata("design:type", Boolean)
    ], CreateKeyRequest.prototype, "bypassPolicyLockoutSafetyCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" }),
        __metadata("design:type", String)
    ], CreateKeyRequest.prototype, "customKeyStoreId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerMasterKeySpec" }),
        __metadata("design:type", String)
    ], CreateKeyRequest.prototype, "customerMasterKeySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateKeyRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeySpec" }),
        __metadata("design:type", String)
    ], CreateKeyRequest.prototype, "keySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyUsage" }),
        __metadata("design:type", String)
    ], CreateKeyRequest.prototype, "keyUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiRegion" }),
        __metadata("design:type", Boolean)
    ], CreateKeyRequest.prototype, "multiRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Origin" }),
        __metadata("design:type", String)
    ], CreateKeyRequest.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Policy" }),
        __metadata("design:type", String)
    ], CreateKeyRequest.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateKeyRequest.prototype, "tags", void 0);
    return CreateKeyRequest;
}(SpeakeasyBase));
export { CreateKeyRequest };

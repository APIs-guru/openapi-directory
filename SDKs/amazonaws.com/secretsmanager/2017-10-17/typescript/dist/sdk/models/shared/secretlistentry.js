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
import { RotationRulesType } from "./rotationrulestype";
import { Tag } from "./tag";
// SecretListEntry
/**
 * A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use the <a>GetSecretValue</a> operation.
**/
var SecretListEntry = /** @class */ (function (_super) {
    __extends(SecretListEntry, _super);
    function SecretListEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ARN" }),
        __metadata("design:type", String)
    ], SecretListEntry.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], SecretListEntry.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeletedDate" }),
        __metadata("design:type", Date)
    ], SecretListEntry.prototype, "deletedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], SecretListEntry.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], SecretListEntry.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastAccessedDate" }),
        __metadata("design:type", Date)
    ], SecretListEntry.prototype, "lastAccessedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastChangedDate" }),
        __metadata("design:type", Date)
    ], SecretListEntry.prototype, "lastChangedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastRotatedDate" }),
        __metadata("design:type", Date)
    ], SecretListEntry.prototype, "lastRotatedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], SecretListEntry.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwningService" }),
        __metadata("design:type", String)
    ], SecretListEntry.prototype, "owningService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryRegion" }),
        __metadata("design:type", String)
    ], SecretListEntry.prototype, "primaryRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RotationEnabled" }),
        __metadata("design:type", Boolean)
    ], SecretListEntry.prototype, "rotationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RotationLambdaARN" }),
        __metadata("design:type", String)
    ], SecretListEntry.prototype, "rotationLambdaArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RotationRules" }),
        __metadata("design:type", RotationRulesType)
    ], SecretListEntry.prototype, "rotationRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretVersionsToStages" }),
        __metadata("design:type", Map)
    ], SecretListEntry.prototype, "secretVersionsToStages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], SecretListEntry.prototype, "tags", void 0);
    return SecretListEntry;
}(SpeakeasyBase));
export { SecretListEntry };

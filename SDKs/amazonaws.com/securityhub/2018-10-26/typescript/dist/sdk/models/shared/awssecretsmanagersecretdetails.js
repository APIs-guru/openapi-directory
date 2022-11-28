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
import { AwsSecretsManagerSecretRotationRules } from "./awssecretsmanagersecretrotationrules";
// AwsSecretsManagerSecretDetails
/**
 * Details about an Secrets Manager secret.
**/
var AwsSecretsManagerSecretDetails = /** @class */ (function (_super) {
    __extends(AwsSecretsManagerSecretDetails, _super);
    function AwsSecretsManagerSecretDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deleted" }),
        __metadata("design:type", Boolean)
    ], AwsSecretsManagerSecretDetails.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], AwsSecretsManagerSecretDetails.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], AwsSecretsManagerSecretDetails.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], AwsSecretsManagerSecretDetails.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RotationEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsSecretsManagerSecretDetails.prototype, "rotationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RotationLambdaArn" }),
        __metadata("design:type", String)
    ], AwsSecretsManagerSecretDetails.prototype, "rotationLambdaArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RotationOccurredWithinFrequency" }),
        __metadata("design:type", Boolean)
    ], AwsSecretsManagerSecretDetails.prototype, "rotationOccurredWithinFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RotationRules" }),
        __metadata("design:type", AwsSecretsManagerSecretRotationRules)
    ], AwsSecretsManagerSecretDetails.prototype, "rotationRules", void 0);
    return AwsSecretsManagerSecretDetails;
}(SpeakeasyBase));
export { AwsSecretsManagerSecretDetails };

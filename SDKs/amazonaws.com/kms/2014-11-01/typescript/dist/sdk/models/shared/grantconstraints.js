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
// GrantConstraints
/**
 * <p>Use this structure to allow <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. </p> <p>KMS applies the grant constraints only to cryptographic operations that support an encryption context, that is, all cryptographic operations with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#symmetric-cmks">symmetric KMS key</a>. Grant constraints are not applied to operations that do not support an encryption context, such as cryptographic operations with asymmetric KMS keys and management operations, such as <a>DescribeKey</a> or <a>RetireGrant</a>.</p> <important> <p>In a cryptographic operation, the encryption context in the decryption operation must be an exact, case-sensitive match for the keys and values in the encryption context of the encryption operation. Only the order of the pairs can vary.</p> <p>However, in a grant constraint, the key in each key-value pair is not case sensitive, but the value is case sensitive.</p> <p>To avoid confusion, do not use multiple encryption context pairs that differ only by case. To require a fully case-sensitive encryption context, use the <code>kms:EncryptionContext:</code> and <code>kms:EncryptionContextKeys</code> conditions in an IAM or key policy. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context">kms:EncryptionContext:</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> </important>
**/
var GrantConstraints = /** @class */ (function (_super) {
    __extends(GrantConstraints, _super);
    function GrantConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionContextEquals" }),
        __metadata("design:type", Map)
    ], GrantConstraints.prototype, "encryptionContextEquals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionContextSubset" }),
        __metadata("design:type", Map)
    ], GrantConstraints.prototype, "encryptionContextSubset", void 0);
    return GrantConstraints;
}(SpeakeasyBase));
export { GrantConstraints };

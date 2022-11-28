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
// AccountQuota
/**
 * <p>Describes a quota for an Amazon Web Services account.</p> <p>The following are account quotas:</p> <ul> <li> <p> <code>AllocatedStorage</code> - The total allocated storage per account, in GiB. The used value is the total allocated storage in the account, in GiB.</p> </li> <li> <p> <code>AuthorizationsPerDBSecurityGroup</code> - The number of ingress rules per DB security group. The used value is the highest number of ingress rules in a DB security group in the account. Other DB security groups in the account might have a lower number of ingress rules.</p> </li> <li> <p> <code>CustomEndpointsPerDBCluster</code> - The number of custom endpoints per DB cluster. The used value is the highest number of custom endpoints in a DB clusters in the account. Other DB clusters in the account might have a lower number of custom endpoints.</p> </li> <li> <p> <code>DBClusterParameterGroups</code> - The number of DB cluster parameter groups per account, excluding default parameter groups. The used value is the count of nondefault DB cluster parameter groups in the account.</p> </li> <li> <p> <code>DBClusterRoles</code> - The number of associated Amazon Web Services Identity and Access Management (IAM) roles per DB cluster. The used value is the highest number of associated IAM roles for a DB cluster in the account. Other DB clusters in the account might have a lower number of associated IAM roles.</p> </li> <li> <p> <code>DBClusters</code> - The number of DB clusters per account. The used value is the count of DB clusters in the account.</p> </li> <li> <p> <code>DBInstanceRoles</code> - The number of associated IAM roles per DB instance. The used value is the highest number of associated IAM roles for a DB instance in the account. Other DB instances in the account might have a lower number of associated IAM roles.</p> </li> <li> <p> <code>DBInstances</code> - The number of DB instances per account. The used value is the count of the DB instances in the account.</p> <p>Amazon RDS DB instances, Amazon Aurora DB instances, Amazon Neptune instances, and Amazon DocumentDB instances apply to this quota.</p> </li> <li> <p> <code>DBParameterGroups</code> - The number of DB parameter groups per account, excluding default parameter groups. The used value is the count of nondefault DB parameter groups in the account.</p> </li> <li> <p> <code>DBSecurityGroups</code> - The number of DB security groups (not VPC security groups) per account, excluding the default security group. The used value is the count of nondefault DB security groups in the account.</p> </li> <li> <p> <code>DBSubnetGroups</code> - The number of DB subnet groups per account. The used value is the count of the DB subnet groups in the account.</p> </li> <li> <p> <code>EventSubscriptions</code> - The number of event subscriptions per account. The used value is the count of the event subscriptions in the account.</p> </li> <li> <p> <code>ManualClusterSnapshots</code> - The number of manual DB cluster snapshots per account. The used value is the count of the manual DB cluster snapshots in the account.</p> </li> <li> <p> <code>ManualSnapshots</code> - The number of manual DB instance snapshots per account. The used value is the count of the manual DB instance snapshots in the account.</p> </li> <li> <p> <code>OptionGroups</code> - The number of DB option groups per account, excluding default option groups. The used value is the count of nondefault DB option groups in the account.</p> </li> <li> <p> <code>ReadReplicasPerMaster</code> - The number of read replicas per DB instance. The used value is the highest number of read replicas for a DB instance in the account. Other DB instances in the account might have a lower number of read replicas.</p> </li> <li> <p> <code>ReservedDBInstances</code> - The number of reserved DB instances per account. The used value is the count of the active reserved DB instances in the account.</p> </li> <li> <p> <code>SubnetsPerDBSubnetGroup</code> - The number of subnets per DB subnet group. The used value is highest number of subnets for a DB subnet group in the account. Other DB subnet groups in the account might have a lower number of subnets.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html">Quotas for Amazon RDS</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html">Quotas for Amazon Aurora</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
var AccountQuota = /** @class */ (function (_super) {
    __extends(AccountQuota, _super);
    function AccountQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccountQuota.prototype, "accountQuotaName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountQuota.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountQuota.prototype, "used", void 0);
    return AccountQuota;
}(SpeakeasyBase));
export { AccountQuota };

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * (Optional) Custom type consisting of a <code>Region</code> (required) and the <code>KmsKeyId</code> which can be an <code>ARN</code>, <code>Key ID</code>, or <code>Alias</code>.
**/
export declare class ReplicaRegionType extends SpeakeasyBase {
    kmsKeyId?: string;
    region?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an instance in the DB cluster.
**/
export declare class AwsRdsDbClusterMember extends SpeakeasyBase {
    dbClusterParameterGroupStatus?: string;
    dbInstanceIdentifier?: string;
    isClusterWriter?: boolean;
    promotionTier?: number;
}

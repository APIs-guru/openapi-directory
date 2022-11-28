import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an Amazon RDS instance.
**/
export declare class RdsDbInstance extends SpeakeasyBase {
    address?: string;
    dbInstanceIdentifier?: string;
    dbPassword?: string;
    dbUser?: string;
    engine?: string;
    missingOnRds?: boolean;
    rdsDbInstanceArn?: string;
    region?: string;
    stackId?: string;
}

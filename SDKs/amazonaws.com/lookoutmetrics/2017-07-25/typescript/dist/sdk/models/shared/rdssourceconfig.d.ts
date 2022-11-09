import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcConfiguration } from "./vpcconfiguration";
/**
 * Contains information about the Amazon Relational Database Service (RDS) configuration.
**/
export declare class RdsSourceConfig extends SpeakeasyBase {
    dbInstanceIdentifier: string;
    databaseHost: string;
    databaseName: string;
    databasePort: number;
    roleArn: string;
    secretManagerArn: string;
    tableName: string;
    vpcConfiguration: VpcConfiguration;
}

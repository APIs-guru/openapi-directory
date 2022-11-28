import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfiguration } from "./vpcconfiguration";
/**
 * Provides information about the Amazon Redshift database configuration.
**/
export declare class RedshiftSourceConfig extends SpeakeasyBase {
    clusterIdentifier: string;
    databaseHost: string;
    databaseName: string;
    databasePort: number;
    roleArn: string;
    secretManagerArn: string;
    tableName: string;
    vpcConfiguration: VpcConfiguration;
}

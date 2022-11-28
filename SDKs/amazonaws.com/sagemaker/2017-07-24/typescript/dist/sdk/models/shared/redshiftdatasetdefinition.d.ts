import { SpeakeasyBase } from "../../../internal/utils";
import { RedshiftResultCompressionTypeEnum } from "./redshiftresultcompressiontypeenum";
import { RedshiftResultFormatEnum } from "./redshiftresultformatenum";
/**
 * Configuration for Redshift Dataset Definition input.
**/
export declare class RedshiftDatasetDefinition extends SpeakeasyBase {
    clusterId: string;
    clusterRoleArn: string;
    database: string;
    dbUser: string;
    kmsKeyId?: string;
    outputCompression?: RedshiftResultCompressionTypeEnum;
    outputFormat: RedshiftResultFormatEnum;
    outputS3Uri: string;
    queryString: string;
}

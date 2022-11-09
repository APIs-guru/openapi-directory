import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RedshiftResultCompressionTypeEnum } from "./redshiftresultcompressiontypeenum";
import { RedshiftResultFormatEnum } from "./redshiftresultformatenum";


// RedshiftDatasetDefinition
/** 
 * Configuration for Redshift Dataset Definition input.
**/
export class RedshiftDatasetDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=ClusterRoleArn" })
  clusterRoleArn: string;

  @Metadata({ data: "json, name=Database" })
  database: string;

  @Metadata({ data: "json, name=DbUser" })
  dbUser: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=OutputCompression" })
  outputCompression?: RedshiftResultCompressionTypeEnum;

  @Metadata({ data: "json, name=OutputFormat" })
  outputFormat: RedshiftResultFormatEnum;

  @Metadata({ data: "json, name=OutputS3Uri" })
  outputS3Uri: string;

  @Metadata({ data: "json, name=QueryString" })
  queryString: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RedshiftResultCompressionTypeEnum } from "./redshiftresultcompressiontypeenum";
import { RedshiftResultFormatEnum } from "./redshiftresultformatenum";



// RedshiftDatasetDefinition
/** 
 * Configuration for Redshift Dataset Definition input.
**/
export class RedshiftDatasetDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterRoleArn" })
  clusterRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database: string;

  @SpeakeasyMetadata({ data: "json, name=DbUser" })
  dbUser: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputCompression" })
  outputCompression?: RedshiftResultCompressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=OutputFormat" })
  outputFormat: RedshiftResultFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=OutputS3Uri" })
  outputS3Uri: string;

  @SpeakeasyMetadata({ data: "json, name=QueryString" })
  queryString: string;
}

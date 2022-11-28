import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AthenaResultCompressionTypeEnum } from "./athenaresultcompressiontypeenum";
import { AthenaResultFormatEnum } from "./athenaresultformatenum";



// AthenaDatasetDefinition
/** 
 * Configuration for Athena Dataset Definition input.
**/
export class AthenaDatasetDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Catalog" })
  catalog: string;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputCompression" })
  outputCompression?: AthenaResultCompressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=OutputFormat" })
  outputFormat: AthenaResultFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=OutputS3Uri" })
  outputS3Uri: string;

  @SpeakeasyMetadata({ data: "json, name=QueryString" })
  queryString: string;

  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}

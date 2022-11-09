import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AthenaResultCompressionTypeEnum } from "./athenaresultcompressiontypeenum";
import { AthenaResultFormatEnum } from "./athenaresultformatenum";


// AthenaDatasetDefinition
/** 
 * Configuration for Athena Dataset Definition input.
**/
export class AthenaDatasetDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Catalog" })
  catalog: string;

  @Metadata({ data: "json, name=Database" })
  database: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=OutputCompression" })
  outputCompression?: AthenaResultCompressionTypeEnum;

  @Metadata({ data: "json, name=OutputFormat" })
  outputFormat: AthenaResultFormatEnum;

  @Metadata({ data: "json, name=OutputS3Uri" })
  outputS3Uri: string;

  @Metadata({ data: "json, name=QueryString" })
  queryString: string;

  @Metadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}

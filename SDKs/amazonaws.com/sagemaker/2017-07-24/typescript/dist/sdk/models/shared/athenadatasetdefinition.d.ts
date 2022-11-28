import { SpeakeasyBase } from "../../../internal/utils";
import { AthenaResultCompressionTypeEnum } from "./athenaresultcompressiontypeenum";
import { AthenaResultFormatEnum } from "./athenaresultformatenum";
/**
 * Configuration for Athena Dataset Definition input.
**/
export declare class AthenaDatasetDefinition extends SpeakeasyBase {
    catalog: string;
    database: string;
    kmsKeyId?: string;
    outputCompression?: AthenaResultCompressionTypeEnum;
    outputFormat: AthenaResultFormatEnum;
    outputS3Uri: string;
    queryString: string;
    workGroup?: string;
}

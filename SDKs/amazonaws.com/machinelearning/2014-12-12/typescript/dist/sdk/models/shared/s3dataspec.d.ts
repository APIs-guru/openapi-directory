import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Describes the data specification of a <code>DataSource</code>.
**/
export declare class S3DataSpec extends SpeakeasyBase {
    dataLocationS3: string;
    dataRearrangement?: string;
    dataSchema?: string;
    dataSchemaLocationS3?: string;
}

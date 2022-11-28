import { SpeakeasyBase } from "../../../internal/utils";
import { SupportDataSetTypeEnum } from "./supportdatasettypeenum";
/**
 * Container for the parameters to the StartSupportDataExport operation.
**/
export declare class StartSupportDataExportRequest extends SpeakeasyBase {
    customerDefinedValues?: Map<string, string>;
    dataSetType: SupportDataSetTypeEnum;
    destinationS3BucketName: string;
    destinationS3Prefix?: string;
    fromDate: Date;
    roleNameArn: string;
    snsTopicArn: string;
}

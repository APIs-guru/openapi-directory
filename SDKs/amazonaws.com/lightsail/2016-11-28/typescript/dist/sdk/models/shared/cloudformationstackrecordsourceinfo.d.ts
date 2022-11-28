import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationStackRecordSourceTypeEnum } from "./cloudformationstackrecordsourcetypeenum";
/**
 * Describes the source of a CloudFormation stack record (i.e., the export snapshot record).
**/
export declare class CloudFormationStackRecordSourceInfo extends SpeakeasyBase {
    arn?: string;
    name?: string;
    resourceType?: CloudFormationStackRecordSourceTypeEnum;
}

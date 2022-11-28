import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationStackRecordSourceTypeEnum } from "./cloudformationstackrecordsourcetypeenum";



// CloudFormationStackRecordSourceInfo
/** 
 * Describes the source of a CloudFormation stack record (i.e., the export snapshot record).
**/
export class CloudFormationStackRecordSourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: CloudFormationStackRecordSourceTypeEnum;
}

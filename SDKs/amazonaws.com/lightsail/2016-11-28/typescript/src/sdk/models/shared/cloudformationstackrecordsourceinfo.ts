import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudFormationStackRecordSourceTypeEnum } from "./cloudformationstackrecordsourcetypeenum";


// CloudFormationStackRecordSourceInfo
/** 
 * Describes the source of a CloudFormation stack record (i.e., the export snapshot record).
**/
export class CloudFormationStackRecordSourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: CloudFormationStackRecordSourceTypeEnum;
}

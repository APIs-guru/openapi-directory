import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationInfo } from "./destinationinfo";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { CloudFormationStackRecordSourceInfo } from "./cloudformationstackrecordsourceinfo";
import { RecordStateEnum } from "./recordstateenum";



// CloudFormationStackRecord
/** 
 * <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> action.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>
**/
export class CloudFormationStackRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=destinationInfo" })
  destinationInfo?: DestinationInfo;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceInfo", elemType: CloudFormationStackRecordSourceInfo })
  sourceInfo?: CloudFormationStackRecordSourceInfo[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: RecordStateEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=destinationInfo" })
  destinationInfo?: DestinationInfo;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=sourceInfo", elemType: shared.CloudFormationStackRecordSourceInfo })
  sourceInfo?: CloudFormationStackRecordSourceInfo[];

  @Metadata({ data: "json, name=state" })
  state?: RecordStateEnum;
}

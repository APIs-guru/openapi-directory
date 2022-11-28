import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";



// Resource
/** 
 * Describes a resource associated with a resource share.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceGroupArn" })
  resourceGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareArn" })
  resourceShareArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ResourceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

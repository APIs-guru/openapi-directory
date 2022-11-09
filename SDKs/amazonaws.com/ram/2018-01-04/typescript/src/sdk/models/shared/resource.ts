import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";


// Resource
/** 
 * Describes a resource associated with a resource share.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=resourceGroupArn" })
  resourceGroupArn?: string;

  @Metadata({ data: "json, name=resourceShareArn" })
  resourceShareArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: ResourceStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

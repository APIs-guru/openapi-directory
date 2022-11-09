import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Destination
/** 
 * Represents a cross-account destination that receives subscription log events.
**/
export class Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicy" })
  accessPolicy?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: number;

  @Metadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=targetArn" })
  targetArn?: string;
}

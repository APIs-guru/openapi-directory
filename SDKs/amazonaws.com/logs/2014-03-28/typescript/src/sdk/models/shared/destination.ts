import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Destination
/** 
 * Represents a cross-account destination that receives subscription log events.
**/
export class Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicy" })
  accessPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn?: string;
}

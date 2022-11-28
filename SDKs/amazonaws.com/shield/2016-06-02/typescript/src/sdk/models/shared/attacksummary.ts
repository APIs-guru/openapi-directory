import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttackVectorDescription } from "./attackvectordescription";



// AttackSummary
/** 
 * Summarizes all DDoS attacks for a specified time period.
**/
export class AttackSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttackId" })
  attackId?: string;

  @SpeakeasyMetadata({ data: "json, name=AttackVectors", elemType: AttackVectorDescription })
  attackVectors?: AttackVectorDescription[];

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}

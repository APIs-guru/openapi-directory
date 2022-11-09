import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttackVectorDescription } from "./attackvectordescription";


// AttackSummary
/** 
 * Summarizes all DDoS attacks for a specified time period.
**/
export class AttackSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttackId" })
  attackId?: string;

  @Metadata({ data: "json, name=AttackVectors", elemType: shared.AttackVectorDescription })
  attackVectors?: AttackVectorDescription[];

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}

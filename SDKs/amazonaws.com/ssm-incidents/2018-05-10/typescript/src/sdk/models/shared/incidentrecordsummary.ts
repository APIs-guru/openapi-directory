import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IncidentRecordSource } from "./incidentrecordsource";
import { IncidentRecordStatusEnum } from "./incidentrecordstatusenum";


// IncidentRecordSummary
/** 
 * Details describing an incident record.
**/
export class IncidentRecordSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=impact" })
  impact: number;

  @Metadata({ data: "json, name=incidentRecordSource" })
  incidentRecordSource: IncidentRecordSource;

  @Metadata({ data: "json, name=resolvedTime" })
  resolvedTime?: Date;

  @Metadata({ data: "json, name=status" })
  status: IncidentRecordStatusEnum;

  @Metadata({ data: "json, name=title" })
  title: string;
}

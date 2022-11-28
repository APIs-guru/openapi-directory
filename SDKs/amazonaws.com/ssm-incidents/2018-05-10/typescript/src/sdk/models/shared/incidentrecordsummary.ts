import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IncidentRecordSource } from "./incidentrecordsource";
import { IncidentRecordStatusEnum } from "./incidentrecordstatusenum";



// IncidentRecordSummary
/** 
 * Details describing an incident record.
**/
export class IncidentRecordSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=impact" })
  impact: number;

  @SpeakeasyMetadata({ data: "json, name=incidentRecordSource" })
  incidentRecordSource: IncidentRecordSource;

  @SpeakeasyMetadata({ data: "json, name=resolvedTime" })
  resolvedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: IncidentRecordStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

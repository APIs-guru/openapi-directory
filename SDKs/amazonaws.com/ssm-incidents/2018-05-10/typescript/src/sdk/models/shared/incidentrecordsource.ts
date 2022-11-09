import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IncidentRecordSource
/** 
 * Details about how the incident record was created and when.
**/
export class IncidentRecordSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdBy" })
  createdBy: string;

  @Metadata({ data: "json, name=invokedBy" })
  invokedBy?: string;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=source" })
  source: string;
}

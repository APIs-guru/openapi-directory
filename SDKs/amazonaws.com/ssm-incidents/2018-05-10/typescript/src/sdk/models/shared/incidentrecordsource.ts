import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IncidentRecordSource
/** 
 * Details about how the incident record was created and when.
**/
export class IncidentRecordSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy: string;

  @SpeakeasyMetadata({ data: "json, name=invokedBy" })
  invokedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;
}

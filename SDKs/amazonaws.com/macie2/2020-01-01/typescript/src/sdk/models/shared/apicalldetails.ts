import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiCallDetails
/** 
 * Provides information about an API operation that an entity invoked for an affected resource.
**/
export class ApiCallDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: string;

  @SpeakeasyMetadata({ data: "json, name=apiServiceName" })
  apiServiceName?: string;

  @SpeakeasyMetadata({ data: "json, name=firstSeen" })
  firstSeen?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastSeen" })
  lastSeen?: Date;
}

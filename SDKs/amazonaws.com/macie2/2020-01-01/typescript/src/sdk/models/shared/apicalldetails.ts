import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiCallDetails
/** 
 * Provides information about an API operation that an entity invoked for an affected resource.
**/
export class ApiCallDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: string;

  @Metadata({ data: "json, name=apiServiceName" })
  apiServiceName?: string;

  @Metadata({ data: "json, name=firstSeen" })
  firstSeen?: Date;

  @Metadata({ data: "json, name=lastSeen" })
  lastSeen?: Date;
}

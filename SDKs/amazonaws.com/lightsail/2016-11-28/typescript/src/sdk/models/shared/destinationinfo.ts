import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DestinationInfo
/** 
 * Describes the destination of a record.
**/
export class DestinationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinationInfo
/** 
 * Describes the destination of a record.
**/
export class DestinationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}

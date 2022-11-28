import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelationalDatabaseEvent
/** 
 * Describes an event for a database.
**/
export class RelationalDatabaseEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=eventCategories" })
  eventCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}

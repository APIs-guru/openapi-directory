import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelationalDatabaseEvent
/** 
 * Describes an event for a database.
**/
export class RelationalDatabaseEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=eventCategories" })
  eventCategories?: string[];

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntentMetadata
/** 
 * Provides information about an intent.
**/
export class IntentMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}

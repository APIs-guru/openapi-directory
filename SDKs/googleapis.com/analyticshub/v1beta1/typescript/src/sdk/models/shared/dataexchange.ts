import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataExchange
/** 
 * A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.
**/
export class DataExchange extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=documentation" })
  documentation?: string;

  @Metadata({ data: "json, name=icon" })
  icon?: string;

  @Metadata({ data: "json, name=listingCount" })
  listingCount?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primaryContact" })
  primaryContact?: string;
}

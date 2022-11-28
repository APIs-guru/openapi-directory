import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataExchange
/** 
 * A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.
**/
export class DataExchange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=listingCount" })
  listingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContact" })
  primaryContact?: string;
}


// DataExchangeInput
/** 
 * A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.
**/
export class DataExchangeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContact" })
  primaryContact?: string;
}

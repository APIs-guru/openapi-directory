import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomChannel
/** 
 * Representation of a custom channel.
**/
export class CustomChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingDimensionId" })
  reportingDimensionId?: string;
}


// CustomChannelInput
/** 
 * Representation of a custom channel.
**/
export class CustomChannelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomChannel
/** 
 * Representation of a custom channel.
**/
export class CustomChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reportingDimensionId" })
  reportingDimensionId?: string;
}

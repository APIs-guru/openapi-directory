import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ViewBillingRequest
/** 
 * The ViewBilling request includes the following elements.
**/
export class ViewBillingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=End" })
  end?: Date;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "json, name=Start" })
  start?: Date;
}

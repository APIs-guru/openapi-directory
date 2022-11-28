import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ViewBillingRequest
/** 
 * The ViewBilling request includes the following elements.
**/
export class ViewBillingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=End" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "json, name=Start" })
  start?: Date;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dpc
/** 
 * An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play.
**/
export class Dpc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dpcName" })
  dpcName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}

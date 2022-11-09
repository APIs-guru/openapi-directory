import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dpc
/** 
 * An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play.
**/
export class Dpc extends SpeakeasyBase {
  @Metadata({ data: "json, name=dpcName" })
  dpcName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;
}

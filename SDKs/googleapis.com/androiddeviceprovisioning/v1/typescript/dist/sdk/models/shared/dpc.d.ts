import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play.
**/
export declare class Dpc extends SpeakeasyBase {
    dpcName?: string;
    name?: string;
    packageName?: string;
}

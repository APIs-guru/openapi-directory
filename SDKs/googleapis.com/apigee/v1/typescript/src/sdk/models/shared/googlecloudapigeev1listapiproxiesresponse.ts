import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ApiProxy } from "./googlecloudapigeev1apiproxy";



// GoogleCloudApigeeV1ListApiProxiesResponse
/** 
 * To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui
**/
export class GoogleCloudApigeeV1ListApiProxiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proxies", elemType: GoogleCloudApigeeV1ApiProxy })
  proxies?: GoogleCloudApigeeV1ApiProxy[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ApiProxy } from "./googlecloudapigeev1apiproxy";


// GoogleCloudApigeeV1ListApiProxiesResponse
/** 
 * To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui
**/
export class GoogleCloudApigeeV1ListApiProxiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=proxies", elemType: shared.GoogleCloudApigeeV1ApiProxy })
  proxies?: GoogleCloudApigeeV1ApiProxy[];
}

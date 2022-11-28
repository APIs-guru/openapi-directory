import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SharedFlow } from "./googlecloudapigeev1sharedflow";



// GoogleCloudApigeeV1ListSharedFlowsResponse
/** 
 * To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui
**/
export class GoogleCloudApigeeV1ListSharedFlowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sharedFlows", elemType: GoogleCloudApigeeV1SharedFlow })
  sharedFlows?: GoogleCloudApigeeV1SharedFlow[];
}

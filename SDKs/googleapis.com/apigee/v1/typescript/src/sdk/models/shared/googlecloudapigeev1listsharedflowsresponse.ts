import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1SharedFlow } from "./googlecloudapigeev1sharedflow";


// GoogleCloudApigeeV1ListSharedFlowsResponse
/** 
 * To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui
**/
export class GoogleCloudApigeeV1ListSharedFlowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=sharedFlows", elemType: shared.GoogleCloudApigeeV1SharedFlow })
  sharedFlows?: GoogleCloudApigeeV1SharedFlow[];
}

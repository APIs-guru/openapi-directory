import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1RevisionStatus } from "./googlecloudapigeev1revisionstatus";



// GoogleCloudApigeeV1ResourceStatus
/** 
 * The status of a resource loaded in the runtime.
**/
export class GoogleCloudApigeeV1ResourceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=revisions", elemType: GoogleCloudApigeeV1RevisionStatus })
  revisions?: GoogleCloudApigeeV1RevisionStatus[];

  @SpeakeasyMetadata({ data: "json, name=totalReplicas" })
  totalReplicas?: number;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}

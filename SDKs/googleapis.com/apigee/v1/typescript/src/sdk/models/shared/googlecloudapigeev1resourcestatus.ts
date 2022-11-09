import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1RevisionStatus } from "./googlecloudapigeev1revisionstatus";


// GoogleCloudApigeeV1ResourceStatus
/** 
 * The status of a resource loaded in the runtime.
**/
export class GoogleCloudApigeeV1ResourceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=revisions", elemType: shared.GoogleCloudApigeeV1RevisionStatus })
  revisions?: GoogleCloudApigeeV1RevisionStatus[];

  @Metadata({ data: "json, name=totalReplicas" })
  totalReplicas?: number;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}

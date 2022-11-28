import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1UpdateError } from "./googlecloudapigeev1updateerror";



// GoogleCloudApigeeV1RevisionStatus
/** 
 * The status of a specific resource revision.
**/
export class GoogleCloudApigeeV1RevisionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GoogleCloudApigeeV1UpdateError })
  errors?: GoogleCloudApigeeV1UpdateError[];

  @SpeakeasyMetadata({ data: "json, name=jsonSpec" })
  jsonSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=replicas" })
  replicas?: number;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}

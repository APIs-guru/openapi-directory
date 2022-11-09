import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1UpdateError } from "./googlecloudapigeev1updateerror";


// GoogleCloudApigeeV1RevisionStatus
/** 
 * The status of a specific resource revision.
**/
export class GoogleCloudApigeeV1RevisionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.GoogleCloudApigeeV1UpdateError })
  errors?: GoogleCloudApigeeV1UpdateError[];

  @Metadata({ data: "json, name=jsonSpec" })
  jsonSpec?: string;

  @Metadata({ data: "json, name=replicas" })
  replicas?: number;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}

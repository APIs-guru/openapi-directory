import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1ArchiveDeployment
/** 
 * Archive Deployment information.
**/
export class GoogleCloudApigeeV1ArchiveDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=gcsUri" })
  gcsUri?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}

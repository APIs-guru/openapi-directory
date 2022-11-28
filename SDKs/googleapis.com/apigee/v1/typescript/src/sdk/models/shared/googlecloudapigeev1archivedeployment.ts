import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1ArchiveDeploymentInput
/** 
 * Archive Deployment information.
**/
export class GoogleCloudApigeeV1ArchiveDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsUri" })
  gcsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleCloudApigeeV1ArchiveDeployment
/** 
 * Archive Deployment information.
**/
export class GoogleCloudApigeeV1ArchiveDeployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsUri" })
  gcsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}

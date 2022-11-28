import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision
/** 
 * Revisions deployed in the MPs.
**/
export class GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;
}

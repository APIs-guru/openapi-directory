import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision
/** 
 * Revisions deployed in the MPs.
**/
export class GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=revision" })
  revision?: string;
}

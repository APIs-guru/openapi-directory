import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningEnum } from "./provisioningenum";



// ServiceTemplateSummary
/** 
 * The service template summary data.
**/
export class ServiceTemplateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineProvisioning" })
  pipelineProvisioning?: ProvisioningEnum;

  @SpeakeasyMetadata({ data: "json, name=recommendedVersion" })
  recommendedVersion?: string;
}

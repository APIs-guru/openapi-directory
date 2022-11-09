import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningEnum } from "./provisioningenum";


// ServiceTemplate
/** 
 * The service template detail data.
**/
export class ServiceTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pipelineProvisioning" })
  pipelineProvisioning?: ProvisioningEnum;

  @Metadata({ data: "json, name=recommendedVersion" })
  recommendedVersion?: string;
}

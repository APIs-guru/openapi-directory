import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningEnum } from "./provisioningenum";


// EnvironmentTemplateSummary
/** 
 * The environment template data.
**/
export class EnvironmentTemplateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=provisioning" })
  provisioning?: ProvisioningEnum;

  @Metadata({ data: "json, name=recommendedVersion" })
  recommendedVersion?: string;
}

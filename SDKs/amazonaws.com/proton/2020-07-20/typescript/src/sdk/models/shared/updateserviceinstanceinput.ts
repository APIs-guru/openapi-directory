import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentUpdateTypeEnum } from "./deploymentupdatetypeenum";


export class UpdateServiceInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentType" })
  deploymentType: DeploymentUpdateTypeEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;

  @Metadata({ data: "json, name=spec" })
  spec?: string;

  @Metadata({ data: "json, name=templateMajorVersion" })
  templateMajorVersion?: string;

  @Metadata({ data: "json, name=templateMinorVersion" })
  templateMinorVersion?: string;
}

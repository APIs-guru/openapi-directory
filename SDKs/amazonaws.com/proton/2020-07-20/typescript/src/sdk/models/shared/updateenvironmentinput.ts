import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentUpdateTypeEnum } from "./deploymentupdatetypeenum";


export class UpdateEnvironmentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentType" })
  deploymentType: DeploymentUpdateTypeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environmentAccountConnectionId" })
  environmentAccountConnectionId?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protonServiceRoleArn" })
  protonServiceRoleArn?: string;

  @Metadata({ data: "json, name=spec" })
  spec?: string;

  @Metadata({ data: "json, name=templateMajorVersion" })
  templateMajorVersion?: string;

  @Metadata({ data: "json, name=templateMinorVersion" })
  templateMinorVersion?: string;
}

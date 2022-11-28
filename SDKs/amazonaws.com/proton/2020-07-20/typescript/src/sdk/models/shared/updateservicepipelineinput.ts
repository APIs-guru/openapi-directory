import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentUpdateTypeEnum } from "./deploymentupdatetypeenum";



export class UpdateServicePipelineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentType" })
  deploymentType: DeploymentUpdateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: string;

  @SpeakeasyMetadata({ data: "json, name=templateMajorVersion" })
  templateMajorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=templateMinorVersion" })
  templateMinorVersion?: string;
}

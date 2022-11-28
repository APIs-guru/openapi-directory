import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";



export class CancelEnvironmentDeploymentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment: Environment;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";



export class CreateEnvironmentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment: Environment;
}

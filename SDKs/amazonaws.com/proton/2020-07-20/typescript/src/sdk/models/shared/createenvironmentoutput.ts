import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Environment } from "./environment";


export class CreateEnvironmentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment: Environment;
}

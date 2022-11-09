import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Environment } from "./environment";


export class DeleteEnvironmentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: Environment;
}

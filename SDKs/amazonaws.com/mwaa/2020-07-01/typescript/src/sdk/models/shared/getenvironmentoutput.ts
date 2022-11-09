import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Environment } from "./environment";


export class GetEnvironmentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Environment" })
  environment?: Environment;
}

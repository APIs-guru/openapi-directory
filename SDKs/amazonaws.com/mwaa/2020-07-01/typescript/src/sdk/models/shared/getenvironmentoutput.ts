import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";



export class GetEnvironmentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Environment;
}

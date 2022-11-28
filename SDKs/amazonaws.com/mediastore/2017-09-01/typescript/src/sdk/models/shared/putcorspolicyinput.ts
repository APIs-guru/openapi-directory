import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CorsRule } from "./corsrule";



export class PutCorsPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;

  @SpeakeasyMetadata({ data: "json, name=CorsPolicy", elemType: CorsRule })
  corsPolicy: CorsRule[];
}

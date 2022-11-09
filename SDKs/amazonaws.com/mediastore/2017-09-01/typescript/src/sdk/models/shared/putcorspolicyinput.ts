import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CorsRule } from "./corsrule";


export class PutCorsPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;

  @Metadata({ data: "json, name=CorsPolicy", elemType: shared.CorsRule })
  corsPolicy: CorsRule[];
}

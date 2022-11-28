import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CorsRule } from "./corsrule";



export class GetCorsPolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CorsPolicy", elemType: CorsRule })
  corsPolicy: CorsRule[];
}

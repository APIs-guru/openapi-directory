import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CorsRule } from "./corsrule";


export class GetCorsPolicyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CorsPolicy", elemType: shared.CorsRule })
  corsPolicy: CorsRule[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrantConstraints } from "./grantconstraints";
import { GrantOperationEnum } from "./grantoperationenum";


export class CreateGrantRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Constraints" })
  constraints?: GrantConstraints;

  @Metadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @Metadata({ data: "json, name=GranteePrincipal" })
  granteePrincipal: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Operations" })
  operations: GrantOperationEnum[];

  @Metadata({ data: "json, name=RetiringPrincipal" })
  retiringPrincipal?: string;
}

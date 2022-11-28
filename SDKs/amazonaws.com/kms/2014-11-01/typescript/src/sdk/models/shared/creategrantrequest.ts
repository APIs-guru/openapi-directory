import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrantConstraints } from "./grantconstraints";
import { GrantOperationEnum } from "./grantoperationenum";



export class CreateGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Constraints" })
  constraints?: GrantConstraints;

  @SpeakeasyMetadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @SpeakeasyMetadata({ data: "json, name=GranteePrincipal" })
  granteePrincipal: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Operations" })
  operations: GrantOperationEnum[];

  @SpeakeasyMetadata({ data: "json, name=RetiringPrincipal" })
  retiringPrincipal?: string;
}

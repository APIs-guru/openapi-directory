import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EulaAcceptance } from "./eulaacceptance";


export class AcceptEulasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=eulaAcceptances", elemType: shared.EulaAcceptance })
  eulaAcceptances?: EulaAcceptance[];
}

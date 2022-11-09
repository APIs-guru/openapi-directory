import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnPolicy } from "./returnpolicy";
import { Error } from "./error";


export class ReturnPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=returnPolicies", elemType: shared.ReturnPolicy })
  returnPolicies?: ReturnPolicy[];

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}

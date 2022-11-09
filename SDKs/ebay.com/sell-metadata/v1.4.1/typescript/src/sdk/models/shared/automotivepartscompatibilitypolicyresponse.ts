import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutomotivePartsCompatibilityPolicy } from "./automotivepartscompatibilitypolicy";
import { Error } from "./error";


export class AutomotivePartsCompatibilityPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=automotivePartsCompatibilityPolicies", elemType: shared.AutomotivePartsCompatibilityPolicy })
  automotivePartsCompatibilityPolicies?: AutomotivePartsCompatibilityPolicy[];

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomotivePartsCompatibilityPolicy } from "./automotivepartscompatibilitypolicy";
import { Error } from "./error";



export class AutomotivePartsCompatibilityPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automotivePartsCompatibilityPolicies", elemType: AutomotivePartsCompatibilityPolicy })
  automotivePartsCompatibilityPolicies?: AutomotivePartsCompatibilityPolicy[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";



export class GetParametersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvalidParameters" })
  invalidParameters?: string[];

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: Parameter })
  parameters?: Parameter[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Parameter } from "./parameter";


export class GetParametersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InvalidParameters" })
  invalidParameters?: string[];

  @Metadata({ data: "json, name=Parameters", elemType: shared.Parameter })
  parameters?: Parameter[];
}

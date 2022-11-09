import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyDependenciesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dependencies" })
  dependencies?: string[];
}

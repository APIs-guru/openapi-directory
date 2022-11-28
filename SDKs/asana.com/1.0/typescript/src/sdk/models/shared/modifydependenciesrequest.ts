import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyDependenciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dependencies" })
  dependencies?: string[];
}

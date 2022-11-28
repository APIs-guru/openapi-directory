import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextName" })
  contextName: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=PropertiesToRemove" })
  propertiesToRemove?: string[];
}

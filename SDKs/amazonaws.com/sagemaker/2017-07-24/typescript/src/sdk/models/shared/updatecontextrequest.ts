import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateContextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextName" })
  contextName: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=PropertiesToRemove" })
  propertiesToRemove?: string[];
}

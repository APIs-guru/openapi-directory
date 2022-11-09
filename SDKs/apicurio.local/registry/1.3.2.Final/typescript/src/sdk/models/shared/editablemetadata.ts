import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EditableMetaData extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}

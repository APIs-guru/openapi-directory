import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomFieldSettingCompact extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

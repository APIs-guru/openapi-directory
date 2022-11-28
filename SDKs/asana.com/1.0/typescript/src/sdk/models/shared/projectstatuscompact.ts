import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProjectStatusCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WorkspaceCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class WorkspaceCompactInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

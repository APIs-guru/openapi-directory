import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachmentCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: any;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

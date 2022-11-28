import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainerApiMetadataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainerApiMetadataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListLoggingConfigurationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}

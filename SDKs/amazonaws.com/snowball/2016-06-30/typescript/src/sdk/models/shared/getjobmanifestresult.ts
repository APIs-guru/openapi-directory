import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobManifestResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ManifestURI" })
  manifestUri?: string;
}

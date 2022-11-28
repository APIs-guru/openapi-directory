import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobManifestResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ManifestURI" })
  manifestUri?: string;
}

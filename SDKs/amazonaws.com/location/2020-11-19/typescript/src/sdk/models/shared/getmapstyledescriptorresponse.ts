import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMapStyleDescriptorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blob" })
  blob?: string;
}

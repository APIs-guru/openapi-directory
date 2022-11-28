import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudApigeeV1ApiProductRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiproduct" })
  apiproduct?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

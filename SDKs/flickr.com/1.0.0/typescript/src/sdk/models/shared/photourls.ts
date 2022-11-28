import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PhotoUrLs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=h" })
  h?: string;

  @SpeakeasyMetadata({ data: "json, name=l" })
  l?: string;

  @SpeakeasyMetadata({ data: "json, name=s" })
  s?: string;

  @SpeakeasyMetadata({ data: "json, name=t" })
  t?: string;
}

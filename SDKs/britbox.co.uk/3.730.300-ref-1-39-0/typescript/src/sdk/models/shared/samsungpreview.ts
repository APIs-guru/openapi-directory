import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamsungPreviewSection } from "./samsungpreviewsection";



export class SamsungPreview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: number;

  @SpeakeasyMetadata({ data: "json, name=expires_only" })
  expiresOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sections", elemType: SamsungPreviewSection })
  sections: SamsungPreviewSection[];
}

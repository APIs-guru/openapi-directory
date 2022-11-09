import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SamsungPreviewSection } from "./samsungpreviewsection";


export class SamsungPreview extends SpeakeasyBase {
  @Metadata({ data: "json, name=expires" })
  expires?: number;

  @Metadata({ data: "json, name=expires_only" })
  expiresOnly?: boolean;

  @Metadata({ data: "json, name=sections", elemType: shared.SamsungPreviewSection })
  sections: SamsungPreviewSection[];
}

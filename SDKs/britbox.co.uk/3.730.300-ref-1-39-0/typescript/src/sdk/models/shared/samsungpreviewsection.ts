import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SamsungPreviewSectionTile } from "./samsungpreviewsectiontile";


export class SamsungPreviewSection extends SpeakeasyBase {
  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=tiles", elemType: shared.SamsungPreviewSectionTile })
  tiles: SamsungPreviewSectionTile[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}

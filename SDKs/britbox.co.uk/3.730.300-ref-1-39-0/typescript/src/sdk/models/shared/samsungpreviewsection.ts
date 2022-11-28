import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamsungPreviewSectionTile } from "./samsungpreviewsectiontile";



export class SamsungPreviewSection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=tiles", elemType: SamsungPreviewSectionTile })
  tiles: SamsungPreviewSectionTile[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

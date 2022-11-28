import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListingStructurePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;

  @SpeakeasyMetadata({ data: "json, name=variationsSupported" })
  variationsSupported?: boolean;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListingStructurePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;

  @Metadata({ data: "json, name=variationsSupported" })
  variationsSupported?: boolean;
}

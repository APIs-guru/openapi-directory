import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OwnerTypeGroupDto } from "./ownertypegroupdto";



export class PageResultOwnerTypeGroupDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: OwnerTypeGroupDto })
  items?: OwnerTypeGroupDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OwnerTypeDto } from "./ownertypedto";



export class PageResultOwnerTypeDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: OwnerTypeDto })
  items?: OwnerTypeDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}

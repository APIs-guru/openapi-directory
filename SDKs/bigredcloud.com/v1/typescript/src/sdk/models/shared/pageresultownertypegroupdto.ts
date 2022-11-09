import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OwnerTypeGroupDto } from "./ownertypegroupdto";


export class PageResultOwnerTypeGroupDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.OwnerTypeGroupDto })
  items?: OwnerTypeGroupDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OwnerTypeDto } from "./ownertypedto";


export class PageResultOwnerTypeDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.OwnerTypeDto })
  items?: OwnerTypeDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}

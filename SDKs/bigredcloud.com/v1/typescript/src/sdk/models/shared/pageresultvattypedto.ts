import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VatTypeDto } from "./vattypedto";


export class PageResultVatTypeDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.VatTypeDto })
  items?: VatTypeDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}

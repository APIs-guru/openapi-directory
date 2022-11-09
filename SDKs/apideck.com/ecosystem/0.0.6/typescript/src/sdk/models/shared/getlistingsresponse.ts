import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Listing } from "./listing";
import { Links } from "./links";
import { Meta } from "./meta";


export class GetListingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Listing })
  data: Listing[];

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}

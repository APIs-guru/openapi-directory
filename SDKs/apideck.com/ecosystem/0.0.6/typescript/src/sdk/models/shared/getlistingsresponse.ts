import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";
import { Links } from "./links";
import { Meta } from "./meta";



export class GetListingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Listing })
  data: Listing[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}

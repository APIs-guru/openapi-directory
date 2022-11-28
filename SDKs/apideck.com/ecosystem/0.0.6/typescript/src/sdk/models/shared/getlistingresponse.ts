import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";



export class GetListingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Listing;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Listing } from "./listing";


export class GetListingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Listing;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}

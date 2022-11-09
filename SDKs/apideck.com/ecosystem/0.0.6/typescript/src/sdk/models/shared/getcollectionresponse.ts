import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Collection } from "./collection";


export class GetCollectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Collection;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}

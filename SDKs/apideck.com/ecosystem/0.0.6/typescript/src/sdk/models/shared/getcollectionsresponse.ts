import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Collection } from "./collection";


export class GetCollectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Collection })
  data: Collection[];

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}

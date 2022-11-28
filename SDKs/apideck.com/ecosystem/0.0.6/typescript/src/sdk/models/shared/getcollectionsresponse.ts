import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";



export class GetCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Collection })
  data: Collection[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}

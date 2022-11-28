import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
import { Pagination } from "./pagination";



export class PlayersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Player })
  data?: Player[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Player } from "./player";
import { Pagination } from "./pagination";


export class PlayersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Player })
  data?: Player[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}

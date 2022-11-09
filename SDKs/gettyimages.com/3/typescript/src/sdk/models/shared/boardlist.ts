import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoardListBoard } from "./boardlistboard";


export class BoardList extends SpeakeasyBase {
  @Metadata({ data: "json, name=board_count" })
  boardCount?: number;

  @Metadata({ data: "json, name=boards", elemType: shared.BoardListBoard })
  boards?: BoardListBoard[];
}

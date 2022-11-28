import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoardListBoard } from "./boardlistboard";



export class BoardList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=board_count" })
  boardCount?: number;

  @SpeakeasyMetadata({ data: "json, name=boards", elemType: BoardListBoard })
  boards?: BoardListBoard[];
}

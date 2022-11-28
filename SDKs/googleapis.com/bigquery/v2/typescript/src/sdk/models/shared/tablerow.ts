import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCell } from "./tablecell";



export class TableRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=f", elemType: TableCell })
  f?: TableCell[];
}

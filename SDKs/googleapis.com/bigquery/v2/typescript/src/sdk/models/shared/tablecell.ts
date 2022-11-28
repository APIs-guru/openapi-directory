import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TableCell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=v" })
  v?: any;
}

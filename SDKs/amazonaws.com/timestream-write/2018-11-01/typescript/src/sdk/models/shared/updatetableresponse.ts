import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";



export class UpdateTableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Table" })
  table?: Table;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";



export class DescribeTableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Table" })
  table?: Table;
}

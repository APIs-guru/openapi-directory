import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Table } from "./table";


export class DescribeTableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Table" })
  table?: Table;
}

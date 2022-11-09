import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableReference } from "./tablereference";


export class IndexUnusedReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_table" })
  baseTable?: TableReference;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=index_name" })
  indexName?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

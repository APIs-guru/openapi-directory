import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableReference } from "./tablereference";



export class IndexUnusedReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_table" })
  baseTable?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=index_name" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

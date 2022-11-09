import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigtableColumnFamily } from "./bigtablecolumnfamily";


export class BigtableOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnFamilies", elemType: shared.BigtableColumnFamily })
  columnFamilies?: BigtableColumnFamily[];

  @Metadata({ data: "json, name=ignoreUnspecifiedColumnFamilies" })
  ignoreUnspecifiedColumnFamilies?: boolean;

  @Metadata({ data: "json, name=readRowkeyAsString" })
  readRowkeyAsString?: boolean;
}

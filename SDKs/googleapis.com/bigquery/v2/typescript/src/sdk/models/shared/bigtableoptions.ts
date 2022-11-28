import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigtableColumnFamily } from "./bigtablecolumnfamily";



export class BigtableOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnFamilies", elemType: BigtableColumnFamily })
  columnFamilies?: BigtableColumnFamily[];

  @SpeakeasyMetadata({ data: "json, name=ignoreUnspecifiedColumnFamilies" })
  ignoreUnspecifiedColumnFamilies?: boolean;

  @SpeakeasyMetadata({ data: "json, name=readRowkeyAsString" })
  readRowkeyAsString?: boolean;
}

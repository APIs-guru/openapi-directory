import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorProto } from "./errorproto";



export class TableDataInsertAllResponseInsertErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorProto })
  errors?: ErrorProto[];

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;
}


export class TableDataInsertAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insertErrors", elemType: TableDataInsertAllResponseInsertErrors })
  insertErrors?: TableDataInsertAllResponseInsertErrors[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}

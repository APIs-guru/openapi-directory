import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorProto } from "./errorproto";


export class TableDataInsertAllResponseInsertErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorProto })
  errors?: ErrorProto[];

  @Metadata({ data: "json, name=index" })
  index?: number;
}


export class TableDataInsertAllResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=insertErrors", elemType: shared.TableDataInsertAllResponseInsertErrors })
  insertErrors?: TableDataInsertAllResponseInsertErrors[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}

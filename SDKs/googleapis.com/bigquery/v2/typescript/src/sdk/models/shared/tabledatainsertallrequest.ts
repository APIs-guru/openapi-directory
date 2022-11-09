import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TableDataInsertAllRequestRows extends SpeakeasyBase {
  @Metadata({ data: "json, name=insertId" })
  insertId?: string;

  @Metadata({ data: "json, name=json" })
  json?: Map<string, any>;
}


export class TableDataInsertAllRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignoreUnknownValues" })
  ignoreUnknownValues?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.TableDataInsertAllRequestRows })
  rows?: TableDataInsertAllRequestRows[];

  @Metadata({ data: "json, name=skipInvalidRows" })
  skipInvalidRows?: boolean;

  @Metadata({ data: "json, name=templateSuffix" })
  templateSuffix?: string;
}

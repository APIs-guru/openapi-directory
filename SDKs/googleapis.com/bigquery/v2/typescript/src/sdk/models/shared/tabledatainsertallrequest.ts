import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TableDataInsertAllRequestRows extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insertId" })
  insertId?: string;

  @SpeakeasyMetadata({ data: "json, name=json" })
  json?: Map<string, any>;
}


export class TableDataInsertAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignoreUnknownValues" })
  ignoreUnknownValues?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: TableDataInsertAllRequestRows })
  rows?: TableDataInsertAllRequestRows[];

  @SpeakeasyMetadata({ data: "json, name=skipInvalidRows" })
  skipInvalidRows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=templateSuffix" })
  templateSuffix?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DmlStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedRowCount" })
  deletedRowCount?: string;

  @SpeakeasyMetadata({ data: "json, name=insertedRowCount" })
  insertedRowCount?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedRowCount" })
  updatedRowCount?: string;
}

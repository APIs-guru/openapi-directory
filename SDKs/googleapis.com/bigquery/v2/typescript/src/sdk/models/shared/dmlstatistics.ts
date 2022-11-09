import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DmlStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedRowCount" })
  deletedRowCount?: string;

  @Metadata({ data: "json, name=insertedRowCount" })
  insertedRowCount?: string;

  @Metadata({ data: "json, name=updatedRowCount" })
  updatedRowCount?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDataSourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDataSourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;

  @Metadata({ data: "json, name=DataSourceName" })
  dataSourceName: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDataSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;

  @SpeakeasyMetadata({ data: "json, name=DataSourceName" })
  dataSourceName: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDataSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;
}

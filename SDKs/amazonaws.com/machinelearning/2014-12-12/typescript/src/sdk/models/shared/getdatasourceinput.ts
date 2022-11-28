import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDataSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;

  @SpeakeasyMetadata({ data: "json, name=Verbose" })
  verbose?: boolean;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDataSourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;

  @Metadata({ data: "json, name=Verbose" })
  verbose?: boolean;
}

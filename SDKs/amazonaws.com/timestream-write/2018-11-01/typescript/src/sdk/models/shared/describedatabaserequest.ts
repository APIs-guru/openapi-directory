import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseParameter } from "./relationaldatabaseparameter";



export class GetRelationalDatabaseParametersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: RelationalDatabaseParameter })
  parameters?: RelationalDatabaseParameter[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseParameter } from "./relationaldatabaseparameter";



export class UpdateRelationalDatabaseParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: RelationalDatabaseParameter })
  parameters: RelationalDatabaseParameter[];

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}

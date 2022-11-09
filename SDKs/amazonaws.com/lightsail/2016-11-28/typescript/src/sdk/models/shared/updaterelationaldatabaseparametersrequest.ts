import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelationalDatabaseParameter } from "./relationaldatabaseparameter";


export class UpdateRelationalDatabaseParametersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.RelationalDatabaseParameter })
  parameters: RelationalDatabaseParameter[];

  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}

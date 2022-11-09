import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelationalDatabaseParameter } from "./relationaldatabaseparameter";


export class GetRelationalDatabaseParametersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.RelationalDatabaseParameter })
  parameters?: RelationalDatabaseParameter[];
}

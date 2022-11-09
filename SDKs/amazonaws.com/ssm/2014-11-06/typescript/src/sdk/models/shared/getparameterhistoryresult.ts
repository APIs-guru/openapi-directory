import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterHistory } from "./parameterhistory";


export class GetParameterHistoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Parameters", elemType: shared.ParameterHistory })
  parameters?: ParameterHistory[];
}

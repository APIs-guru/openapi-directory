import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterHistory } from "./parameterhistory";



export class GetParameterHistoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: ParameterHistory })
  parameters?: ParameterHistory[];
}

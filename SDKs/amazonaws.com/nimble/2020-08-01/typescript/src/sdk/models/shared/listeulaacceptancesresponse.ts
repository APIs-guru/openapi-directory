import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EulaAcceptance } from "./eulaacceptance";



export class ListEulaAcceptancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eulaAcceptances", elemType: EulaAcceptance })
  eulaAcceptances?: EulaAcceptance[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

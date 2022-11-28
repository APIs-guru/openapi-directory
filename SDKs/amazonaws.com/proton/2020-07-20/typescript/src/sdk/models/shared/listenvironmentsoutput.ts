import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSummary } from "./environmentsummary";



export class ListEnvironmentsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: EnvironmentSummary })
  environments: EnvironmentSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvironmentSummary } from "./environmentsummary";


export class ListEnvironmentsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.EnvironmentSummary })
  environments: EnvironmentSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

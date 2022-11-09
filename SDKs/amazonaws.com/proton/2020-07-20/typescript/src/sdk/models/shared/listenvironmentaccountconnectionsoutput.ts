import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvironmentAccountConnectionSummary } from "./environmentaccountconnectionsummary";


export class ListEnvironmentAccountConnectionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentAccountConnections", elemType: shared.EnvironmentAccountConnectionSummary })
  environmentAccountConnections: EnvironmentAccountConnectionSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

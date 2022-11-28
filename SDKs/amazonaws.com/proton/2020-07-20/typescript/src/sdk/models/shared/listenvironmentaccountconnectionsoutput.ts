import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnectionSummary } from "./environmentaccountconnectionsummary";



export class ListEnvironmentAccountConnectionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentAccountConnections", elemType: EnvironmentAccountConnectionSummary })
  environmentAccountConnections: EnvironmentAccountConnectionSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

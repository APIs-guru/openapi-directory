import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnection } from "./environmentaccountconnection";



export class GetEnvironmentAccountConnectionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentAccountConnection" })
  environmentAccountConnection: EnvironmentAccountConnection;
}

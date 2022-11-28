import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnection } from "./environmentaccountconnection";



export class CreateEnvironmentAccountConnectionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentAccountConnection" })
  environmentAccountConnection: EnvironmentAccountConnection;
}

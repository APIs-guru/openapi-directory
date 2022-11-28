import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnection } from "./environmentaccountconnection";



export class UpdateEnvironmentAccountConnectionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentAccountConnection" })
  environmentAccountConnection: EnvironmentAccountConnection;
}

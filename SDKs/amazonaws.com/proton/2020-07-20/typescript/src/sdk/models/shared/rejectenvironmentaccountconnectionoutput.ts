import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentAccountConnection } from "./environmentaccountconnection";


export class RejectEnvironmentAccountConnectionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentAccountConnection" })
  environmentAccountConnection: EnvironmentAccountConnection;
}

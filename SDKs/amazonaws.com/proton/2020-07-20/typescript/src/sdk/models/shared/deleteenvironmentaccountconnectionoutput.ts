import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentAccountConnection } from "./environmentaccountconnection";


export class DeleteEnvironmentAccountConnectionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentAccountConnection" })
  environmentAccountConnection?: EnvironmentAccountConnection;
}

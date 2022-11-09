import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";


export class GetOperationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Operation" })
  operation?: Operation;
}

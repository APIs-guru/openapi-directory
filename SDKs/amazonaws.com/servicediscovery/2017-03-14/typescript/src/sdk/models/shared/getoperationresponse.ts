import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



export class GetOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Operation" })
  operation?: Operation;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";


export class DeleteDistributionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: Operation;
}

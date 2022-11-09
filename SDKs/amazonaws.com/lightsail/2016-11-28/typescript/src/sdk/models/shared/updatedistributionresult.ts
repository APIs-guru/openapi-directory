import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";


export class UpdateDistributionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: Operation;
}

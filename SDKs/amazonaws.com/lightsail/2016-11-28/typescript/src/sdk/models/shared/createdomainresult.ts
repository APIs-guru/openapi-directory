import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



export class CreateDomainResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;
}

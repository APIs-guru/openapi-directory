import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstance } from "./dbinstance";



export class PromoteReadReplicaResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbInstance?: DbInstance;
}

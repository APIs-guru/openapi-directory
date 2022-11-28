import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstance } from "./dbinstance";



export class StartDbInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbInstance?: DbInstance;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstance } from "./dbinstance";



export class ModifyDbInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbInstance?: DbInstance;
}

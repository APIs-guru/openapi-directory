import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstance } from "./dbinstance";



export class CreateDbInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbInstance?: DbInstance;
}

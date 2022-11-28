import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstance } from "./dbinstance";



export class DbInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbInstance })
  dbInstances?: DbInstance[];

  @SpeakeasyMetadata()
  marker?: string;
}

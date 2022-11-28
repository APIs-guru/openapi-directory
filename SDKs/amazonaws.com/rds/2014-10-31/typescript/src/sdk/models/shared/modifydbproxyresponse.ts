import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxy } from "./dbproxy";



export class ModifyDbProxyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbProxy?: DbProxy;
}

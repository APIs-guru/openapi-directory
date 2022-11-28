import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxy } from "./dbproxy";



export class CreateDbProxyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbProxy?: DbProxy;
}

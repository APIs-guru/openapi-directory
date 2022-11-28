import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxy } from "./dbproxy";



export class DeleteDbProxyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbProxy?: DbProxy;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxy } from "./dbproxy";



export class DescribeDbProxiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbProxy })
  dbProxies?: DbProxy[];

  @SpeakeasyMetadata()
  marker?: string;
}

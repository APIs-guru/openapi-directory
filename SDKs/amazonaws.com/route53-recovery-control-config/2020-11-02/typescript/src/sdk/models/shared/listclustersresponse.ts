import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class ListClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Clusters", elemType: Cluster })
  clusters?: Cluster[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cluster } from "./cluster";


export class ListClustersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Clusters", elemType: shared.Cluster })
  clusters?: Cluster[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

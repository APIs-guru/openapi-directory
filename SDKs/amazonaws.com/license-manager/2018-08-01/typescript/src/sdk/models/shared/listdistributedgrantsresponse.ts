import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Grant } from "./grant";


export class ListDistributedGrantsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Grants", elemType: shared.Grant })
  grants?: Grant[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

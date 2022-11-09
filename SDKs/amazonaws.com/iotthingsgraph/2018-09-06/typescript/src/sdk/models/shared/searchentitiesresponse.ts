import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityDescription } from "./entitydescription";


export class SearchEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=descriptions", elemType: shared.EntityDescription })
  descriptions?: EntityDescription[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

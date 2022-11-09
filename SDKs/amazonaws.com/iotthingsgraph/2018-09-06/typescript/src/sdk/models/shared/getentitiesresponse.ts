import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityDescription } from "./entitydescription";


export class GetEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=descriptions", elemType: shared.EntityDescription })
  descriptions?: EntityDescription[];
}

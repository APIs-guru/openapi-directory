import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityTypeEnum } from "./entitytypeenum";
import { EntityFilter } from "./entityfilter";


export class SearchEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityTypes" })
  entityTypes: EntityTypeEnum[];

  @Metadata({ data: "json, name=filters", elemType: shared.EntityFilter })
  filters?: EntityFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

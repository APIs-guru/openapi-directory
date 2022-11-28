import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { EntityFilter } from "./entityfilter";



export class SearchEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityTypes" })
  entityTypes: EntityTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: EntityFilter })
  filters?: EntityFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

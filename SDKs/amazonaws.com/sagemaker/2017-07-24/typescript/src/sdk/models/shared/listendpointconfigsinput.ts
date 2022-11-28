import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointConfigSortKeyEnum } from "./endpointconfigsortkeyenum";
import { OrderKeyEnum } from "./orderkeyenum";



export class ListEndpointConfigsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: EndpointConfigSortKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: OrderKeyEnum;
}

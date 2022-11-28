import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaginationCoverage } from "./paginationcoverage";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { SupportedProperty } from "./supportedproperty";



export class ConnectorResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_fields_supported" })
  customFieldsSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=downstream_name" })
  downstreamName?: string;

  @SpeakeasyMetadata({ data: "json, name=downstream_unsupported_operations" })
  downstreamUnsupportedOperations?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: PaginationCoverage;

  @SpeakeasyMetadata({ data: "json, name=pagination_supported" })
  paginationSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ResourceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supported_fields", elemType: SupportedProperty })
  supportedFields?: SupportedProperty[];

  @SpeakeasyMetadata({ data: "json, name=supported_filters" })
  supportedFilters?: string[];

  @SpeakeasyMetadata({ data: "json, name=supported_list_fields", elemType: SupportedProperty })
  supportedListFields?: SupportedProperty[];

  @SpeakeasyMetadata({ data: "json, name=supported_operations" })
  supportedOperations?: string[];

  @SpeakeasyMetadata({ data: "json, name=supported_sort_by" })
  supportedSortBy?: string[];
}

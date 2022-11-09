import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaginationCoverage } from "./paginationcoverage";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { SupportedProperty } from "./supportedproperty";
import { SupportedProperty } from "./supportedproperty";


export class ConnectorResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @Metadata({ data: "json, name=downstream_name" })
  downstreamName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pagination" })
  pagination?: PaginationCoverage;

  @Metadata({ data: "json, name=pagination_supported" })
  paginationSupported?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: ResourceStatusEnum;

  @Metadata({ data: "json, name=supported_fields", elemType: shared.SupportedProperty })
  supportedFields?: SupportedProperty[];

  @Metadata({ data: "json, name=supported_filters" })
  supportedFilters?: string[];

  @Metadata({ data: "json, name=supported_list_fields", elemType: shared.SupportedProperty })
  supportedListFields?: SupportedProperty[];

  @Metadata({ data: "json, name=supported_operations" })
  supportedOperations?: string[];

  @Metadata({ data: "json, name=supported_sort_by" })
  supportedSortBy?: string[];
}

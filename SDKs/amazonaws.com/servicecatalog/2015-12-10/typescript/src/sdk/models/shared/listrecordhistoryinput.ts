import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessLevelFilter } from "./accesslevelfilter";
import { ListRecordHistorySearchFilter } from "./listrecordhistorysearchfilter";


export class ListRecordHistoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=AccessLevelFilter" })
  accessLevelFilter?: AccessLevelFilter;

  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=SearchFilter" })
  searchFilter?: ListRecordHistorySearchFilter;
}

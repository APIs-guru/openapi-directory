import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLevelFilter } from "./accesslevelfilter";
import { ListRecordHistorySearchFilter } from "./listrecordhistorysearchfilter";



export class ListRecordHistoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=AccessLevelFilter" })
  accessLevelFilter?: AccessLevelFilter;

  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SearchFilter" })
  searchFilter?: ListRecordHistorySearchFilter;
}

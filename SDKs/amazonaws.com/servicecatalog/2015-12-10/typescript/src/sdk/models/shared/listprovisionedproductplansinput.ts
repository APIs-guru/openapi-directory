import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLevelFilter } from "./accesslevelfilter";



export class ListProvisionedProductPlansInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=AccessLevelFilter" })
  accessLevelFilter?: AccessLevelFilter;

  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionProductId" })
  provisionProductId?: string;
}

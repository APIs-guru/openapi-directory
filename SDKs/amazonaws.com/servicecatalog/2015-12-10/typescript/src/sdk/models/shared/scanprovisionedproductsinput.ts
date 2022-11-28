import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLevelFilter } from "./accesslevelfilter";



export class ScanProvisionedProductsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=AccessLevelFilter" })
  accessLevelFilter?: AccessLevelFilter;

  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;
}

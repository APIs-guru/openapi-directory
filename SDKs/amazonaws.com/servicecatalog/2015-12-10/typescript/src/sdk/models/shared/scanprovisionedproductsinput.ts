import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessLevelFilter } from "./accesslevelfilter";


export class ScanProvisionedProductsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=AccessLevelFilter" })
  accessLevelFilter?: AccessLevelFilter;

  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LicensesGetAllCommonlyUsedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=featured" })
  featured?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class LicensesGetAllCommonlyUsedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LicensesGetAllCommonlyUsedQueryParams;
}


export class LicensesGetAllCommonlyUsedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.LicenseSimple })
  licenseSimples?: shared.LicenseSimple[];
}

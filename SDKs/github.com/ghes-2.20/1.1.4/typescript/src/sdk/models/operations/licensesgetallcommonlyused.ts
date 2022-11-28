import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LicensesGetAllCommonlyUsedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featured" })
  featured?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class LicensesGetAllCommonlyUsedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LicensesGetAllCommonlyUsedQueryParams;
}


export class LicensesGetAllCommonlyUsedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.LicenseSimple })
  licenseSimples?: shared.LicenseSimple[];
}

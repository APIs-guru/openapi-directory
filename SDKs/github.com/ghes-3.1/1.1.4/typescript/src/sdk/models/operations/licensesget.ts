import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LicensesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=license" })
  license: string;
}


export class LicensesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LicensesGetPathParams;
}


export class LicensesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  license?: shared.License;
}

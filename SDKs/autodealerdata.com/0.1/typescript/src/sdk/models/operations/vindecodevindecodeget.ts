import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VinDecodeVinDecodeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeRecall" })
  includeRecall?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=passEmpty" })
  passEmpty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin: string;
}


export class VinDecodeVinDecodeGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VinDecodeVinDecodeGetQueryParams;
}


export class VinDecodeVinDecodeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: shared.GenericResponse;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}

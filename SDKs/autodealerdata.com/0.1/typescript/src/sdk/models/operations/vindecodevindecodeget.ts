import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VinDecodeVinDecodeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeRecall" })
  includeRecall?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=passEmpty" })
  passEmpty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin: string;
}


export class VinDecodeVinDecodeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VinDecodeVinDecodeGetQueryParams;
}


export class VinDecodeVinDecodeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  genericResponse?: shared.GenericResponse;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}

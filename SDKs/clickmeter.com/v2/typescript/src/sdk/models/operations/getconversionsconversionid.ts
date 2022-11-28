import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConversionsConversionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}


export class GetConversionsConversionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConversionsConversionIdPathParams;
}


export class GetConversionsConversionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoConversionsConversion?: shared.ApiCoreDtoConversionsConversion;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

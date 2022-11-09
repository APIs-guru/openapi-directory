import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConversionsConversionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}


export class GetConversionsConversionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConversionsConversionIdPathParams;
}


export class GetConversionsConversionIdResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoConversionsConversion?: shared.ApiCoreDtoConversionsConversion;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
